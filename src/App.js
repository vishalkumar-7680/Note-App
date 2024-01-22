import './App.css';
import CreateArea from './Components/CreateArea';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Note from './Components/Note';
import { useState } from 'react';
function App() {
  const [notes, setNotes] = useState([]);
  const addNote = (note) => {
      setNotes([...notes, note]);
  }
  
  const deleteNote = (id) => {
    const newArr = notes.filter((ele, index) => {
      return index !== id;
    })
    setNotes(newArr);
  }

  return (
    <>
      <Navbar />
      <CreateArea add = {addNote}/>
      {notes.map((element, index) => {
          return <Note del = {deleteNote} key = {index} id = {index} heading = {element.title} content = {element.content} />
        })}
      {/* <Footer /> */}
    </>
  );
}

export default App;
