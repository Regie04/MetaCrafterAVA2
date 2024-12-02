# Workout Repetition Counter

This project is a decentralized workout repetition counter built on Ethereum using Solidity and a React frontend. It facilitates tracking of exercise performance by counting successful and failed repetitions.

## Features

- **MetaMask Integration**: Uses MetaMask for authentication and transaction signing.
- **Track Repetitions**: Allows users to increment or decrement the count of workout repetitions.
- **Real-time Updates**: Updates the counter value in real-time based on user interactions.

## Smart Contract Details

### Functions

- **increment**: Adds a successful repetition to the counter.
- **decrement**: Removes a repetition from the counter for incorrect form or mistakes.
- **getCounter**: Returns the current counter value.

### Error Handling

- **require**: Used to validate conditions and inputs.
- **revert**: Used to handle errors and revert the transaction.

## Frontend Details

The frontend is a React application that interacts with the smart contract using ethers.js. It includes:

- **Connect Wallet**: Allows users to connect their MetaMask wallet.
- **Successful Rep**: Button to increment the counter for successful repetitions.
- **Failed Rep**: Button to decrement the counter for failed repetitions.
- **Counter Display**: Shows the current value of the counter.

### Styling

The application is styled using CSS-in-JS with the following design elements:

- **Container**: Light teal background with centered content.
- **Header**: Dark teal background with white text and rounded corners.
- **Description and User Interface Sections**: White background, padding, rounded corners, and subtle box-shadow for a card-like effect.
- **Buttons**: Dark teal background with white text and hover effect.

### License

This project is licensed under the MIT License.

### Authors

- **Facebook**: Reginald Carl Sanchez
- **GitHub**: @Regie04
- **Mail**: sanchezreginald4@gmail.com
