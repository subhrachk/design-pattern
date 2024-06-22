import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SplitScreen } from './components/SplitScreen';
import { Left } from './components/Left';
import { Right } from './components/Right';

function App() {
  return (
    <div className="App">
          <SplitScreen left={Left} right={Right} leftweight={1} rightweight={3} />
    </div>
  );
}

export default App;
