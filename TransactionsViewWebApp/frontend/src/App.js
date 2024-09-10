import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/transactions')
      .then(response => setTransactions(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ethereum Transactions</h1>
      </header>
      <main>
        <section className="table-container">
          <table>
            <thead>
              <tr>
                <th>Block Number</th>
                <th>Block Timestamp</th>
                <th>Fee</th>
                <th>Hash</th>
                <th>Public Key</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(tx => (
                <tr key={tx._id}>
                  <td>{tx.blockNumber}</td>
                  <td>{new Date(tx.blockTimestamp).toLocaleString()}</td>
                  <td>{tx.fee}</td>
                  <td>{tx.hash}</td>
                  <td>{tx.pubkey}</td>
                  <td>{new Date(tx.timestamp).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default App;
