import React from 'react'
import { useWeather } from '../context/Weather'
export const Input = () => {
  const weather = useWeather();
  
  return (
  <input 
  className='input-field'
  placeholder='Search here'
  value={weather.searchcity}
  onChange={(e)=> weather.setsearchcity(e.target.value)}
   />

  )
}