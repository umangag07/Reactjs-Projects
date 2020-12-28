
import './App.css';
import HomePage from './Containers/HomePage/Index.jsx';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import CustomerAccess from './Containers/HomePage/CustomerAccess';
import SpecialistJoin from './Containers/HomePage/SpecialistJoin';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path = "/" exact component={HomePage}/>
          <Route path = "/specialistJoin" exact component={SpecialistJoin}/>
          <Route path = "/customer/access" exact component={CustomerAccess}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
