import logo from './logo.svg';
import './App.css';
//import Hello from './components/Hello';
import Welcome from './components/Hello';
import { Counter } from './components/Counter';
import ListCustomers from './components/ListCustomers';
import Login from './components/Login';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SignIn from './components/SignIn';
import ProtectedRoute from './components/ProtectedRoute';
import { useSelector } from 'react-redux'
import Logout from './components/Logout';

function App() {

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

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
            {/* conditional rendering */}
            {!isAuthenticated ?

              <><li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signIn">SignIn</Link>
                </li></> :

              <li className="nav-item">
                <Link className="nav-link" to="/logout">Logout</Link>
              </li>
            }
            {/* conditional rendering */}
          </ul>
        </nav>

        <section>
          <Route path="/" exact render={() => <Welcome message="Hello react" />} />
          <Route path="/counter" exact render={() => <Counter title="Counter" />} />
          {/* <Route path="/customers" exact component={ListCustomers}/> */}
          <ProtectedRoute path="/customers" exact component={ListCustomers} />
          <Route path="/login" exact component={Login} />
          <Route path="/signIn" exact component={SignIn} />
          <Route path="/logout" exact component={Logout} />
        </section>


      </div>
    </Router>
  );
}

export default App;
