import IWeather from "./weather";

type CurrentData = {
    "dt": number;
    "sunrise": number;
    "sunset": number;
    "temp": number;
    "feels_like": number;
    "pressure": number;
    "humidity": number;
    "dew_point": number;
    "uvi": number;
    "clouds": number;
    "visibility": number;
    "wind_speed": number;
    "wind_deg": number;
    "weather": IWeather[];
}
export default CurrentData;
