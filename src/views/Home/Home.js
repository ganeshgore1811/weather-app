import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './Home.css';
export default Home


function Home(){
    const [city, setCity] = useState('pune');
    const [temperature, setTemperature] = useState(0)
    const [message, setMessage] = useState('')

    async function loadWeatherInfo(){
    try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=61acad472d8a369cd3423bcd679e0498`)

        setTemperature((response.data.main.temp -273).toFixed(2))
        setMessage('✅ Data Fetched Successfully...')
    }
    catch(err){
        setTemperature(0) 
        setMessage('City Not Found')
    }
    }   

    useEffect(()=>{
        loadWeatherInfo()
    },[city])

    return (
        <div>

            <h1 className='app-title'> Weather For {city}</h1>

           <input
            className='search-bar'
            type='text'
            placeholder='Enter City...'
            value={city}
            onChange={(e)=>{
            setCity(e.target.value)
            }}
            />
            <p className='message-text'>{message}</p>
         
           <h1 className='temprature-text'>Temperature: {temperature} °C</h1>
               
         </div>
    )
}