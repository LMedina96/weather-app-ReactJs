import React, { useEffect } from 'react'

const SearchInput = ({ inputValue, onInputChange, searchCitys, showDropdown, handleCityClick, setShowDropdown }) => {

    useEffect(() => {
        const handleDocumentClick = (event) => {
          if (showDropdown && !event.target.closest('.searchInputContainer')) {
            setShowDropdown(false);
          }
        };
      
        document.addEventListener('mousedown', handleDocumentClick);
      
        return () => {
          document.removeEventListener('mousedown', handleDocumentClick);
        };
      }, [showDropdown, inputValue]);

    return (
        <div className="mb-4 m-auto w-75 searchInputContainer">
            <h3>Search a City</h3>
            <form action="" onSubmit={(event) => {event.preventDefault()}}>
                <div className="input-group">
                    <input
                        type="text"
                        className='form-control searchInput rounded-top-1'
                        value={inputValue}
                        onChange={onInputChange}
                    />
                    {showDropdown && Array.isArray(searchCitys) && searchCitys.length > 0 && (
                        <ul className='list-group citiesList weather-list rounded-bottom-1'>
                            {searchCitys.map((city, index) => (
                                <li className='list-group-item selectedList'
                                    onClick={() => handleCityClick(city.lat, city.lon)}
                                    key={index}>
                                    {city.name} - {city.country}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

            </form>
        </div>
    )
}

export default SearchInput
