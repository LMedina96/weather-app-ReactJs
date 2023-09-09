import { useEffect, useState } from "react"
import { searchWeatherPerHour } from "../services/searchWeatherPerHour"

export const useWheaterDataPerHour = (coords) => {

    const [weatherPerHour, setWeatherPerHour] = useState([])
    const [isPerHourLoading, setIsPerHourLoading] = useState(true)

    const getWeatherDataPerHour = async() => {
        setIsPerHourLoading(true)
        const getPerHourData = await searchWeatherPerHour(coords)
        setWeatherPerHour(getPerHourData)
        setIsPerHourLoading(false)
    }

    useEffect(() => {
        getWeatherDataPerHour()
    }, [coords])

    return {
        weatherPerHour,
        isPerHourLoading
    }
}