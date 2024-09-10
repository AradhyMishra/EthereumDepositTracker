# EthereumDepositTracker
This project implements an Ethereum Deposit Tracker designed to monitor and log ETH deposits on the Beacon Deposit Contract. It interacts with the Ethereum blockchain using Ethereum RPC methods , processes real-time deposit data, and records transaction details. The tracker includes robust error handling, logging, and notification features.
This project is an Ethereum Deposit Tracker that monitors and records deposits made to the Beacon Deposit Contract. It was developed as part of the VIT SDE Hiring Task for Luganodes, with a focus on building a robust, real-time tracking system.

Key Features
Ethereum RPC Integration:

Successfully established a connection using Ethereum RPC methods (via Alchemy) to interact with the Ethereum blockchain.
Implemented real-time data fetching to track and monitor deposits.
Deposit Tracking Logic:

Developed logic to track deposits to the Beacon Deposit Contract at address 0x00000000219ab540356cBB839Cbe05303d7705Fa.
Captured deposit details like block number, timestamp, transaction fee, sender's public key, and more.
Handled multiple deposits within a single transaction, including internal transactions.
Error Handling & Logging:

Implemented comprehensive error handling across API calls and RPC interactions to ensure robust operation.
Integrated logging mechanisms to track errors and important events, providing greater transparency and debugging capabilities.
Notifications & Alerts (Optional):

Integrated with Telegram for notifications to alert users when a new deposit is detected.
Documentation & Deployment:

Provided detailed setup instructions and usage guidelines for easy replication and usage of the Ethereum deposit tracker.
Code is well-documented with comments, ensuring maintainability and scalability.
Optional Features:

Planned integration with Grafana for visualizing deposit data and system metrics.
Dockerized the application for easy deployment.
𝗧𝗵𝗲 𝗯𝗲𝗹𝗼𝘄 𝘀𝗰𝗿𝗲𝗲𝗻𝘀𝗵𝗼𝘁𝘀 𝗮𝗿𝗲 𝗳𝗿𝗼𝗺 𝗮 𝘀𝗶𝗱𝗲 𝘄𝗲𝗯 𝗮𝗽𝗽𝗹𝗶𝗰𝗮𝘁𝗶𝗼𝗻 𝘁𝗵𝗮𝘁 𝗜 𝗰𝗿𝗲𝗮𝘁𝗲𝗱 𝘄𝗵𝗶𝗰𝗵 𝗳𝗲𝘁𝗰𝗵𝗲𝘀 𝘁𝗿𝗮𝘀𝗮𝗰𝘁𝗶𝗼𝗻𝗮𝗹 𝗱𝗮𝘁𝗮 𝗳𝗿𝗼𝗺 𝘁𝗵𝗲 𝗺𝗼𝗻𝗴𝗼𝗗𝗯 𝗱𝗮𝘁𝗮𝗯𝗮𝘀𝗲(𝗰𝗼𝗹𝗹𝗲𝗰𝘁𝗲𝗱 𝘂𝘀𝗶𝗻𝗴 𝗥𝗣𝗠 𝗶𝗻𝘁𝗲𝗴𝗿𝗮𝘁𝗶𝗼𝗻) 𝗮𝗻𝗱 𝗱𝗶𝘀𝗽𝗹𝗮𝘆𝘀 𝗶𝘁 𝗶𝗻 𝗮 𝘀𝘁𝗿𝘂𝗰𝘁𝘂𝗿𝗲𝗱 𝗺𝗮𝗻𝗻𝗲𝗿 𝗶𝗻 𝘁𝗵𝗲 𝗮𝗽𝗽𝗹𝗶𝗰𝗮𝘁𝗶𝗼𝗻:
![image](https://github.com/user-attachments/assets/dfba590f-0124-4acc-999b-e57512395748)
![image](https://github.com/user-attachments/assets/609d153e-710a-48e4-a6e3-995034ef3cd5)

