import React from 'react'
import About from './routes/About'
import Contact from './routes/Contact'
import Home from './routes/Home'
import Projects from './routes/Projects'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/projects' element={<Projects/>}/>
</Routes>
    </div>
  );
}

export default App;
