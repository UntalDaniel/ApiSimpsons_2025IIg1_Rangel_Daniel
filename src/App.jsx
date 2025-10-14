import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Inicio from './Components/Inicio/Inicio';
import Personajes from './Components/Personajes/Personajes';
import Episodios from './Components/Episodios/Episodios';
import Lugares from './Components/Lugares/Lugares';
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
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
