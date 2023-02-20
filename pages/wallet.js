import Head from "next/head";
import styles from "../styles/Home.module.css";
import Web3Modal from "web3modal";
import { providers, Contract } from "ethers";
import { useEffect, useRef, useState } from "react";
// import { WHITELIST_CONTRACT_ADDRESS, abi } from "../constants";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Link from 'next/link';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const settings = ['Profile', 'Logout'];
const Item = styled('div')(({ theme }) => ({

  }));
  
export default function WalletConnect() {
  // walletConnected keep track of whether the user's wallet is connected or not
  const [walletConnected, setWalletConnected] = useState(false);
  // joinedWhitelist keeps track of whether the current metamask address has joined the Whitelist or not
//   const [joinedWhitelist, setJoinedWhitelist] = useState(false);
  // loading is set to true when we are waiting for a transaction to get mined
  const [walletAddress, setWalletAddress] = useState('');
  const [loading, setLoading] = useState(false);
  // numberOfWhitelisted tracks the number of addresses's whitelisted
  const [numberOfWhitelisted, setNumberOfWhitelisted] = useState(0);
  // Create a reference to the Web3 Modal (used for connecting to Metamask) which persists as long as the page is open
  const web3ModalRef = useRef();
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (setting = '') => {
    if(setting === 'Logout') {
        disConnectWallet();
        setWalletConnected(false);
    }
    setAnchorElUser(null);
  };
  /**
   * Returns a Provider or Signer object representing the Ethereum RPC with or without the
   * signing capabilities of metamask attached
   *
   * A `Provider` is needed to interact with the blockchain - reading transactions, reading balances, reading state, etc.
   *
   * A `Signer` is a special type of Provider used in case a `write` transaction needs to be made to the blockchain, which involves the connected account
   * needing to make a digital signature to authorize the transaction being sent. Metamask exposes a Signer API to allow your website to
   * request signatures from the user using Signer functions.
   *
   * @param {*} needSigner - True if you need the signer, default false otherwise
   */
  const getProviderOrSigner = async (needSigner = true) => {
    // Connect to Metamask
    // Since we store `web3Modal` as a reference, we need to access the `current` value to get access to the underlying object
    console.log('getProviderOrSigner');
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    console.log(provider);
    // If user is not connected to the Goerli network, let them know and throw an error
    const { chainId } = await web3Provider.getNetwork();
    // if (chainId !== 5) {
    //   window.alert("Change the network to Goerli");
    //   throw new Error("Change network to Goerli");
    // }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      setWalletAddress(await signer.getAddress());
      console.log(walletAddress);
      return signer;
    }
   
    return web3Provider;
  };

  const disConnectWallet = async () => {
    console.log('disconnected');
    await web3ModalRef.current.clearCachedProvider();
    window.localStorage.clear();
    setWalletAddress('');
  }
  /**
   * addAddressToWhitelist: Adds the current connected address to the whitelist
   */
//   const addAddressToWhitelist = async () => {
//     try {
//       // We need a Signer here since this is a 'write' transaction.
//       const signer = await getProviderOrSigner(true);
//       // Create a new instance of the Contract with a Signer, which allows
//       // update methods
//       const whitelistContract = new Contract(
//         WHITELIST_CONTRACT_ADDRESS,
//         abi,
//         signer
//       );
//       // call the addAddressToWhitelist from the contract
//       const tx = await whitelistContract.addAddressToWhitelist();
//       setLoading(true);
//       // wait for the transaction to get mined
//       await tx.wait();
//       setLoading(false);
//       // get the updated number of addresses in the whitelist
//       await getNumberOfWhitelisted();
//       setJoinedWhitelist(true);
//     } catch (err) {
//       console.error(err);
//     }
//   };


  /*
    connectWallet: Connects the MetaMask wallet
  */
  const connectWallet = async () => {
    try {
      // Get the provider from web3Modal, which in our case is MetaMask
      // When used for the first time, it prompts the user to connect their wallet
      console.log('hello connect');
    
      await getProviderOrSigner();
      setWalletConnected(true);

    } catch (err) {
      console.error(err);
    }
  };

  /*
    renderButton: Returns a button based on the state of the dapp
  */
  const renderButton = () => {
    if (walletConnected) {
        return (
          <>
          <Stack direction="row" spacing={2}>
            <Item sx={{marginTop: 1}}> <p>{walletAddress.substring(0,5)}...{walletAddress.substring(walletAddress.length-5)}</p></Item>
            <Item>
                <Tooltip title="open">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
                </Tooltip>
                <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}

                >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
                    <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}
                </Menu>


            </Item>
          </Stack>
           
            
          </>  
           
        );
    } else {
      return (
        <button onClick={connectWallet} className={styles.button}>
          Connect your wallet
        </button>
      );
    }
  };

  // useEffects are used to react to changes in state of the website
  // The array at the end of function call represents what state changes will trigger this effect
  // In this case, whenever the value of `walletConnected` changes - this effect will be called
  useEffect(() => {
    // if wallet is not connected, create a new instance of Web3Modal and connect the MetaMask wallet
    if (!walletConnected) {
      // Assign the Web3Modal class to the reference object by setting it's `current` value
      // The `current` value is persisted throughout as long as this page is open
      web3ModalRef.current = new Web3Modal({
        network: "goerli",
        providerOptions: {},
        cacheProvider: false, // optional
        disableInjectedProvider: false,
      });
      connectWallet();
    }
  }, [walletConnected]);

  return (
    <>
     {renderButton()}
    </>
         
  );
}