import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

import { ethers } from "ethers";

import Upload from './arctifacts/contracts/Upload.sol/Upload.json';
import FileUpload from "./components/fileUpload";
import Display from "./components/display";
import Modal from "./components/modal";


function App() {
  const [account, setAccount] = useState('');
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => { 
    const provider =  new ethers.BrowserProvider(window.ethereum);
    const wallet = async () => {
      if (provider) {
        try {
          await provider.send("eth_requestAccounts", []); 
          const signer =await provider.getSigner();
          const address = await signer.getAddress();
          setAccount(address);
          console.log(address);
          const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
          const contract = new ethers.Contract(contractAddress, Upload.abi, signer);
          setContract(contract);
          console.log("hi");
          console.log(contract);

          setProvider(signer);
        } catch (error) {
          console.error("Error connecting to wallet:", error);
        }
      } else {
        alert("Metamask not installed");
      }
    };

    provider && wallet();
  }, []);

  return (
    <div className="App">
      {(!modalOpen) && (
        <button className="share" onClick={() => setModalOpen(true)}>
          Share
        </button>
      )}
      {modalOpen && (
        <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
      )}
      <h1>Connected Account: {account || "Not connected"}</h1>
      <FileUpload account={account} contract={contract} provider={provider}></FileUpload>
      <Display contract={contract} account={account}></Display>
    </div>
  );
}

export default App
