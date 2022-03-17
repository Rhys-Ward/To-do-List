// import { useState } from "react";
// import Todos from "./components/todos";
// // import Input from "./components/input";


// const App = () => {

// // ARRAY OF ITEMS
// const [todos, setToDos] = useState([
//   {id:1, content: "buy milk"},
//   {id:2, content:"buy bread"}
// ]);

// // DELETE BUTTON
// const removeHandler = (index) => {
//   let storedlist = [...todos];
//     storedlist.splice(index,1);
//     setToDos(storedlist);
 
// }


// // RETURN 
//   return (
//     <div className='todo-app container'>
//         <h1 className="center blue-text">ToDo</h1>

        
  
//   <Todos todos={todos} removeHandler = {removeHandler} />

        
//     </div>
//    );
// }
 


// export default App;












import { useState } from "react";
import Todos from "./components/todos";
import Input from "./components/input";


const App = () => {
// USER INPUT
const [userInput, setUserInput] = useState([""])

// ON THIS EVENT
const changeHandler = (event) => {
    setUserInput(event.target.value)
}

  // ARRAY OF ITEMS
const [todos, setToDos] = useState([
  {id:1, content: "buy milk"},
  {id:2, content:"buy bread"}
])

// DELETE BUTTON
const removeHandler = (index) => {
  let storedlist = [...todos];
    storedlist.splice(index,1);
    setToDos(storedlist);
 
}

// RETURN 
  return (
    <div className='App'>
        <h1 className="center blue-text">ToDo</h1>

        <Input input={changeHandler} user={userInput} />
        <Todos todos={todos} removeHandler = {removeHandler}/>
        {/* {todos.map(() => {
          // <p key={index}></p>
         return  <Todos todos={todos} removeHandler = {removeHandler}/> 
        })} */}
        
    </div>
   );
}
 


export default App;
