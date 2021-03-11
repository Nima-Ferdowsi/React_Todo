const Todo = (props) => {
    return (
        props.task.map(elem => (
            <div className="list-group" key={elem.id}>
                <div className="list-group-item d-flex justify-content-between " >
                    <div className="card-contain">
                    <a><i className="fa fa-trash" onClick={()=>props.remove(elem.id)}></i></a>

                    </div>
                    <div className="card-contain">
                    <a onClick={()=>props.edit(elem.id)} ><i className="fa fa-check"></i></a>

                    </div>
                    <div className="card-contain">
                        {
                            elem.completed?<del>{elem.task}</del>:  <span>{elem.task}</span>
                        }
                  

                    </div>

                    </div>
                    
            </div>

        ))
    );
}

export default Todo
