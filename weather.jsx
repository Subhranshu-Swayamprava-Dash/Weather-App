import React from 'react'
import './weather.css'

const weather = () => {
    let apikey="cfc12b3dc04b36f04044f6d3de8aa2d6";
    const search=async()=>{
        const element=document.getElementsByClassName("cityInput");
        if(element[0].value===""){
            alert("Search box should not be empty");
        }
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apikey}`;
        let response=await fetch(url);
        let data=await response.json();
        let humidity=document.getElementsByClassName("humidity-percent")
        let wind=document.getElementsByClassName("wind-rate");
        let temperature=document.getElementsByClassName("weather-temp");
        let location=document.getElementsByClassName("weather-location");
        humidity[0].innerHTML=data.main.humidity+" %";
        wind[0].innerHTML=data.wind.speed+" km/h";
        temperature[0].innerHTML=data.main.temp+" °C";
        location[0].innerHTML=data.name;
        
    }   
  return (
    <div className='container'>
      <div className="top-bar">
        <input type="text" className='cityInput' placeholder='Enter city name' />
        <div className="search-icon" onClick={()=>{search()}}>
       Search
        </div>
      </div>
      <div className="weather-temp">
        
      </div>
      <div className="weather-location"></div>
      <div className="data-container">
        <div className="element">
            <div className="data">
                <div className="humidity-percent"></div>
                <div className="text">Humidity</div>
            </div>
        </div>
        <div className="element">
            <div className="data">
                <div className="wind-rate"></div>
                <div className="text">Wind Speed</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default weather
