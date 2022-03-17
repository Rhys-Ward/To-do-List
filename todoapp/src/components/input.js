
const Input = ( { addHandler } ) => {
 

    return ( 
        <div>
            <input 
        placeholder="what do you need"
        name="input" 
        type="text" />
            <button onClick={() => (addHandler)}>Submit</button>
        </div>
            
     );
}
 
export default Input;