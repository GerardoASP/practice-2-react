import React from 'react';
import './App.scss';
import Cube from './components/cube/cube';
import Menu from './components/menu/menu';
import { Section2 } from './components/Section2/Section2';
import { Section3 } from './components/Section3/Section3';

function App() {
  return (
    <div className="App">
      <Menu /> 
      <Cube />
      <Section2/>
      <Section3/>
      <div className="content">
        
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
