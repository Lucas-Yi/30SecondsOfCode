import React, {useState} from "react"

const MultiselectCheckbox = ({options})=>{
    const [data, setData] = useState(options)

    const toggle = index=>{
        const newData = [...data]
        newData.splice(index, 1, {
            label: data[index].label,
            checked: !data[index].checked
        })
        setData(newData)
    }

    return(
        <>
            {data.map((item, index)=>{
                return <label key={index}>
                    <input 
                        type="checkbox"
                        checked={item.checked || false}
                        onChange={()=>toggle(index)}/>
                    {item.label}    
                </label>
                
            })}
        </>
    )
}

export default MultiselectCheckbox