import React, { useEffect, useState } from "react";
import "./App.css";
import twitterLogo from "./assets/twitter-logo.svg";

// Constants
const TWITTER_HANDLE = "_buildspace";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;
      if (solana) {
        if (solana.isPhantom) {
          console.log("Phantom wallet found!");
          const response = await solana.connect({ onlyIfTrusted: true });
          console.log(
            "Connected with Public Key:",
            response.publicKey.toString()
          );
          setWalletAddress(response.publicKey.toString());
        }
      } else {
        alert("Solana object not found! Get a Phantom Wallet");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const connectWallet = async () => {
    const { solana } = window;
    if (solana) {
      const response = await solana.connect();
      console.log("Connected with Public Key:", response.publicKey.toString());
      alert("Connected with Public Key:" + response.publicKey.toString());
      setWalletAddress(response.publicKey.toString());
    }
  };

  //   const renderNotConnectedContainer = () => {
  //     <button className="connect-wallet-button" onClick={connectWallet}>
  //       Connect to Wallet
  //     </button>;
  //   };
  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);
  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header"> CELER</p>
          <p className="sub-text">NFT drop machine with fair mint</p>
          <button className="connect-wallet-button" onClick={connectWallet}>
            Connect to Wallet
          </button>{" "}
          <br />
          <br />
          <a href="https://explorer.solana.com/address/FHdsUeP4KvRSexU1Bfzmi5QsVCyce3wzC9NawcUENKpV">
            <button className="connect-wallet-button1" onClick={connectWallet}>
              Mint NFT
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
