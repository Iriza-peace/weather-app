

import React,{useState} from 'react';
import axios from 'axios';
 

function App() {
  const [data,setData] = useState ({})
  const [location,setLocation] =useState('')
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=99d5110ab878baae8b435d5416391a9e` 
    /*const url = `https://api.openweathermap.org/data/2.5/weather?q=dallas&units=imperial&appid=99d5110ab878baae8b435d5416391a9e` */
 


const searchLocation = (event) =>{
  if(event.key === 'Enter'){
    axios.get(url).then((response) =>{
  setData(response.data)
  console.log(response.data)
    })
    setLocation('')
  }

}
    return (
    <div className="app">
      <div className="search">
        <input 
        value={location}
        onChange ={event =>setLocation(event.target.value)}
        onKeyPress ={searchLocation}
        placeholder='Enter location'
        type="text"/>

      </div>
    <div className="container">
      <div className="top">
        <div className="location">
          <p>{data.name}</p>
        </div>
        <div className="temperature">
          {data.main ?<h1>{data.main.temp} F</h1>: null}
         
        </div>
        <div className="description">
          {data.weather ?<p>{data.weather[0].main}</p> :null}
        </div>

        {/* If do not want to display these feels before unless we get an answer */}
        {data.name !== undefined &&
        
        <div className="bottom">
          <div className="feels">
            {data.main ?<p className='bold'>{data.main.feels_like.toFixed(2)} F</p> :null}
            <p>It FEELS LIKE</p>
          </div>
          <div className="humidity">
          {data.main ?<p className='bold'>{data.main.humidity.toFixed(2)}%</p>: null}
            <p>HUMIDITY</p>
        </div>
        <div className="wind">
          {data.wind ?<p className='bold'>{data.wind.speed.toFixed(2)}MPM</p>: null}
          <p>WIND SPEED</p>
        </div>
      </div>
}
    </div>
    </div>
    </div>
  );
}

export default App;
