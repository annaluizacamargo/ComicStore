import './App.css';
import ComicContainer from './components/ComicContainer';
import Header from './components/Header';

const nameSections = ['Avengers', 'Guardians of the Galaxy', 'Shang-Chi', 'Doctor Strange', 'Black Panther'];

function App() {
  return (
    <div className="App">
      <Header />
      {nameSections.map((nameSection) => (<ComicContainer nameSection={nameSection} key={nameSection} />))}
    </div>
  );
}

export default App;
