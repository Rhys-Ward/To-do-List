import Display from "./components/Display";
import Input from "./components/Input";
import { useState } from "react";
import Trash from "./components/Trash";
const App = () => {
  // DISPLAY
  // INPUT
  const [input, setInput] = useState("");
  // DISPLAY LIST
  const [toDo, setToDo] = useState([]);
// DELETED LIST
const [trash, setTrash] = useState([])

  // input 
  const addHandler = (event) => {
    setInput(event.target.value);
  };

// SUBMIT BUTTON
  const handleClick = () => {
    let storedList = [...toDo];
    storedList.push(input);
    setToDo(storedList);

    // setToDo([...toDo, { input }]);
  };

  


  // DELETE FROM TO DO LIST 
  const removeHandler = (index) => {
    


    
    let storedArr = [...toDo];
    storedArr.splice(index, 1);
    setToDo(storedArr);
    
  };
  

  return (
    <div>
      <h1>SHOPPING LIST</h1>
      <Input addHandler={addHandler} handleClick={handleClick}/>
     
     <Display toDo={toDo} removeHandler={removeHandler} />

   <Trash trash={trash} removeHandler={removeHandler}/>

    </div>
  );
};

export default App;


