import React from 'react';
import './App.css';
import SelectComponent from './SelectComponent'

 const options = [
    'Item One',
    'Item Two',
    'Item Three',
    'Item Four',
    'Item Five',
  ]

const App: React.FC = () => {
  return (
    <>
    <SelectComponent options={options}/>
    </>
  );
}

export default App;
