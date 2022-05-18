import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/elements/Sidebar';
import Header from './components/elements/Header';
import Home from './pages/Home';

import Empresas from './pages/Empresas';
import Cadastrar from './pages/Cadastrar';
import Editar from './pages/Editar';
import GlobalStyles from './styles/globalStyles';

const App: React.FC = () => {
  return (
    <>
    <GlobalStyles/>
      <Router>
        <Sidebar />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/empresas' element={<Empresas />} />
          <Route path='/cadastrar' element={<Cadastrar />} />
          <Route path='/empresas/editar/:id' element={<Editar />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
