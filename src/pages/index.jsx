import Head from 'next/head'
import styles from '../../styles/Home.module.scss'
import Link from 'next/link'
import Image from 'next/image'


export default function Home() {
  return (
    <><title>My List</title>
    <div className={styles.home}>
    
    <Image src='/image/mylist.png' width={700} height={400} alt={"MyList-todo"} />

     <div className={styles.brand}>
       <h1>Plan, edit, create, set goals.</h1>
       <h2>Make the most of your day.Use <b>My LIST</b></h2>
       <button>
         <Link href='/login'> <b>PLAN WITH MY LIST!</b></Link>
       </button>
     </div>
    </div>
    </>
  )
  }
