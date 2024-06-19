

const BASE = "https://api.weatherapi.com/v1/current.json?key=fce2de2ecfb342a9830125608240806";
export  const  getWeatherDataForCity = async  (city)=>{
                   const response = await fetch(`${BASE}&q= ${city} &aqi=yes`)
                   return await  response.json() ;
}


export const getWeatherDataForLocation = async (lat, lon) => {
    const response = await fetch(`${BASE}&q=${lat},${lon}&aqi=yes`);
    return await response.json();
  };