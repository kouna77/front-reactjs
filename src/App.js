import React from 'react';
import { BrowserRouter, Routes, Route } from  'react-router-dom';
import About from './pages/About';
import Home from './pages/home';
import Notfound from './pages/Notfound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route  path="/a-propos" exact element={<About/>}/>
        <Route  component={Notfound}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
