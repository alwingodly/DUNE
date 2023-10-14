import { BrowserRouter , Routes , Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Profile from './pages/Profile'
import About from './pages/About'
import Signup from './pages/Signup'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sign-in" element={<Signin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
