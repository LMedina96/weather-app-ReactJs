import React from 'react'

const SearchInput = ({ inputValue, onInputChange, searchCitys, showDropdown, handleCityClick }) => {
    return (
        <div className="mb-4">
            <h3>Search a City</h3>
            <form action="" onSubmit={(event) => searchCity(event)}>
                <div className="input-group">
                    <input
                        type="text"
                        className='form-control'
                        value={inputValue}
                        onChange={onInputChange}
                    />
                </div>

                {showDropdown && Array.isArray(searchCitys) && searchCitys.length > 0 && (
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
    )
}

export default SearchInput
