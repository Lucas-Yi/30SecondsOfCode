import React, {useState} from "react"
import "../css/accordion.css"

export const Accordion = ({defaultIndex, onItemClick, children})=>{

    const [bindIndex, setBindIndex] = useState(defaultIndex)

    const changeIndex = index =>{
        if(index !== bindIndex)
            setBindIndex(index)
    }

    const items = children.filter(item=> item.type.name === "AccordionItem")

    return(
        <>
            {items.map(({props})=>{
                return <AccordionItem 
                    key={props.index}
                    isCollapsed={bindIndex!==props.index}
                    label={props.label}
                    handleClick={()=>changeIndex(props.index)}>
                        {props.children}
                    </AccordionItem>
            })}
        </>
    )
}

export const AccordionItem = ( {label, isCollapsed, handleClick, children} )=>{
    return (
        <>
            <button className="accordion-button" onClick={handleClick}>{label}</button>
            <div className={`accordion-item ${isCollapsed? 'collapsed':'expanded'}`}>{children}</div>
        </>
    )
}