import React, { useState } from "react"
import "../css/starRating.css"

const Star = ({marked, starId})=>{
    return <span data-star-id={starId} className="star" role="button">
        {marked? '\u2605':'\u2606'}
    </span>
}

const StarRating = ({value})=>{

    const [rating, setRating] = useState(value || 0)
    const [selection, setSelection] = useState(0)

    const hoverOver = event => {
        let val = 0;
        if (event && event.target && event.target.getAttribute('data-star-id'))
          val = event.target.getAttribute('data-star-id');
        setSelection(val);
      };

    return(
        <div 
            onClick={e => setRating(e.target.getAttribute('data-star-id') || rating)}
            onMouseOver={hoverOver}
            onMouseOut={()=>setSelection(null)}
        >
            {Array.from({length:5}, (_, i)=>(
                <Star
                    starId={i+1}
                    key={i+1}
                    marked={selection? selection>=i+1 : rating>=i+1}
                />
            ))}
            <span style={{marginLeft:10}}>
                {rating}/5
            </span>
        </div>
    )
}

export default StarRating