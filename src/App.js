import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sketch from './pages/Sketch';
import Dongari from './pages/Dongari';
import Neighbor from './pages/Neighbor';
import Game from './pages/Game';
import Joy from './pages/Joy';
import Healing from './pages/Healing';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sketch' element={<Sketch />} />
          <Route path='/dongari' element={<Dongari />} />
          <Route path='/neighbor' element={<Neighbor />} />
          <Route path='/joy' element={<Joy />} />
          <Route path='/game' element={<Game />} />
          <Route path='/healing' element={<Healing />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
