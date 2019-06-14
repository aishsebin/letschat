import React from 'react';

// import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <Login />
    </div>
  );
}

export default App;
