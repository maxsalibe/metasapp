import './App.css';
import Encabezado from './componentes/compartidos/Encabezado.js';
import Principal from './componentes/compartidos/Principal.js';
import Pie from './componentes/compartidos/Pie.js';
import Lista from './componentes/lista/Lista';

function App() {
  return (
    <div className="App">
      <Encabezado></Encabezado>
      <Principal>
        <Lista></Lista>
      </Principal>
      <Pie></Pie>
    </div>
  );
}

export default App;
