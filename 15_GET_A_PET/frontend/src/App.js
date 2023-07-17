import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

/* Components */
import Navbar from '../src/components/layout/Navbar.js'
import Footer from '../src/components/layout/Footer.js'
/* Pages */
import Login from './components/pages/Auth/Login'
import Register from './components/pages/Auth/Register'
import Home from './components/pages/Home'
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
