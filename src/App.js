import React, {useState} from 'react';
import './App.css';
import Button from './components/button/Button';
import Input from './components/input/Input';
import ClearButton from './components/clearButton/ClearButton';

function App() {
  const [input, setInput] = useState('');
  const [previousNumber, setPreviousNumber] = useState(0);
  const [operator, setOperator] = useState('');

  const addToInput = val => {
    setInput(input + val)
  };

  const addZeroToInput = val => {
    //if input is not empty then add 0
    if(input !== ''){
      setInput(input + val);
    }
  };

  const addDecimalToInput = val => {
    //add decimal if there is no decimal point already present in input area
    if(input.indexOf('.') < 0){
      setInput(input + val);
    }
  };

  const clearInput = () => {
    setInput('')
  };

  const add = () => {
    setPreviousNumber(input);
    clearInput();
    setOperator('+');
  };

  const subtract = () => {
    setPreviousNumber(input);
    clearInput();
    setOperator('-');
  };

  const multiply = () => {
    setPreviousNumber(input);
    clearInput();
    setOperator('*');
  };

  const divide = () => {
    setPreviousNumber(input);
    clearInput();
    setOperator('/');
  };

  const evaluate = () => {
    if(operator === '+'){
      setInput(parseInt(previousNumber) + parseInt(input));
    } else if(operator === '+'){
      setInput(parseInt(previousNumber) - parseInt(input));
    } else if(operator === '*'){
      setInput(parseInt(previousNumber) * parseInt(input));
    } else if(operator === '/'){
      setInput(parseInt(previousNumber) / parseInt(input));
    }
  }

  return (
    <div className="App">
      <div className="calc-wrapper">
         <div className="row">
           <Input>{input}</Input>
         </div>
         <div className="row">
           <Button handleClick={addToInput}>7</Button>
           <Button handleClick={addToInput}>8</Button>
           <Button handleClick={addToInput}>9</Button>
           <Button handleClick={divide}>/</Button>
         </div>
         <div className="row">
           <Button handleClick={addToInput}>4</Button>
           <Button handleClick={addToInput}>5</Button>
           <Button handleClick={addToInput}>6</Button>
           <Button handleClick={multiply}>*</Button>
         </div>
         <div className="row">
           <Button handleClick={addToInput}>1</Button>
           <Button handleClick={addToInput}>2</Button>
           <Button handleClick={addToInput}>3</Button>
           <Button handleClick={add}>+</Button>
         </div>
         <div className="row">
           <Button handleClick={addDecimalToInput}>.</Button>
           <Button handleClick={addZeroToInput}>0</Button>
           <Button handleClick={evaluate}>=</Button>
           <Button handleClick={subtract}>-</Button>
         </div>
         <div className="row">
           <ClearButton handleClear={clearInput}>Clear</ClearButton>
         </div>
      </div>
    </div>
  );
}

export default App;
