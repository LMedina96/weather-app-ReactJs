export const searchWeatherPerHour = async(coords) => {
    const key = 'f2e4d8b9cfmshb5fc593171b822ap18ef68jsn45b0d52b3b7b'
    const host = 'weatherapi-com.p.rapidapi.com'

    const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${coords}`
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': key,
		    'X-RapidAPI-Host': host
        }
    }

    try {
        const response = await fetch(url, options)
        const data = await response.json()
        const {hour} = data.forecast.forecastday[0];
        return hour
    } catch(err) {
        console.error(err)
    }
}