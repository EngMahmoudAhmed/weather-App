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
            if (componentMonted) {
                setData((await response.json()))
                console.log(response);
                console.log(data);

            }
            return () => {
                componentMonted = false
            }
        }

        fetchWeather();
    }, []);


    let temp = (data.main.temp - 273.15).toFixed(2)

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
                                        <input type="search" onChange={(e) => {
                                            setInput(e.target.value)
                                        }} className="form-control" placeholder="Seach City" aria-label="Search City" aria-describedby="basic-addon2" />
                                        <button type='submit' className="input-group-text" id="basic-addon2">
                                            <i className="fas fa-search"></i>
                                        </button>
                                    </div>
                                        <h3>{ input}</h3>
                                </form>
                                <div className="bg-dark bg-opacity-50 text-white">
                                    <h2 className="card-title py-3">{data.name}</h2>
                                    <p className="card-text lead">Thursday, Septemper 19, 2023</p>
                                    <hr />
                                    <i className="fas fa-cloud fa-4x"></i>
                                    <h1 className='fw-bolder mb-5'>{temp }&deg;C</h1>
                                    <p className='fw-bolder lea mb-0'>Cloud</p>
                                    <p className='lead'>30.01&deg;C | 35.01&deg;C</p>
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
