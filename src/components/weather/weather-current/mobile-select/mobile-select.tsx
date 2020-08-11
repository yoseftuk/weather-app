import React, {useState} from 'react';
import './mobile-select.scss';
import {useDispatch, useSelector} from "react-redux";
import ApiStore from "../../../../types/api-store";
import {cities} from "../../../map/cities.data";
import {REQUEST_DATA} from "../../../../store/actions";
import ICity from "../../../../types/city";
import {classes} from "../../../../pipes/class";

export default function MobileSelect() {
    const currentCity = useSelector((state: ApiStore) => state.currentCity);
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    function chooseCity(city: ICity) {
        setIsOpen(false);
        dispatch({type: REQUEST_DATA, payload: city});
    }

    return (
        <>
            <h1 id={'select__title'} onClick={() => setIsOpen(true)}>{currentCity.name}&nbsp;&#9662;</h1>
            <div id={'select__wrapper'} className={classes({open: isOpen})}>
                <ul id={'select__options'}>
                    {cities.sort((a, b) => a.name > b.name ? 1 : -1).map(city => (
                        <li className={classes({select__option: true, active: city.name === currentCity.name})} onClick={() => chooseCity(city)}>{city.name}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}
