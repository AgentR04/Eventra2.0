import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Layout from './components/layout/Layout';

// Pages
import Home from './pages/Home';
import Features from './pages/Features';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import RegisterCollege from './pages/RegisterCollege';
import Dashboard from './pages/Dashboard';
import SetupCommittees from './pages/SetupCommittees';

// Components
import ColorPalette from './components/ColorPalette';
import BootstrapExample from './components/BootstrapExample';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="features" element={<Features />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/register-college" element={<RegisterCollege />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/setup-committees" element={<SetupCommittees />} />
        <Route path="/colors" element={<ColorPalette />} />
        <Route path="/bootstrap" element={<BootstrapExample />} />
      </Routes>
    </Router>
  );
}

export default App;
