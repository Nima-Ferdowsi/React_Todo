import {createContext} from 'react'

const Context=createContext({
    Todoes:[]
    ,todo:''
    ,newTodo:()=>{}
    ,handleTodo:()=>{}
    ,handleRemove:()=>{}
    ,handleCompleted:()=>{}

})
export default Context