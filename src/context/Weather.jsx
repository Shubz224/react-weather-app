import { createContext, useContext ,useState} from "react";
import  {getWeatherDataForCity , getWeatherDataForLocation} from "../api"
const WeatherContext = createContext(null);

export const useWeather = ()=>{
    return useContext(WeatherContext)
}


export const WeatherProvider = (props)=>{

       const [data,setdata] =useState(null);
       const [searchcity,setsearchcity] =useState(null);
     
       const fetchdata = async ()=>{
      const response = await getWeatherDataForCity(searchcity)
       setdata(response)
    }

    const fetchCurrentUserLocationData = () => {
        navigator.geolocation.getCurrentPosition((position) => {
          getWeatherDataForLocation(
            position.coords.latitude,
            position.coords.longitude
          ).then((data) => setdata(data));
        });
      };

    return <WeatherContext.Provider value={{
        searchcity,
        data,
        setsearchcity,
        fetchdata,
        fetchCurrentUserLocationData,
        }}>
    { props.children}
    </WeatherContext.Provider>
}