import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Login from './component/Login';
import Register from './component/Register';
import Single from './pages/Single';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/Login' element={<Login/>} />
        <Route path='/Register' element={<Register/>} />
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Single" element={<Single />} />
        
        
      </Routes>
    </Router>
  );
};

export default App;
