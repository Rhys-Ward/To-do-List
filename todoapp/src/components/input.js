// import { useState } from "react"

const Input = ({ changeHandler, userInput}) => {
   
    return (
        <div>
            <input onChange={changeHandler}></input>
            <h2>{userInput}</h2>

        </div>
    )
}
export default Input