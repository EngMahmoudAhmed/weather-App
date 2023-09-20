import React, { useEffect, useState } from 'react'
import image1 from '../assets/image1.jpg'

const Searchweather = () => {
    const [search, setSearch] = useState('London');
    const [data, setData] = useState([]);
    const [input, setInput] = useState('');
    let componentMonted = true;

    useEffect(() => {
        const fetchWeather = async () => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=8bc69c7d20c98ec4320b02ca2c334a54`)
            setData(await response.json())
            // if (componentMonted) {
            // }

            // return () => {
            //     componentMonted = false
            // }
        }

        fetchWeather();
    }, []);




    console.log(data);

    if (data && data.weather && data.weather[0] && data.weather[0].main) {
        var main = data.weather[0].main;
        // Rest of your code here
    } else {
        // Handle the case when data or its properties are not defined
        // or when main is null or undefined
    }


    let emoji = null;

    if (typeof data.main != 'undefined') {
        if (data.weather[0].main == 'Clouds') {
            emoji = 'fa-cloud'
        }
        else if (data.weather[0].main == 'Rain') {
            emoji = 'fa-cloud-rain'
        }
        else if (data.weather[0].main == 'Thunderstorm') {
            emoji = 'fa-bolt'
        }
        else if (data.weather[0].main == 'Drizzle') {
            emoji = 'fa-cloud-rain'
        }
        else if (data.weather[0].main == 'Snow') {
            emoji = 'fa-snow-flake'
        }
        else {
            emoji = 'fa-smog'
        }
    }
    else {
        return (
            <div>...Loading</div>
        )
    }

    // let main= data?.weather[0]?.main;
    let temp = (data?.main?.temp - 273.15).toFixed(2)
    let temp_max = (data?.main?.temp_max - 273.15).toFixed(2)
    let temp_min = (data?.main?.temp_min - 273.15).toFixed(2)


    // date
    let d = new Date();
    let date = d.getDate();
    let year = d.getFullYear();
    let month = d.toLocaleString('default', { month: 'long' });
    let day = d.toLocaleString('default', { weekday: 'long' });

    // time
    let time = d.toLocaleString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    return (

        <div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card text-white text-center border-0">
                            <img src={image1} className="card-img" height={500} alt="..." />
                            <div className="card-img-overlay">
                                <form>
                                    <div className="input-group mb-4 w-75 mx-auto">
                                        <input type="search" className="form-control" value={input} name='search'
                                            placeholder="Seach City" required aria-label="Search City" aria-describedby="basic-addon2"
                                            onChange={(e) => { setInput(e.target.value) }} />
                                        <button type='submit' className="input-group-text" id="basic-addon2">
                                            <i className="fas fa-search"></i>
                                        </button>
                                    </div>
                                </form>
                                <div className="bg-dark bg-opacity-50 text-white">
                                    <h2 className="card-title py-3">{data.name}</h2>
                                    <p className="card-text lead fw-bold">{day}, {month} {date}, {year} </p>
                                    <h4>{time}</h4>
                                    <hr />
                                    <i className={`fas ${emoji} fa-4x`}></i>
                                    <h1 className='fw-bolder mb-2'>{temp}&deg;C</h1>
                                    <p className='fw-bolder lead mb-0'>{main}</p>
                                    <p className='lead pb-5'>{temp_max}&deg;C | {temp_min}&deg;C</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Searchweather
