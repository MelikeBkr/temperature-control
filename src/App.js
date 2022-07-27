import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [ temperature, setTemperature] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState('normal');

  const incrementTemperature = () => {
    setTemperature(temperature+1);
    if(temperature>=25)
    {
      if(temperature>29)
      {
        setTemperature(30);
      }
      setTemperatureColor('hot');
    }
    else if(temperature>15 && temperature<25)
    {
      setTemperatureColor('normal');
    }
  };

  const decrementTemperature = () => {
    setTemperature(temperature-1);
    if(temperature<=15)
    {
      if(temperature<1)
      {
        setTemperature(0);
      }
      setTemperatureColor('cold');
    }
    else if(temperature>15 && temperature<25)
    {
      setTemperatureColor('normal');
    }
    else if(temperature<0)
    {setTemperature(0);}
  };

  return (
    <div className="app-container">
      <div className='temperature-display-container'>
        <div className={`temperature-display ${temperatureColor}`}>{temperature}°C</div>
      </div>
      <div className='button-container'>
        <button onClick={incrementTemperature}>+</button>
        <button onClick={decrementTemperature}>-</button>
      </div>
    </div>
  );


}
export default App;
