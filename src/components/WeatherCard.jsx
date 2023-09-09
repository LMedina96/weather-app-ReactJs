import debounce from 'lodash/debounce';

import { useState } from "react";
import { useWeatherData } from "../hooks/useWeatherData"
import { searchWeatherRequest } from "../services/searchWeatherRequest";
import WeatherInfoCard from "./WeatherInfoCard";
import SearchInput from "./SearchInput";
import WeatherHourCard from './WeatherHourCard';
import { useWheaterDataPerHour } from '../hooks/useWeatherDataPerHour';


const WeatherCard = () => {

    const [selectedCity, setSelectedCity] = useState('Buenos Aires');
    const [inputValue, setInputValue] = useState('')
    const [searchCitys, setSearchCitys] = useState([])
    const [showDropdown, setShowDropdown] = useState(false);

    const { weatherData, infoCardLoading } = useWeatherData(selectedCity)
    const { location, current } = weatherData

    const { weatherPerHour, isPerHourLoading } = useWheaterDataPerHour(selectedCity)

    const debouncedSearchWeather = debounce(async (inputValue) => {
        const searchData = await searchWeatherRequest(inputValue);
        setSearchCitys(searchData);
    }, 300);

    const onInputChange = ({ target }) => {
        setShowDropdown(false);
        const inputValue = target.value;
        setInputValue(inputValue);
        setShowDropdown(true);
        debouncedSearchWeather(inputValue);
    };

    const handleCityClick = async (lat, lon) => {
        setSelectedCity(`${lat},${lon}`);
        setShowDropdown(false);
        setInputValue('')
    };

    return (
        <>
            <div className="p-4">
                <div>
                    <SearchInput
                        inputValue={inputValue}
                        onInputChange={onInputChange}
                        searchCitys={searchCitys}
                        showDropdown={showDropdown}
                        handleCityClick={handleCityClick}
                    />

                    <WeatherInfoCard
                        location={location}
                        current={current}
                        infoCardLoading={infoCardLoading}
                    />

                    <ul className='m-4 d-flex carrousel'>
                        {
                            weatherPerHour.map((hour) => (
                                <li key={hour.time}>
                                    <WeatherHourCard
                                        time={hour.time}
                                        condition={hour.condition}
                                        temp={hour.temp_c}
                                        precip={hour.precip_mm}
                                        isPerHourLoading={isPerHourLoading}
                                    />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default WeatherCard
