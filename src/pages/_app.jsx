import styles from '../../styles/globals.scss'

import Navbar from '../components/Navbar/navbar'

import { PayPalScriptProvider } from '@paypal/react-paypal-js'

//hooks
import { useState, useEffect } from 'react'
import { useAuthentication } from '../hooks/useAuthentication'

//context 
 import { AuthProvider } from '../context/AuthContext'
 import { onAuthStateChanged } from 'firebase/auth'


 const initialOptions = {
  "client-id": "ARMm5mkbDX8IM8R3jBRWDfmRkWQ-VIAua5benPdFkckKqCdVnooDqffSICrf2jQ49ufxT5uz1pEgS9iY",
  currency: "BRL",
  intent: "capture",
  
};
 
function MyApp({ Component, pageProps }) {

   const[user, setUser]=useState(undefined) // monitoramento se há usuário logado nas páginas
   const {auth}=useAuthentication() //extraido do useAuthetication

   const loadingUser= user === undefined
   

   useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      setUser(user)
    }
    )
   },[auth])

   if(loadingUser){
    <p>loading...</p>
   }
  

  return (
  <>
  <AuthProvider value={{user}}>
  <PayPalScriptProvider options={initialOptions}>
    <Navbar/>
      <Component {...pageProps}/>
      </PayPalScriptProvider>
  </AuthProvider>
  </>
  )
}

export default MyApp
