import React from 'react'

const Card = (props) => {

  return (
    <div>
        <h3>{props.title}</h3>
        <span>task completed :{props.completed ? "Completed" : "Not Completed"}</span>
    </div>
  )
}

export default Card