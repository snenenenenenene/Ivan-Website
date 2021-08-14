import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Programs from './components/Programs';
import Tarifs from './components/Tarifs';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <div className="navbar">
                    <img className="navbar-logo" src="" alt="Logo"/>
                    <div className="navbar-link-container">
                    <a className="navbar-link">Home</a>
                    <a className="navbar-link">Portfolio</a>
                    <a className="navbar-link">Programma's</a>
                    <a className="navbar-link">Tarieven</a>
                    <a className="navbar-link">Contact</a>
                    </div>
                </div>
      <Home/>
      <Portfolio/>
      <Programs/>
      <Tarifs/>
      <Contact/>
    </div>
  );
}

export default App;
