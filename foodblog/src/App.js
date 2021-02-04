import logo from './logo.svg';
import './App.css';
import Sidebar from './components/foodblog/Sidebar';
import Top from './components/foodblog/Top';
import Footer from './components/foodblog/Footer';
import Pagecontent from './components/foodblog/Pagecontent';



function App() {
  return (
    <>

      <Sidebar></Sidebar>
      <Top></Top>

      <Pagecontent></Pagecontent>
      <Footer></Footer>

    </>
  );
}

export default App;
