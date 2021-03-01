import React from "react"

const Slider=({ onValueChange,defaultValue })=>{
    const min=0
    const max=100
    return(
        <input 
            type="range"
            min={min}
            max={max}
            defaultValue={defaultValue}
            onChange={e=>onValueChange(e.target.value)}
        />


    )
}

export default Slider