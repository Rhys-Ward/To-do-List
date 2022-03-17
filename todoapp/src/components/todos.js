import React from "react"
const Todos = ( {todos, removeHandler, index, todoList} ) => {

    const todoList = todos.length ? (
        todos.map((todo)=>{
            return (
                <div className="collection item" key={index}>
                    <p>{todoList} </p>
                </div>
            )
        })
    ) : (
        <p className="center">You have no todos left</p>
    )
    
    return ( 
        <div className="todos collection">
            <h1 key={index}>{todoList}</h1>
            <button onClick={() => removeHandler(index)}>delete</button>
        </div>
     );
}
 
export default Todos ;




   