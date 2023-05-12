import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from "./components/cards/cards";
import Header from "./components/header/header";

function App() {
  return (
    <div className="App">
        <Header />
<Cards />
    </div>
  );
}

export default App;
