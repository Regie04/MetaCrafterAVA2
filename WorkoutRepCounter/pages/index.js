import { useState, useEffect } from "react";
import { ethers } from "ethers";
import counterAbi from "../artifacts/contracts/Assessment.sol/WorkoutRepCounter.json";

export default function HomePage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [counterContract, setCounterContract] = useState(undefined);
  const [counter, setCounter] = useState(undefined);

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Update this after deployment
  const counterABI = counterAbi.abi;

  const getWallet = async () => {
    if (window.ethereum) {
      setEthWallet(window.ethereum);
    }

    if (ethWallet) {
      const accounts = await ethWallet.request({ method: "eth_accounts" });
      handleAccount(accounts);
    }
  };

  const handleAccount = (accounts) => {
    if (accounts && accounts.length > 0) {
      setAccount(accounts[0]);
    } else {
      console.log("No account found");
    }
  };

  const connectAccount = async () => {
    if (!ethWallet) {
      alert("MetaMask wallet is required to connect");
      return;
    }

    const accounts = await ethWallet.request({ method: "eth_requestAccounts" });
    handleAccount(accounts);

    getCounterContract();
  };

  const getCounterContract = () => {
    const provider = new ethers.providers.Web3Provider(ethWallet);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, counterABI, signer);

    setCounterContract(contract);
  };

  const getCounterValue = async () => {
    if (counterContract) {
      const value = await counterContract.getCounter();
      setCounter(value.toNumber());
    }
  };

  const incrementCounter = async () => {
    if (counterContract) {
      const tx = await counterContract.increment();
      await tx.wait();
      getCounterValue();
    }
  };

  const decrementCounter = async () => {
    if (counterContract) {
      const tx = await counterContract.decrement();
      await tx.wait();
      getCounterValue();
    }
  };

  const initUser = () => {
    if (!ethWallet) {
      return <p>Please install MetaMask to use this app.</p>;
    }

    if (!account) {
      return <button onClick={connectAccount}>Connect Wallet</button>;
    }

    if (counter === undefined) {
      getCounterValue();
    }

    return (
      <div className="user-interface">
        <p>Your Account: {account}</p>
        <p>Counter Value: {counter}</p>
        <button onClick={incrementCounter}>Successful Rep</button>
        <button onClick={decrementCounter}>Failed Rep</button>
      </div>
    );
  };

  useEffect(() => {
    getWallet();
  }, []);

  return (
    <main className="container">
      <header>
        <h1>Workout Repetition Counter</h1>
      </header>
      <section className="description">
        <h2>System Description</h2>
        <p><strong>Functions:</strong></p>
        <ul>
          <li><strong>Successful Rep:</strong> Add repetitions completed.</li>
          <li><strong>Failed Rep:</strong> Remove repetitions for incorrect form or mistakes.</li>
        </ul>
        <p><strong>Use Case:</strong> Tracks exercise performance.</p>
      </section>
      {initUser()}
      <style jsx>{`
        .container {
          text-align: center;
          font-family: 'Roboto', sans-serif;
          padding: 20px;
          background-color: #e0f7fa;
          min-height: 100vh;
        }
        header {
          background-color: #00796b;
          padding: 20px;
          color: white;
          border-radius: 10px;
          margin-bottom: 20px;
        }
        .description {
          background-color: #ffffff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
        }
        .user-interface {
          background-color: #ffffff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        button {
          margin: 10px 0;
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          border: none;
          border-radius: 5px;
          background-color: #00796b;
          color: white;
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        button:hover {
          background-color: #004d40;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
        }
        p {
          font-size: 18px;
          color: #004d40;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          margin: 5px 0;
        }
      `}</style>
    </main>
  );
}