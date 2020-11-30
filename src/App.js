import React, { useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Note from './components/Note'
import AddNote from './components/AddNote'



function App() {

  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevNotes => {
      return [...prevNotes, note];
    }))
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <AddNote
        onAdd={addNote}
      />
      {notes.map((note, index) => {
        return <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote} />
      })}
      <Footer />
    </div>
  );
}

export default App;
