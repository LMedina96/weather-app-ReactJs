import { useState } from "react";
import { useWeatherData } from "../hooks/useWeatherData"
import WeatherInfo from "./WeatherInfo";
import cities from "../helpers/cityList";


const WeatherCard = () => {

    const [selectedCity, setSelectedCity] = useState('Buenos Aires');
    const [inputValue, setInputValue] = useState('')

    const {weatherData, isLoading} = useWeatherData(selectedCity)
    const {location, current} = weatherData

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value)
    }

    const searchCity = (event) => {
        console.log(event)
        event.preventDefault()
        console.log(event.target.value)
        setInputValue('')
    }

    const onInputChange = ({target}) => {
        const value = target.value
        setInputValue(value)
    }

    return (
        <>
            <div className="p-4">
                { isLoading 
                    ? <h2>Loading...</h2>
                    : <WeatherInfo
                    selectedCity={selectedCity}
                     location={location} 
                     current={current}
                     handleCityChange={handleCityChange}
                     searchCity={searchCity}
                     inputValue={inputValue}
                     onInputChange={onInputChange}
                     cities={cities}
                     />}
            </div>
        </>
    )
}

export default WeatherCard
