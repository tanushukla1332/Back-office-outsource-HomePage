

import './App.css'
import Header from './Components/Header/Header';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import { Container } from 'react-bootstrap';


function App() {
 

  return (
    <>
    <Header/>
    <Container fluid>
    <Routes>
      <Route path="/" element={<Home />} />


    </Routes>
    </Container>
    
       
    </>
  )
}

export default App
