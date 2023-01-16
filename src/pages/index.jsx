import Head from 'next/head'
import styles from '../../styles/Home.module.scss'
import Link from 'next/link'


export default function Home() {
  return (
    <><title>My List</title>
    <div className={styles.home}>
    
     <img src="./imageedit_2_6686559213.png" alt="my List-image" width={600} />
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
