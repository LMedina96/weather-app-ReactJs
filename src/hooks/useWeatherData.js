import { useEffect, useState } from "react"
import { weatherRequest } from "../services/weatherRequest"

export const useWeatherData = (coords) => {
    const [weatherData, setWeatherData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const getCityWeather = async() => {
        const response = await weatherRequest(coords);
        setWeatherData(response)
        setIsLoading(false)
    }
    
    useEffect(() => {
        getCityWeather()
    }, [coords])

    return ({
        weatherData,
        isLoading
        }
    )
}