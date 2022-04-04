import Display from "./components/Display";
import "./index.css";
import Input from "./components/input.js";
import {FaShoppingBasket } from "react-icons/fa";
import { useState } from "react";
// import { FaSolid, FaPlus } from "react-icons/fa";

// import { motion } from "framer-motion";
// $ npm install framer-motion for animations
const App = () => {
  // DISPLAY
  // INPUT
  const [input, setInput] = useState("");
  // DISPLAY LIST
  const [toDo, setToDo] = useState([]);
  // DELETED LIST
  // const [trash, setTrash] = useState([]);

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
    <div className="container">
      <h1><FaShoppingBasket/></h1>
      <Input addHandler={addHandler} handleClick={handleClick} />
      <div className="toDo">
        <Display toDo={toDo} removeHandler={removeHandler} />
        {/* <FontAwesomeIcon icon="fa-solid fa-plus" /> */}
      </div>
      {/* <Trash trash={trash} removeHandler={removeHandler}/> */}
    </div>
  );
};

export default App;
