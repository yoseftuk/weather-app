import IWeather from "./weather";

type HourData = {
    "dt": number;
    "temp": number;
    "feels_like": number;
    "pressure": number;
    "humidity": number;
    "dew_point": number;
    "clouds": number;
    "visibility": number;
    "wind_speed": number;
    "wind_deg": number;
    "weather": IWeather[],
    "pop": number;
}
export default HourData;
