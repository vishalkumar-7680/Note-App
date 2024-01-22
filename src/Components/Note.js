import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function Note(props) {
  const handleClick = (e) => {
    props.del(props.id);
  }
  return (
    <>
        <div className = "note">
            <h1>{props.heading}</h1>
            <p>{props.content}</p>
            <FontAwesomeIcon onClick={handleClick} icon={faTrash} style={{color: "#f5ba13", position: 'absolute', right: "5px", bottom: "7px", cursor: "pointer"}} />
        </div>
    </>
  )
}
