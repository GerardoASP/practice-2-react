import React from 'react';
import './App.scss';
import Cube from './components/cube/cube';
import Menu from './components/menu/menu';
import { Section1 } from './components/Section1/Section1';
import { Section2 } from './components/Section2/Section2';
import { Section3 } from './components/Section3/Section3';

function App() {
  return (
    <div className="App">

      <Menu /> 
      <Cube/>
      <Section1
      title="Section 1"
      id="section1"
      />
      <Section2
          title="Section 2"
          id="section2"
        />
              <Section3
          title="Section 3"
          id="section3"
        />
      <div className="content">
        
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
