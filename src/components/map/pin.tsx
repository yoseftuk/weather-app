import React from 'react';
import ICity from "../../types/city";
import {useDispatch, useSelector} from "react-redux";
import {REQUEST_DATA} from "../../store/actions";
import ApiStore from "../../types/api-store";
import {classes} from "../../pipes/class";

type PinProps = {city: ICity};
export default function Pin({city}: PinProps) {
    const dispatch = useDispatch();
    const currentCity: ICity = useSelector((state: ApiStore) => state.currentCity);
    function handleClick() {
        dispatch({type: REQUEST_DATA, payload: city});
    }
    return (
        <div className={classes({pin: true, active: city.name === currentCity.name})}
             onClick={handleClick} style={{top: `${city.top}%`, left: `${city.left}%`}}>
            <div className={'pin__title'}>{city.name}</div>
        </div>
    );
}
