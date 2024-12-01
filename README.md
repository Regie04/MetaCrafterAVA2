# Telemedicine Payment System

This project is a decentralized telemedicine payment system built on Ethereum using Solidity and a simple HTML/JavaScript frontend. It facilitates secure and automated payments for doctor-patient consultations, with funds held in escrow and released upon consultation completion.

## Features

- **Secure Payments**: Payments are securely held in escrow on the Ethereum blockchain until the consultation is confirmed.
- **Automated Fee Release**: Automatically releases the consultation fee to the doctor upon confirmation.
- **Emergency Revert**: Allows the patient to revert the consultation and get a refund if the consultation is not completed.
- **MetaMask Integration**: Uses MetaMask for authentication and transaction signing.

## Smart Contract Details

### Functions

- **pay**: Allows the patient to pay the consultation fee.
- **confirmConsultation**: Allows the doctor to confirm the consultation and release the payment.
- **emergencyRevert**: Allows the patient to revert the consultation and get a refund.
- **getDetails**: Returns the details of the consultation (patient, doctor, fee, and consultation status).
- **checkInvariant**: Ensures the contract's balance is correct based on the consultation status.

### Error Handling

- **require**: Used to validate conditions and inputs.
- **revert**: Used to handle errors and revert the transaction.
- **assert**: Used to check for conditions that should never be false.

## Frontend Details

The frontend is a simple HTML and JavaScript application that interacts with the smart contract using Web3.js. It includes:

- **Pay Consultation Fee**: Allows the patient to pay the consultation fee.
- **Confirm Consultation**: Allows the doctor to confirm the consultation.
- **Emergency Revert**: Allows the patient to revert the consultation.
- **Consultation Details**: Displays the details of the consultation.

### License

This project is licensed under the MIT License.
