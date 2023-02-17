import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import ResponsiveAppBar from './appbar';
import BasicGrid from './top';


export default function Home() {
  return (
    <>
    <ResponsiveAppBar></ResponsiveAppBar>
    
    
      <Head>
        <title>PromptBazaar next generation for prompt marketplace</title>
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
        <div >
          
          <p>
            Prompt Bazaar is Prompt marketplace&nbsp;
            {/* <code className={styles.code}>pages/index.js</code> */}
          </p>
          <div>
       
              By{' PromptBazaar'}

          </div>
        </div>

        <div>
         <h1>Stay for PromptBazaar</h1> 
  
        </div>

      </main>
    </>
  )
}
