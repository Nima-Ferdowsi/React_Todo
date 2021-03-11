import {Fragment,useContext} from 'react'
import Context from '../Context/context'

const NewTodo=()=>{
    const context=useContext(Context)
return(

    <Fragment>
        <form className='form-add' onSubmit={(e)=>e.preventDefault()}>

            <input onChange={context.handleTodo} className="form-control input-add" type='text' value={context.todo}  placeholder="Give Me Your Task"/>
            <button onClick={context.newTodo} className='btn'> <i className="fas fa-plus"></i></button>

        </form> 
    </Fragment>
    
)
}
export default NewTodo