import React from "react"

const Select = ({selectedValue, values, onValueChange})=>{
    return(
        <select
            defaultValue={selectedValue}
            onChange={e=>onValueChange(e.target.value)}
        >
            {values.map(([value,text])=>(
                <option key={value} value={value}>{text}</option>
            ))}
        </select>
    )
}

export default Select