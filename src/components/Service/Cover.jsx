import React from 'react'
import "./Cover.css"

function Cover(props) {
  return (
    <div className='coverBg'>
        <h1>{props.heading}</h1>
        <h5>{props.content}</h5>
    </div>
  )
}

export default Cover
