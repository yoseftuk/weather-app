import IWeather from "./weather";

type Temp = {
    "day": number,
    "min": number,
    "max": number,
    "night": number,
    "eve": number,
    "morn": number
}
type FeelsLike = {
    "day": number;
    "night": number;
    "eve": number;
    "morn": number;
}

type DayData = {
    "dt": number;
    "sunrise": number;
    "sunset": number;
    "temp": Temp;
    "feels_like": FeelsLike;
    "pressure": number;
    "humidity": number;
    "dew_point": number;
    "wind_speed": number;
    "wind_deg": number;
    "weather": IWeather[];
    "clouds": number;
    "pop": number;
    "uvi": number
};
export default DayData;
