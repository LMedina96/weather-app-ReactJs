import React from 'react'
import Spinner from './Spinner'

const WeatherInfoCard = ({location, current, infoCardLoading}) => {

  return (
    <>
      
      {infoCardLoading  ? <section className='container infoCard text-center p-2'>
                            <Spinner /> 
                          </section>
                        : <section className='container infoCard text-center p-2'>
                            <div className='row'>
                              <h3 className='col m-0'><img src={current?.condition.icon} alt={current?.condition.text} /></h3>
                            </div>
                            <div className='row text-center'>
                              <h3 className='col'>{current?.temp_c} C°</h3>
                            </div>
                            <div className='row'>
                              <span className='col'><b>Country:</b> {location?.country}</span>
                              <span className='col'><b>City:</b> {location?.name}</span>
                            </div>
                            <div className='row'>
                              <span className='col'><b>Local Time:</b> {location?.localtime}</span>
                              <span className='col'><b>Condition:</b> {current?.condition.text}</span>
                            </div>
                            <div className='row'>
                              <span className='col'><b>Wind:</b> {current?.wind_kph} kph</span>
                              <span className='col'><b>Precipitation:</b> {current?.precip_mm} mm</span>
                            </div>
                          </section>}
    </>
  )
}

export default WeatherInfoCard
