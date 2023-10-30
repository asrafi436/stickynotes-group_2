
import './App.css';
import { Tracker } from './components/Tracker';
import { NoteList } from './components/NoteList';
import { Search } from './components/Search';
import { InputNote } from './components/InputNote';

function App() {
  return (
    <div className="App">
      <section className='Tracker-Search' >
          <Tracker />
          <Search />
      </section>
      <InputNote />
      <NoteList />
    </div>
  );
}

export default App;
