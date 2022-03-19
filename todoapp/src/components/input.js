
const Input = ( { addHandler, handleClick  } ) => {
 

    return ( 
        <div className="submit">
            <input className="inputTab"
            onChange={addHandler}
            autoComplete="off"
        placeholder="Add Item here..."
        name="input" 
        type="text" />
            <button className="submitBtn" onClick={handleClick}>+</button>
            
            
    
        </div>
            
     );
}
 
export default Input;