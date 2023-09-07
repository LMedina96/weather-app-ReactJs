const WeatherHourCard = ({ time, condition, temp, precip }) => {

    const dateTimeString = time;
    const dateTime = new Date(dateTimeString);
    const hour = dateTime.getHours()

    return (
        <>
            <div className="hourCard card mx-1">
                <h2>{hour}:00</h2>
                <h3><img src={condition.icon} alt={condition.text} /></h3>
                <span className="fs-6">{temp} C°</span>
                <span className="fs-6">{condition.text}</span>
                <span className="fs-6">{precip} mm</span>
            </div>
        </>
    )
}

export default WeatherHourCard
