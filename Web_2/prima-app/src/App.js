import './App.css';
import Persona from './Esercizi_Web2/Esercizio_1';

function App() {
  const x= {
    nome: "Alex",
    cognome: "Garmacia",
    età: 20
  };
  return (
    <div className='App'>
      <h1>Persona</h1>
      <Persona {...x}></Persona>
    </div>
  );
}

export default App;


