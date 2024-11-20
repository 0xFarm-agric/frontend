// hooks/useWallet.js
import { useState, useEffect } from 'react';




const TARGET_CHAIN_ID = '0x14a34';
const PROD_TARGET_CHAIN_ID = '0x2105';

export const useWallet = () => {
    
    const [walletAddress, setWalletAddress] = useState('');
    const [networkError, setNetworkError] = useState('');
    const [ensName, setEnsName] = useState('');

    const connectWallet = async () => {
        if (typeof window.ethereum !== 'undefined') {
            try {
                // Request account access
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

                // Check the network chain ID
                const chainId = await window.ethereum.request({ method: 'eth_chainId' });
                if (chainId !== PROD_TARGET_CHAIN_ID) {
                  
                    setNetworkError('Please switch to the correct network (chainId: 84532).');
                    setWalletAddress(''); // Clear wallet address on network error
                } else {
                    setNetworkError('');
                    setWalletAddress(accounts[0]);



                }
            } catch (error) {
                console.error("Error connecting to wallet: ", error);
            }
        } else {
            alert('MetaMask is not installed. Please install it to use this feature.');
        }
    };

  

    return {
        walletAddress,
        networkError,
        connectWallet,
    };
};
