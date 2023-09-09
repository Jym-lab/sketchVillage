import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sketch from './pages/Sketch';
import Dongari from './pages/Dongari';
import Neighbor from './pages/Neighbor';
import Game from './pages/Game';
import Joy from './pages/Joy';
import Healing from './pages/Healing';
import { useEffect } from 'react';
import Present from './component/main/Present';
import Location from './pages/Location';
import Ex from './component/modal/Ex';
import "tw-elements-react/dist/css/tw-elements-react.min.css";

function App() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  })

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
          {/* <Route path='/nav' element={<Nav />} /> */}
          <Route path='/present' element={<Present />} />
          <Route path='/location' element={<Location />} />
        </Routes>
        <Ex />
      </div>
    </BrowserRouter>
  );
}

export default App;