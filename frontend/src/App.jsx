import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Test1 from './Pages/Tests/test1';

const App = () => {
  const location = useLocation();

  return (
    <>
      <Routes location={location}>
        <Route path="*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/test1" element={<Test1 />} />
      </Routes>
    </>
  )
}

export default App