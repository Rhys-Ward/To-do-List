import Display from "./components/Display";
import Input from "./components/Input";
import { useState } from "react";

const App = () => {
  // DISPLAY
  // INPUT
  const [input, setInput] = useState("");
  // DISPLAY LIST
  const [toDo, setToDo] = useState([]);

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


  // DELETE
  const removeHandler = (index) => {
    let storedArr = [...toDo];
    storedArr.splice(index, 1);
    setToDo(storedArr);
  };

  return (
    <div>
      <Input addHandler={addHandler} handleClick={handleClick}/>
     
     <Display toDo={toDo} removeHandler={removeHandler} />
     
      
    </div>
  );
};

export default App;


