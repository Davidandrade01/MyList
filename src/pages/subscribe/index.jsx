

import { redirect } from 'next/dist/server/api-utils'
import  Head  from 'next/head'
import { useState,UseEffect, useEffect } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'
import { useRouter } from 'next/navigation'
import { useAuthValue } from '../../context/Authcontext'



import styles from './subscribe.module.scss'
export default function Subscribe(){

     const[displayname, setDisplayname]=useState("")
     const[email, setEmail]=useState("")
     const [password,SetPassword]=useState("")
     const[confirmpassword, SetConfirmpassword]=useState("")
     const[error, setError]=useState("")

     const {user}=useAuthValue()
     const router = useRouter();

     const{createUser,error:authError,loading}=useAuthentication()
    

    const handleSubmit=async(e)=>{  
        e.preventDefault()
        setError("")

       const user={
        displayname:displayname,
        email:email,
        password:password

       }

        if(password!==confirmpassword){
            setError(" Please, try again.   Passwords don't match!")
            return
        }

        const res =await createUser(user)
        console.log(res)
       

       
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
        <><Head><title>My List- Subscribe</title></Head>
        <div className={styles.container}>
            <h1 >Subscription</h1>
            <p> Register and keep your tasks up to date</p>
            
            <form onSubmit={handleSubmit}>
                <label >
                    
                    <input type="text" placeholder='Name' required name='displayname' 
                    value={displayname}
                    onChange={(e)=>setDisplayname(e.target.value)}
                    />
                </label>
            
                <label >
                    
                    <input type="email" placeholder='email@.com' required name='displayemail'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </label>
            
                <label >
                    
                    <input type="password" placeholder='Choose a password' required name='password'
                        value={password}
                        onChange={(e)=>SetPassword(e.target.value)}
                    />
                </label>
            
                <label >
                    
                    <input type="password" placeholder='Confirm the password' required name='Confirmpasword'
                        value={confirmpassword}
                        onChange={(e)=>SetConfirmpassword(e.target.value)}
                    />
                </label>
            
          
               <div>
               {!loading && <button className={styles.btn}>Subscribe </button>}
               {loading && <button className={styles.btn_disabled} disabled>Wait...</button>}
               

               </div>
               {error && <p className={styles.error}>{error}</p>}
               </form>

        </div>
        </>
    )
}