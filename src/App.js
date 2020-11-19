import Header from './components/Header'
import Footer from './components/Footer'
import Note from './components/Note'
import notatki from './notatki'



function createNote(note) {
  return <Note
    key={note.id}
    title={note.title}
    content={note.content} />
}

function App() {
  return (
    <div>
      <Header />
      {notatki.map(createNote)}
      <div></div>
      <Footer />
    </div>
  );
}

export default App;
