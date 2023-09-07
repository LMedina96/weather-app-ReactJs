import { useEffect, useState } from "react"
import { searchWeatherPerHour } from "../services/searchWeatherPerHour"

export const useWheaterDataPerHour = (coords) => {

    const [weatherPerHour, setWeatherPerHour] = useState([])

    const getWeatherDataPerHour = async() => {
        const getPerHourData = await searchWeatherPerHour(coords)
        setWeatherPerHour(getPerHourData)
    }

    useEffect(() => {
        getWeatherDataPerHour()
    }, [coords])

    return {
        weatherPerHour,
    }
}