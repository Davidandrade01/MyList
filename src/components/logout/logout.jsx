import styles from './logout.module.scss'
import { useAuthentication } from "../../hooks/useAuthentication"
import { signOut,getAuth } from "firebase/auth"
import { useAuthValue } from '../../context/Authcontext'
import {RxExit} from 'react-icons/rx'





export default function Logout(){
    const {checkIfIsCancelled}=useAuthentication()
    const {user}=useAuthValue()
    const auth = getAuth();
   
    const logout=()=>{
        
        signOut(auth)
        
        
       }
    return(
        <>
            {user && (<>
           <li>   <RxExit className={styles.icon} onClick={logout} size={25} color='#FFB800'/>
            
            </li>
        </>)}


      
        </>
    )

    
}