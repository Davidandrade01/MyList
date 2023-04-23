import styles from './login.module.scss'
import Head from 'next/head'
import Link from 'next/link'
import {useAuthentication} from '../../hooks/useAuthentication'
import { useState, useEffect } from 'react'
import {getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useAuthValue } from '../../context/AuthContext'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/navigation'




export default function Login(){
    const[email, setEmail]=useState("")
     const [password,SetPassword]=useState("")
     const[error, setError]=useState("")

     

        //Recriação do usuário agora com apenas email e senha
        //
     const{error:authError,loading,}= useAuthentication()
     

     const auth = getAuth();
     const {user}=useAuthValue()
     const router = useRouter();


    const handleSubmit=async(e)=>{  
        e.preventDefault()
        setError("")

       const user={
        email:email,
        password:password

       }
        const res =await Log(user) 
        console.log(res)

        
       
       
    }

    //identificação deste usuario e comparação com o existente no registe atraves
    //da função exixtente SignInWithEmailAndPassword

    const Log=async(data)=>{
      
       

        try {
            
            await signInWithEmailAndPassword(auth, data.email,data.password)
           
        } catch (error) {
            
            let systemErrorMessage;
            if(error.message.includes("user-not-found")){
                systemErrorMessage=(
                <p> User not Found! Try <Link className={styles.link_subscribe} href='/subscribe'>Subscribe here</Link></p>)
            }
            else if(error.message.includes("wrong-password")){
                systemErrorMessage=("Email or password do not match")
            }
           else {
            systemErrorMessage=("oops! Something went wrong, try again later.")
           }
            setError(systemErrorMessage)
           
        }

    }
    
     {user && (
        setTimeout(()=>{
         router.push("/tasks")
         
        },1000)   
     )}
    useEffect(()=>{
        setError(authError  )
    },[authError])


     
    
        
 

    return(
        <><Head><title>My List- Login</title></Head>
        <div className={styles.container}>
            <h1 >Login</h1>
            <p> Log in to plan your day</p>
            
            <form onSubmit={handleSubmit}>
            
            
                <label >
                
                    <input type="email" placeholder='email@.com' required name='displayemail'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </label>
            
                <label >
                   
                    <input type="password" placeholder='Password' required name='password'
                        value={password}
                        onChange={(e)=>SetPassword(e.target.value)}
                    />
                </label>
               <div>
               {!loading && <button className={styles.btn}>Login </button>}
               {loading && <button className={styles.btn_disabled} disabled>Wait...</button>}

               <label> Create an account <Link className={styles.link_subscribe} href='/subscribe'>here</Link></label>
              
               </div>
               {error && <p className={styles.error}>{error}</p>}
               </form>
               

        </div>
        </>
    )
}