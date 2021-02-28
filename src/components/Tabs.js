import React, {useState} from "react"
import "../css/tabs.css"

export const TabItem = props => <div {...props} />

export const Tabs = ({ defaultIndex = 0, children }) => {

  const [bindIndex, setBindIndex] = useState(defaultIndex)

  const changeTab = newIndex => {
    setBindIndex(newIndex)
  }
  const items = children.filter(item => item.type.name === 'TabItem');

  return (
    <div className="wrapper">
      <div className="tab-menu">
        {items.map(({ props: { index, label } }) => (
          <button
            key={`tab-btn-${index}`}
            onClick={() => changeTab(index)}
            className={bindIndex === index ? 'focus' : ''}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="tab-view">
        {items.map(({ props }) =>{
          return (
          <div
            className={`tab-content ${
              bindIndex === props.index ? 'selected' : ''
            }`}
            key={`tab-content-${props.index}`}
          >
            {props.children}
          </div>
        )})}
      </div>
    </div>
  )
}