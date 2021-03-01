import React, { useState } from "react"

const PasswordRevealer = ()=>{
    const [shown, setShown] = useState(false)

    return(
        <div>
            <input type={shown?"text":"password"}></input>
            <button onClick={()=>setShown(!shown)}>Show/Hide</button>
        </div>
    )
}

export default PasswordRevealer