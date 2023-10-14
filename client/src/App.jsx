import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Profile from './pages/Profile';
import About from './pages/About';
import Signup from './pages/Signup';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
        </Route>

        <Route path="/sign-up" element={<Signup />} />
        <Route path="/Sign-in" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
