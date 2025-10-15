import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/Navbar';
import Inicio from './pages/Home/Home';
import Personajes from './pages/Characters/Characters';
import Episodios from './pages/Episodes/Episodes';
import Lugares from './pages/Locations/Locations';
import CharacterDetail from './pages/CharacterDetail/CharacterDetail';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <NavBar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/personajes" element={<Personajes />} />
            <Route path="/episodios" element={<Episodios />} />
            <Route path="/lugares" element={<Lugares />} />
            <Route path="/personaje/:id" element={<CharacterDetail />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
