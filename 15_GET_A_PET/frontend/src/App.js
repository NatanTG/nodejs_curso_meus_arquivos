import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

/* Components */
import Navbar from '../src/components/layout/Navbar.js'
import Footer from '../src/components/layout/Footer.js'
import Container from '../src/components/layout/Container.js'
import Message from './components/layout/Message.js'
/* Pages */
import Login from './components/pages/Auth/Login'
import Register from './components/pages/Auth/Register'
import Home from './components/pages/Home'

/* contexts */
import { UserProvider } from './context/UserContext'

function App() {
  return (
    <Router>
      <UserProvider>
        <Navbar />
        <Message />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Container>
        <Footer />
      </UserProvider>
    </Router>
  );
}

export default App;
