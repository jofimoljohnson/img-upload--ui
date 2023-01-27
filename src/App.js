import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register';


function App() {
  return (
    <div className="App">
      <div className="outer">
        <div className="inner">
          <Register />
        </div>
      </div>
    </div>
  );
}

export default App;