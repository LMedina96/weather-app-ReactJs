import { useEffect, useState } from "react"
import { weatherRequest } from "../services/weatherRequest"

export const useWeatherData = (city) => {
    const [weatherData, setWeatherData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const getCityWeather = async() => {
        setIsLoading(true)
        const response = await weatherRequest(city);
        setWeatherData(response)
        setIsLoading(false)
    }
    
    useEffect(() => {
        getCityWeather()
    }, [city])

    return ({
        weatherData,
        isLoading
        }
    )
}