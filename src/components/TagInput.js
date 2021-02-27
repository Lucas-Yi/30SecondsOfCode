// Renders a tag input field.

// Define a TagInput component and use the useState() hook to initialize an array from tags.
// Use Array.prototype.map() on the collected nodes to render the list of tags.
// Define the addTagData method, which will be executed when pressing the Enter key.
// The addTagData method calls setTagData to add the new tag using the spread (...) operator to prepend the existing tags and add the new tag at the end of the tagData array.
// Define the removeTagData method, which will be executed on clicking the delete icon in the tag.
// Use Array.prototype.filter() in the removeTagData method to remove the tag using its index to filter it out from the tagData array.

import '../css/tagInput.css'
import React, {useState} from "react"

const TagInput = ({tags})=>{
    const [tagData, setTagData] = useState(tags)
    const addTagData=event=>{
        if(event.target.value !== ''){
            setTagData([...tagData, event.target.value])
            event.target.value = ''
        }
    }
    const removeTagData=index=>{
        setTagData([...tagData.filter((_,tagIndex)=> tagIndex!==index)])
    }

    return (
        <div className="tag-input">
        <ul className="tags">
            {tagData.map((tag, index)=>{
                return <li className="tag" key={index}>
                    <span className="tag-title">{tag}</span>
                    <span
                        className="tag-close-icon"
                        onClick={() => removeTagData(index)}
                    >
                        x
                    </span>
                </li>
            })}
        </ul>
        <input
            type="text"
            onKeyUp={event => (event.key === 'Enter' ? addTagData(event) : null)}
            placeholder="Press enter to add a tag"
        />
        </div>
        
    )
}

export default TagInput 