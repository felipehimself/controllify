import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './components/Home';
import Empresas from './components/Empresas';
import Cadastrar from './components/Cadastrar';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Router>
        <Sidebar />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/empresas' element={<Empresas />} />
          <Route path='/cadastrar' element={<Cadastrar />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
