import logo from './logo.svg';
import './App.css';
//import Hello from './components/Hello';
import Welcome from './components/Hello';
import {Counter} from './components/Counter';
import ListCustomers from './components/ListCustomers';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <section>
          {/* <Hello/> */}
          {/* <Welcome message="Hello"/>
          <Welcome message="React"/>
          <Welcome/> */}

          {/* <Counter title="Counter"/>
          <Counter title="The Counter"/> */}

          {/* <ListCustomers/> */}

          <Login/>
          
      </section>
    </div>
  );
}

export default App;
