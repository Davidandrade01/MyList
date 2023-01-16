import Head from "next/head"
import styles from './about.module.scss'

export default function about(){

    return(
        <> 
        <title>MyL List - About</title>
            <div className={styles.about}>
                <h1>
<b>My List</b> is a  to-do list project developed with <b>Next.js</b>,
 API consumption and user authentication by login in all 
 context using <b>Firebase</b> as database.</h1>
                
            </div>
        </>
    )
}