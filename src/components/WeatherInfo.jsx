import React from 'react'

const WeatherInfo = ({selectedCity, location, current, handleCityChange, cities, searchCity, inputValue, onInputChange}) => {

  return (
    <>
      <div>
            <h3>Select a Country</h3>
            {/* <form action="POST" onSubmit={(event) => searchCity(event)}>
                <input 
                    type="text"
                    value={inputValue}
                    onChange={onInputChange}
                />
            </form> */}
            <select className='form-select mb-3' onChange={handleCityChange} value={selectedCity}>
            {cities.map((city) => (
                <option key={city.value} value={city.value}>
                    {city.name}
                </option>
            ))}
            </select>
        </div>

        <ul className='list-group weather-list'>
            <li className='list-group-item'>Country: {location?.country}</li>
            <li className='list-group-item'>City: {location?.name}</li>
            <li className='list-group-item'><img src={current?.condition.icon} alt={current?.condition.text} /></li>
            <li className='list-group-item'>Temperature: {current?.temp_c} C°</li>
            <li className='list-group-item'>Local Time: {location?.localtime}</li>
            <li className='list-group-item'>Condition: {current?.condition.text}</li>
            <li className='list-group-item'>Wind: {current?.wind_kph} kph</li>
            <li className='list-group-item'>Precipitation: {current?.precip_mm} mm</li>
        </ul>
    </>
  )
}

export default WeatherInfo
