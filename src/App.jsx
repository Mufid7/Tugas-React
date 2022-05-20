import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigasi from './components/Navbar'
import Home from './components/Home'
import Hoby from './components/Hoby'
import Footer from './components/Footer'
import Job from './components/Job'


function App() {
  return (
    <Router >
      <div className='app-header'>
        <Navigasi/>
      </div>

      <Switch>
        <div className="app-content">
          <Route path="/" exact component={Home} />
          <Route path="/hoby" exact component={Hoby} />
          <Route path="/job" exact component={Job} />
        </div>
      </Switch>

      <div className='app-footer'>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
