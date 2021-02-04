
import Footer from "./components/hamburgersite/Footer";
import Header from "./components/hamburgersite/Header";
import Navbar from "./components/hamburgersite/Navbar";
import Pagecontent from "./components/hamburgersite/Pagecontent";

function App() {
  return (
    <div className="App">

      <Navbar></Navbar>
      <Header></Header>

      <Pagecontent></Pagecontent>

      <Footer></Footer>

    </div>
  );
}

export default App;
