import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import Pdf from './components/Pdf';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Form />}></Route>
          <Route exact path='/resume' element={<Pdf />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
