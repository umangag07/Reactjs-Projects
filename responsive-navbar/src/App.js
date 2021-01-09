
import './App.css';
import Navbar from './Components/Navbar2/Index';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Navbar3 from './Components/Navbar3/Navbar3';
function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Navbar3/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/pricing" component={Pricing}/>
      <Route exact path="/services" component={Services}/>
      <Route exact path="/contact" component={Contact}/>
      </Switch>
    </Router>
  );
}

export default App;
