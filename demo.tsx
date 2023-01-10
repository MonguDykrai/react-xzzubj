import React from 'react';
import './index.css';
import Card from './components/Card';
import AppMap from './components/AppMap';

const App: React.FC = () => {
  return (
    <>
      <Card />
      <AppMap />
    </>
  );
};

export default App;

// ['wait', 'process', 'finish', 'error'];
