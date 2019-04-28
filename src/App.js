import React from 'react';
import LabelBottomNavigation from './LabelBottomNavigation';
import Button from '@material-ui/core/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <LabelBottomNavigation />
      <br />
      <Button variant="contained" color="primary">
        HELLO WORLD
      </Button>
    </div>
  );
}

export default App;
