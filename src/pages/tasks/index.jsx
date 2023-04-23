import react from 'react'
import styles from './tasks.module.scss'
import { useEffect, useState } from 'react'
import Head from "next/head"
import {FiPlus,FiCalendar,FiEdit2,FiTrash,FiClock, FiSearch} from 'react-icons/fi'
import {FcCancel} from 'react-icons/fc'
import {GrUpdate} from 'react-icons/gr'

import firebase from '../../../firebase/config'
import firestore from 'firebase/firestore'
import {db,auth} from '../../../firebase/config'
import { collection, addDoc } from 'firebase/firestore'

import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types';







export default function Mytasks() {
  
 const date=new Date()
const today=date.toDateString()
  
  Mytasks.propTypes={ 
    id: PropTypes.string,
    title:PropTypes.string,
  
  }
  const [newtask, setNewTask]=useState("")
  const [tasks, setTasks]=useState([])
  const [editTask,setEditTask]=useState("")
  const [saveBtn,SetSaveBtn]=useState(true)
  const [search, setSearch]=useState('')
  
  
    async function handleAddtask(e){
      e.preventDefault()
      if(newtask === ''){
        alert('First add a task')
        return 
      }
       //inclusão no array
      else{
        setTasks([...tasks,{id:uuidv4(),title:newtask}])
        

        
        
        setNewTask("")
      }
      
    }

    // o arr retornará todos os elementos diferentes dele(do Id)
    function handleDelete (id){
      setTasks(tasks.filter((element)=>element.id!==id))
      
    }
    // o arr retornará todos os elementos difde id igual, ou seja, apenas ele
   function handleEdit(id){
    
   if (window.confirm("want you update this?")){
    const edit=tasks.find((element)=>element.id === id)

    if(edit){

      setNewTask(edit.title)
      setEditTask(edit.id)
      if (setEditTask !==''){
      SetSaveBtn(false)
      }
     
      
    }
    
    
    handleDelete (id)
   

   }
   else{
    setNewTask('')
    setEditTask('')
   }

    // Buscas no de tarefas

 
 
  }

   


    useEffect((tasks) => {
      
      localStorage.setItem('tarefas',JSON.stringify(tasks))
      const set=localStorage.getItem(tasks)
      console.log(JSON.parse(set))
    }, [tasks])



    
    
    //LocalStorage  

    

    return (  
     
     <>
      <Head><title>My List- Your Tasks</title></Head>
     <main className={styles.container}>
          
      <form >
        <input type="text" placeholder="Type a new task..."

        value={newtask}
        onChange={(e)=>setNewTask(e.target.value)} />
      
       
        {saveBtn  ?   ( <button onClick={handleAddtask}  type="submit" >
        <FiPlus size={25} color='#f2f2f2'/>
        </button>):
         
        (<button onClick={handleAddtask}  type="submit" >
        <GrUpdate size={25} color='#17181f'/>
        </button>)}
       
      </form>
      

      <h1> My  List:</h1> 
        

      
   
      
      <section> 
        <article className={styles.tasklist}>
          
          <ul>

          {tasks.map((element)=><li  key={element.id}><h1>{element.title}</h1>
          
             <div className={styles.actions}> 
              
                <div className={styles.rightBtns}>
                  <div><FiCalendar size={15} />
                  <time>{today}</time>
                  </div>
                  
                    <button onClick={()=>handleEdit(element.id)}>
                      <span>
                        <FiEdit2 size={15} /> Edit
                      </span>
                  
                    </button>
                </div>
               
            <button onClick={()=>handleDelete(element.id)}>
              <FiTrash size={15} color="red"/>
              <span style={{color: "red"}}>Erase </span>
            </button>
          </div>
          <hr style={{color: "#f2f2f2"}}/>
          </li>)}
         </ul>
         
        </article>
      </section>
     </main>

     
    
     </>
      
    )
}

 
 