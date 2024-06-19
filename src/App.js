
import './App.css';
import { Card } from './components/Card';
import { Input } from './components/Input';
import { Button } from './components/Button';

import {useWeather} from "./context/Weather"
import { useEffect } from 'react';
function App() {
  const weather = useWeather();
  
  useEffect(()=>{
    weather.fetchCurrentUserLocationData();
  },[]);
  return (

   <div className='App'>
    <h1>WEATHER API (  DATA FEATECHING )</h1>
    <Input/>
   <Button  onClick= {weather.fetchdata}  value = "Search"/>
   <Card/>
   <Button value = "Refresh"/>
   </div>
  );
}

export default App;
