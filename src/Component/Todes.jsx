import { Fragment, useContext } from 'react'
import Context from '../Context/context';
import Todo from './Todo';

const Todoes = () => {
    const context = useContext(Context)
    let task = null
    if (context.Todoes.length == 0) {
        task = <p className="info">You have nothing to do</p>
    }
    else {
       

           task= <Todo task={context.Todoes} remove={context.handleRemove} edit={context.handleCompleted} />

        
    }
    return (
        <Fragment>
            <div className='card'>
                <div className='card-body'>
                    {task}

                </div>
            </div>
        </Fragment>
    );
}

export default Todoes;