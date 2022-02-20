import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './componentes/compartidos/Layout';
import Lista from './componentes/lista/Lista';
import Detalles from './componentes/nueva/Detalles';
import NoEncontrado from './componentes/compartidos/NoEncontrado';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Lista />} />
        <Route index path='/lista' element={<Lista />} />
        <Route path='/nueva' element={<Detalles />} />
      </Route>
      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
}

export default App;
