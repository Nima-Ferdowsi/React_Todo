import { Fragment, useState } from 'react'
import Context from './Context/context'
import { v4 as uuidv4 } from 'uuid';
import NewTodo from './Component/NewTodo';
import Todoes from './Component/Todes';


const App = () => {
    const getLocal=()=>{
        let items;
        if(localStorage.getItem('Task')===null){
            items=[]
        }
        else(
          items=JSON.parse(localStorage.getItem('Task'))  
        )
        return items
    }
    const [getTodoes, setTodoes] = useState(getLocal)
    const [getTodo, setTodo] = useState([])

const newTodo=()=>{
const todoes=[...getTodoes]
const todo={
    id:uuidv4(),
    task:getTodo,
    completed:false
}
if(getTodo!=="" && getTodo!==" "){
    todoes.push(todo)
    setTodoes(todoes)
    setTodo('')

    localStorage.setItem('Task',JSON.stringify(todoes))
}
}

const handelTodo=(e)=>{
    setTodo(e.target.value)
}
const handleRemove=(id)=>{
    const todoes=[...getTodoes]
    let filter=todoes.filter(e=>e.id!==id)
    setTodoes(filter)
    localStorage.setItem('Task',JSON.stringify(filter))
  

}
const handleCompleted=(id)=>{
const todoes=getTodoes

let index=todoes.findIndex(e=>e.id==id)

let todo=todoes[index]

todo.completed=!todoes[index].completed

let newtodoes =[...getTodoes]

newtodoes[index]=todo

setTodoes(newtodoes)

}
    return (
        <Context.Provider
            value={{ Todoes: getTodoes 
            , todo:getTodo
            ,newTodo:newTodo
            ,handleTodo:handelTodo
            ,handleRemove:handleRemove
            ,handleCompleted:handleCompleted
            
            }}

        >
            <Fragment>
                <header className='font-weight-light'>
                    Welcome
               </header>
               <Todoes/>
               <NewTodo></NewTodo>



            </Fragment>
        </Context.Provider>




    )
}
export default App