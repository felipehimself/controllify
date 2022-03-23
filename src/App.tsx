import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './components/Home';
import Cadastrar from './components/Cadastrar';
import Editar from './components/Editar';
import TabelaEmpresa from './components/TableEmpresas';
const App: React.FC = () => {
  return (
    <div className='App'>
      <Router>
        <Sidebar />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/empresas' element={<TabelaEmpresa />} />
          <Route path='/cadastrar' element={<Cadastrar />} />
          <Route path='/empresas/editar/:id' element={<Editar />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
