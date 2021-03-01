import React, { useState } from "react"
import "../css/toggle.css"

const Toggle = ({ defaultToggled })=>{

    const [isToggleOn, setIsToggleOn] = useState(defaultToggled)

    return(
        <label className={`toggle ${isToggleOn? "toggle-on" : "toggle-off"}`}>
            <input type="checkbox" onClick={()=>setIsToggleOn(isToggleOn=>!isToggleOn)}/>
            {isToggleOn? "ON":"OFF"}
        </label>
    )
}

export default Toggle