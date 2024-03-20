import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// pages
import Home from './pages/Home';
import Create from './pages/Create';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
