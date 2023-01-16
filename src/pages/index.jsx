import Head from 'next/head'
import styles from '../../styles/Home.module.scss'
import Link from 'next/link'
import Image from 'next/image'


export default function Home() {
  return (
    <><title>My List</title>
    <div className={styles.home}>
    
    <Image src='/image/mylist.png' width={700} height={500} alt={"MyList-todo"} />

     <div className={styles.brand}>
       <h1>Plan, edit, create, set goals.
       Make the most of your day Use <b>My LIST</b></h1>
       <button>
         <Link href='/login'>Plan, now!</Link>
       </button>
     </div>
    </div>
    </>
  )
  }
