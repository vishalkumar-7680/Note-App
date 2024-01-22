import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: "" 
    })

    const [zoom, setZoom] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        if(name === "title") {
            setNote({
                ...note,
                [name] : value,
            });
        } else if(name === "content") {
            setNote({
                ...note, 
                [name] : value
            })
        }
    }

    const handleZoom = () => {
        setZoom(true);
    }

    const handleClick = (e) => {
        props.add(note);
        setNote({title: "", content: ""});
        e.preventDefault();
    }

    return (
        <div style = {{marginBottom: "30px"}}>
            <form>
                {zoom && <input name = "title" type="text" onChange = {handleChange} id="" value = {note.title} placeholder='Title'/>}
                <textarea onClick = {handleZoom} name="content" onChange = {handleChange} id="" rows= {zoom ? "3" : "1"} value = {note.content} placeholder='Take a note...'></textarea>
                {zoom && <button onClick = {handleClick}><FontAwesomeIcon icon= {faPlus} style={{color: "#ffffff", fontSize: "1.5em"}} /></button>}
            </form>
        </div>
    )
}
