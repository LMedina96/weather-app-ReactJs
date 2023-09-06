import { useState } from "react";
import { useWeatherData } from "../hooks/useWeatherData"
import WeatherInfo from "./WeatherInfo";
import { searchWeatherRequest } from "../services/searchWeatherRequest";


const WeatherCard = () => {

    const [selectedCity, setSelectedCity] = useState('Buenos Aires');
    const [inputValue, setInputValue] = useState('')
    const [searchCitys, setSearchCitys] = useState([])
    const [showDropdown, setShowDropdown] = useState(false);

    const {weatherData, isLoading} = useWeatherData(selectedCity)
    const {location, current} = weatherData

    const onInputChange = async({target}) => {
        setShowDropdown(false)
        const inputValue = target.value
        setInputValue(inputValue)
        const searchData = await searchWeatherRequest(inputValue)
        setShowDropdown(searchData)
        setSearchCitys(searchData)
    }

    const handleCityClick = (lat, lon) => {
        setSelectedCity(`${lat},${lon}`);
        setShowDropdown(false);
        setInputValue('')
    };

    return (
        <>
            <div className="p-4">
                { isLoading 
                    ? <h2>Loading...</h2>
                    :
                    <div>
                        <div className="mb-4">
                            <h3>Select a Country</h3>
                            <form action="" onSubmit={(event) => searchCity(event)}>
                                <div className="input-group">
                                    <input 
                                        type="text"
                                        className='form-control'
                                        value={inputValue}
                                        onChange={onInputChange}
                                    />
                                    <button className="btn btn-primary" type="button">Search</button>
                                </div>
                                {showDropdown && Array.isArray(searchCitys) && searchCitys.length > 0 &&  (
                                    <ul className='list-group weather-list'>
                                    {searchCitys.map((city, index) => (
                                        <li className='list-group-item selectedList' 
                                            onClick={() => handleCityClick(city.lat, city.lon)}
                                            key={index}>
                                                {city.name} - {city.country}
                                            </li>
                                    ))}
                                    </ul>
                                )}
                            </form>
                        </div>


                        <WeatherInfo
                            location={location} 
                            current={current}
                        />
                    </div>
                }
            </div>
        </>
    )
}

export default WeatherCard
