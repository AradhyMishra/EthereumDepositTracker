
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/EthereumDb', {
    // Removed useNewUrlParser and useUnifiedTopology
  }).then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
  

// Transaction Schema
const transactionSchema = new mongoose.Schema({
  blockNumber: Number,
  blockTimestamp: String,
  fee: String,
  hash: String,
  pubkey: String,
  timestamp: String,
}, { collection: 'EthereumC' }); // Explicitly set collection name

const Transaction = mongoose.model('Transaction', transactionSchema);

// Endpoint to fetch transactions
app.get('/transactions', async (req, res) => {
  try {
    const transactions = await Transaction.find();
    console.log('Fetched Transactions:', transactions); // Debugging line
    res.json(transactions);
  } catch (err) {
    console.error('Error fetching transactions:', err); // Debugging line
    res.status(500).json({ message: err.message });
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
