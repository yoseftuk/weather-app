import ApiData from "./api-data";
import ICity from "./city";

type ApiStore = {
    isLoading: boolean;
    error: string | null;
    data: ApiData | null;
    currentCity: ICity;
    isFahrenheit: boolean;
}

export default ApiStore;
