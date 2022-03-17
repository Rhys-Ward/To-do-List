
const Input = ( { addHandler, handleClick  } ) => {
 

    return ( 
        <div>
            <input 
            onChange={addHandler}
        placeholder="what do you need"
        name="input" 
        type="text" />
            <button onClick={handleClick}>Submit</button>
            
    
        </div>
            
     );
}
 
export default Input;