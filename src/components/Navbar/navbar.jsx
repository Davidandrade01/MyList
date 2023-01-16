import styles from './navbar.module.scss'
import Link from 'next/link'


//hooks


import { useAuthValue } from '../../context/Authcontext'
import Logout from '../logout/logout'



export default function Navbar(){

    const {user}=useAuthValue()

  
    
return(

   <> <navbar className={styles.navbar} >
        <div>
            <Link className={styles.brand} href='/'> My <span>List</span></Link>
        </div>
        <ul className={styles.links_list}>

        {user && (<>
        <li >
                <Link  href='/tasks' className={({isActive})=>(isActive? styles.active:"")}> Tasks</Link>
            </li>
        </>)}

      

            {!user && (
                <>
                <li>
                <Link href='/login'>Account</Link>
            </li>
          
                </>
            )}


            
            <li>
                <Link href='/supportus'>Support us</Link>
            </li>
            <li>
                <Link href='/about'>About us</Link>
            </li>


           <Logout/>

        </ul>
    </navbar>
    </>
)
}