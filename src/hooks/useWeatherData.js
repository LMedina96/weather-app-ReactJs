import { useEffect, useState } from "react"
import { weatherRequest } from "../services/weatherRequest"

export const useWeatherData = (coords) => {
    const [weatherData, setWeatherData] = useState({})
    const [infoCardLoading, setInfoCardLoading] = useState(true)

    const getCityWeather = async() => {
        setInfoCardLoading(true)
        const response = await weatherRequest(coords);
        setWeatherData(response)
        setInfoCardLoading(false)
    }
    
    useEffect(() => {
        getCityWeather()
    }, [coords])

    return ({
        weatherData,
        infoCardLoading
        }
    )
}