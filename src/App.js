import './App.css';
import Encabezado from './componentes/compartidos/Encabezado.js';
import Principal from './componentes/compartidos/Principal.js';
import Pie from './componentes/compartidos/Pie.js';

function App() {
  return (
    <div className="App">
      <Encabezado></Encabezado>
      <Principal></Principal>
      <Pie></Pie>
    </div>
  );
}

export default App;
