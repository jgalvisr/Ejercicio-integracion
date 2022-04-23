import './App.scss';
import { ContactForm } from './pages/ContactForm';
import { NavBar } from './components/NavBar';
import { Gallery } from './pages/Gallery';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Products } from './pages/Products';
import { LoginForm } from './pages/LoginForm';

function App() {
  return (
    <>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route exact path='/' element={<Navigate replace to="/gallery" />} />
          <Route exact path='/gallery' element={<Gallery></Gallery>} />
          <Route
            exact
            path='/contact-form'
            element={<ContactForm></ContactForm>}
          />
          <Route exact path='/products' element={<Products></Products>} />
          <Route exact path='/login' element={<LoginForm></LoginForm>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
