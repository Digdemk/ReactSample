import logo from './logo.svg';
import './App.css';
import Navbar from './components/wedding/Navbar';
import Header from './components/wedding/Header';
import About from './components/wedding/About';
import Info from './components/wedding/Info';
import Rsvp from './components/wedding/Rsvp';
import Footer from './components/wedding/Footer';

function App() {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <About></About>

      {/* Background photo */}
      <div className="w3-display-container bgimg2">
        <div className="w3-display-middle w3-text-white w3-center">
          <h1 className="w3-jumbo">You Are Invited</h1><br />
          <h2>Of course..</h2>
        </div>
      </div>
      <Info></Info>
      <Rsvp></Rsvp>
      <Footer></Footer>
    </>
  );
}

export default App;
