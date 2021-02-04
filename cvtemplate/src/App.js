import logo from './logo.svg';
import './App.css';
import Footer from './components/cvtemplate/Footer';
import Leftcol from './components/cvtemplate/Leftcol';
import Rightcol from './components/cvtemplate/Rightcol';




function App() {
  return (

        <>

  
          <div className="w3-content w3-margin-top" style={{ maxWidth: 1400 }}>
            {/* The Grid */}
            <div className="w3-row-padding">

              <Leftcol></Leftcol>
              <Rightcol></Rightcol>
          
            </div>
          </div>
          <Footer></Footer>
     
        </>
      );
    }

export default App;
