# Blockchain File Upload and Sharing

This project is a decentralized application (dApp) for secure file upload and sharing using blockchain technology. Built with **Hardhat** for smart contract development and **React** for the frontend (though you can adapt this if you're using a different frontend framework).

## Features

- **Decentralized Storage**: Store file metadata on the blockchain for immutability.
- **Secure Sharing**: Share files securely with unique addresses.
- **User Authentication**: Interact with the dApp using Ethereum wallets like MetaMask.
- **Seamless Integration**: Frontend powered by React for a responsive user experience.

## Tech Stack

- **Smart Contracts**: Solidity
- **Development Framework**: Hardhat
- **Frontend**: React (can be replaced with another framework if preferred)
- **Blockchain Network**: Ethereum (or compatible networks like Polygon, Binance Smart Chain, etc.)
- **Storage**: IPFS or other decentralized file storage solutions

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or later)
- Hardhat
- MetaMask browser extension
- IPFS (optional, if used for file storage)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/blockchain-file-sharing.git
   cd blockchain-file-sharing
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Setup environment variables:**

   Create a `.env` file in the root directory and configure the following:

   ```env
   PRIVATE_KEY="your-private-key"
   INFURA_API_KEY="your-infura-project-id"
 
   ```

### Smart Contract Deployment

1. **Compile the contracts:**

   ```bash
   npx hardhat compile
   ```

2. **Deploy the contracts:**

   ```bash
   npx hardhat run scripts/deploy.js --network <network-name>
   ```

   Replace `<network-name>` with your desired network (e.g., `localhost`, `goerli`, etc.).

3. **Verify the deployment:**

   Check the console output for the deployed contract address.

### Running the Frontend

1. Navigate to the frontend directory (if separate):

   ```bash
   cd frontend
   ```

2. Install frontend dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open the application in your browser:

   ```
   http://localhost:3000
   ```

---

## Project Structure

```
root-directory
├── contracts        # Solidity smart contracts
├── scripts          # Deployment and testing scripts
├── test             # Unit tests for smart contracts
├── frontend         # React application (or your chosen frontend)
├── hardhat.config.js # Hardhat configuration
└── .env             # Environment variables
```

---

## Usage

1. Connect your MetaMask wallet.
2. Upload a file to the decentralized storage (IPFS or similar).
3. Share the file by providing the recipient’s address.

---

## Tests

Run unit tests to ensure smart contract functionality:

```bash
npx hardhat test
```

---

## Troubleshooting

- **MetaMask Connection Issues**: Ensure your wallet is connected to the correct network.
- **Deployment Errors**: Double-check your `.env` configuration and network settings.
- **Frontend Build Issues**: Clear your Node modules and reinstall dependencies:

  ```bash
  rm -rf node_modules
  npm install
  ```

---

## Contributing

1. Fork the repository.
2. Create a feature branch.
3. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Acknowledgements

- [Hardhat Documentation](https://hardhat.org/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [IPFS Documentation](https://docs.ipfs.io/)

