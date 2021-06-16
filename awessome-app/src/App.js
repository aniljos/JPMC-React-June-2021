import logo from './logo.svg';
import './App.css';
//import Hello from './components/Hello';
import Welcome from './components/Hello';
import { Counter } from './components/Counter';
import ListCustomers from './components/ListCustomers';
import Login from './components/Login';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
function App() {
  return (

    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">React</a>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/counter">Counter</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/customers">Customers</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <section>
            <Route path="/" exact render={() => <Welcome message="Hello react"/>}/>
            <Route path="/counter" exact render={() => <Counter title="Counter"/>}/>
            <Route path="/customers" exact component={ListCustomers}/>
            <Route path="/login" exact component={Login}/>
        </section>


      </div>
    </Router>
  );
}

export default App;
