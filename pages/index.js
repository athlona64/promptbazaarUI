import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import ResponsiveAppBar from './appbar';
import BasicGrid from './top';
import Middle from './middle';
import Divider from '@mui/material/Divider';
import FullSearch from './search';
import GuestFooter from './footer';
export default function Home() {
  return (
    <>
    <ResponsiveAppBar></ResponsiveAppBar>
    
    
      <Head>
        <title>PromptBazaar | Prompt marketplace for trading your prompt instant and allow all country with web3 payment</title>
        <meta name="description" content="Prompt marketplace" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     
      <main>
        <br></br>
        <br></br>
        <br></br>
        <br></br><br></br>
        <BasicGrid></BasicGrid>
        <br/>
        <FullSearch></FullSearch>
        <Middle></Middle>

        <GuestFooter></GuestFooter>

      </main>
    </>
  )
}
