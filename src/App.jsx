import React, { useState } from 'react'

//images
import clouds from "./assets/clouds.png";
import drizzle from "./assets/drizzle.png";
import heavyrain from "./assets/heavyrain.png";
import humidity from "./assets/humidity.png";
import snowy from "./assets/snowy.png";
import sun from "./assets/sun.png";
import windy from "./assets/windy.png";

function Weatherdetails({icon ,degree ,city,lat,lon,humi,wind,country}){
   return(
    <>
    <div className="weather-icon">
        <img src={icon} alt="image not load" width={200} />
    </div>
    <div className="degree">{degree}°C</div>
    <div className="city">{city}</div>
    <div className="country">{country}</div>
    <div className="coor">
    <div className="lat">
       <p>{lat}</p>
       <p>Latitude</p>
    </div>
    <div className="lon">
        <p>{lon}</p>
        <p>Longitude</p>
    </div>
    </div>
    <div className="humi-windspeed">
    <div className="humi">
        <img src={humidity} alt="humidity" width={200}/>
       <p> {humi} </p><p>Humidity</p>
    </div>
    <div className="wind">
        <img src={windy} alt="windy" width={200}/>
       <p>{wind}</p>  <p>Wind speed</p>
    </div>
    </div>
    </>
   )
}
const App = () => {
    const [icon,setIcon]=useState(clouds)
    const [degree,setDegree]=useState(0)
    const [city,setCity]=useState("Erode")
    const [lat,setLat]=useState(0)
    const [lon,setLon]=useState(0)
    const [humi,setHumi]=useState(0)
    const [wind,setWind]=useState(0)
    const [country,setCountry]=useState("India")

   const weatherIcons={
    "01d":sun,
    "01n":sun,
    "02d":clouds,
    "02n":clouds,
    "03d":drizzle,
    "03n":drizzle,
    "04d":drizzle,
    "04n":drizzle,
    "09d":heavyrain,
    "09n":heavyrain,
    "10d":heavyrain,
    "10n":heavyrain,
    "13d":snowy,
    "13n":snowy,
   }

    function handlecity(e){
        setCity(e.target.value)
    }
    function handleKeyDown(e){
        if(e.key==="Enter"){
            search()
        }
    }
    async function search() {
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ff85f5a3c9d791571cc00274e1a7150b&units=Metric`
        console.log(url)
        try {
            let res= await fetch(url)
            let data=res.json()
            console.log(data)
        } catch (error) {
            console.log("An error was occured",error.message)
        }
    }
    // setCity(data.name)
    // setDegree(Math.floor(data.main.temp))
    // setLat(data.coor.lat)
    // setLon(data.coor.lon)
    // setHumi(data.main.humidity)
    // setWind(data.wind.speed)
    // setCountry(data.sys.country)
    // const weathericonCode=data.weather[0].icon
    // setIcon(weatherIcons[weathericonCode]||clouds)
  return (
    <>
     <div className='main'>
        <div className="weather-main-page">
        <div className="inputbox">
            <input type="text" placeholder='Search city' onChange={handlecity} onKeyDown={handleKeyDown}/>
            <button onClick={search}>Search</button>
        </div>
            <Weatherdetails icon={icon} degree={degree} city={city} lat={lat} lon={lon} humi={humi} wind={wind} country={country}/>
        </div>
    </div>
    </>
  )
}

export default App
