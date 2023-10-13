import './App.css';
import Content from './components/content';
import Footer from './components/footer';
import Header from './components/header';
import Read from './components/read';
import Books from './components/books';
import Create from './components/create';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Function to declare all web page links in the home page of App.js using href links
function App() {
  return (
    // Browser import for links
    <BrowserRouter>

      <div className="App">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Nav className="me-auto">
              {/* Links to the 3 pages */}
              <Navbar.Brand href="home">Navbar</Navbar.Brand>
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="read">Read</Nav.Link>
              <Nav.Link href="create">Create</Nav.Link>           
            </Nav>
          </Container>
        </Navbar>

       
      {/* Routes to all 3 pages */}
        <Routes>
          <Route path='/home' element={<Content></Content>}></Route>
          <Route path='/read' element={<Read></Read>}></Route>
          <Route path='/create' element={<Create></Create>}></Route>        
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;