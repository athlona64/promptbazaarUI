import Head from 'next/head'
import ResponsiveAppBar from '../appbar';
import BasicGrid from '../top';
import FullSearch from '../search';
import HorizontalLinearStepper from './content'
export default function SellIndex() {
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
        <HorizontalLinearStepper ></HorizontalLinearStepper>

      </main>
    </>
  )
}
