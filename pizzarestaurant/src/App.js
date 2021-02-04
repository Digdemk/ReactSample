import logo from './logo.svg';
import './App.css';
import Navbar from './components/pizzares/Navbar';
import Header from './components/pizzares/Header';
import Menu from './components/pizzares/Menu';
import About from './components/pizzares/About';
import Contact from './components/pizzares/Contact';
import Footer from './components/pizzares/Footer';

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Menu></Menu>

      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
