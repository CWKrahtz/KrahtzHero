import {BrowserRouter ,Route, Routes } from 'react-router-dom';

import './App.css';
import BasicNavbar from './componants/navbar';
import Landing from './pages/landing';
import Compare from './pages/compare';
import Timeline from './pages/timeline'
import Test from './pages/test';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <BasicNavbar />
      <Routes>

        <Route path='/' element={<Landing />} />
        <Route path='/compare' element={<Compare />} />
        <Route path='/time' element={<Timeline />} />
        <Route path='/test' element={<Test />} />

      </Routes>

    </div>
  );
}

export default App;
