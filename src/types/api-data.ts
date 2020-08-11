import CurrentData from "./current-data";
import HourData from "./hour-data";
import DayData from "./day-data";

type ApiData = {
    lat: number;
    lon: number;
    timezone_offset: number;
    current: CurrentData;
    hourly: HourData[];
    daily: DayData[];
}
export default ApiData;
