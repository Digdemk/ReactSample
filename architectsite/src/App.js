import logo from './logo.svg';
import './App.css';
import Navbar from './components/architects/Navbar';
import Header from './components/architects/Header';
import Footer from './components/architects/Footer';
import Pagecontent from './components/architects/Pagecontent';

function App() {
  return (
    <>
      <Navbar title="Architects"></Navbar>
      <Header></Header>

      <Pagecontent></Pagecontent>

      <Footer></Footer>
    </>
  );
}

export default App;
