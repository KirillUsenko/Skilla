import React, {useEffect, useMemo, useRef, useState} from 'react'
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {getCities, getMaps, getUserInfo} from "../Api";
import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';
import {userActions} from "../store/reducer/userSlice";

function MapComponent() {
    const userCity = useSelector(state => state.user.city)
    const [ city, setCity ] = useState(userCity || 'Москва')
    const [ isCityLoading, setIsCityLoading ] = useState(true)
    const [ searchCityType, setSearchCityType ] = useState('week')

    const [ cities, setCities ] = useState(null)
    const [ isCitiesLoading, setIsCitiesLoading ] = useState(true)
    const [ isCitiesError, setIsCitiesError ] = useState(false)

    const [ isMenuActive, setIsMenuActive ] = useState(false)

    const [ isMapLoading, setIsMapLoading ] = useState(true)
    const [ isMapError, setIsMapError ] = useState(false)
    const [ isMapNotFound, setIsMapNotFound ] = useState(false)
    const [ mapData, setMapData ] = useState(null)

    const dispatch = useDispatch()

    const getServerCity = (city) => {
        return cities?.filter(item => item?.morph === city || item?.name === city)[0]?.name
    }

    const changeMap = (city) => {
        const toServerCity = getServerCity(city)

        if (!toServerCity) {
            setIsMapNotFound(true)
            return
        }

        setIsMapLoading(true)
        setIsMapNotFound(false)
        setIsMapError(false)
        getMaps(toServerCity || city, searchCityType)
            .then(response => {
                if (response.data?.center?.lat === null) {
                    setIsMapNotFound(true)
                }
                setIsMenuActive(false)
                setMapData(response.data)
                setIsMapLoading(false)
            })
            .catch(e => {
                console.log(e)
                setIsMenuActive(false)
                setIsMapError(true)
            })
    }

    useEffect(() => {
        getUserInfo()
            .then(response => dispatch(userActions.changeCity(response.data.city)))
            .catch((e) => {
                console.log(e.message)
                dispatch(userActions.changeCity('Москва'))
            })
    }, [])

    useEffect(() => {
        if (userCity) {
            setIsMapLoading(true)
            setIsMapNotFound(false)
            setIsMapError(false)
            getMaps(userCity, searchCityType)
                .then(response => {
                    if (response.data?.center?.lat === null) {
                        setIsMapNotFound(true)
                    }
                    setMapData(response.data)
                    setIsMapLoading(false)
                })
                .catch(e => {
                    console.log(e)
                    setIsMapError(true)
                })
            setCity(userCity)
            setIsCityLoading(false)
        }
    }, [userCity])

    useEffect(() => {
        setIsCitiesLoading(true)
        setIsCitiesError(false)

        getCities()
            .then(response => {
                setCities(response.data)
                setIsCitiesLoading(false)
            })
            .catch((e) => {
                setIsCitiesError(true)
                console.log(e)
            })
    }, [city])

    useEffect(() => {
        changeMap(city)
    }, [searchCityType, city])

    return (
            <section className="maps">
                <StyledMapsMenu className="container_smail container_maps">
                    {isCityLoading && <div className="maps__loader">
                        <div className="lds-dual-ring"></div>
                    </div>}
                    {!isCityLoading && <>
                    <div className="maps__text">
                        <h2 className="maps__title">Взгляните на заказы,<span />выполненные исполнителями <span />в<div className="maps__input" onFocus={() => setIsMenuActive(true)} onBlur={() => changeMap(city)}>
                            <div className={isMenuActive ? "maps__menu maps__menu_active" : "maps__menu"}>
                                {isCitiesError && <p className="maps__city">Не удалось загрузить города :(</p>}
                                {!isCitiesLoading && !isCitiesError && cities.length && cities.filter(item => item.morph.startsWith(city) || item.name.startsWith(city)).map(filtredCity => <p className="maps__city" onClick={() => {
                                    setIsMenuActive(false)
                                    setCity(filtredCity.morph)
                                    changeMap(filtredCity.name)
                                }}>{filtredCity.name}</p>)}
                            </div>
                            <input value={city} onChange={e => setCity(e.target.value)}/>
                        </div></h2>
                        <p className="maps__description">Мы справимся с объемом до 100 человек/объект</p>
                    </div>
                    <div className="maps__tabs">
                        <button className={searchCityType === "week" ? "maps__tab maps__tab_active" : "maps__tab"} onClick={() => setSearchCityType('week')}>Неделя</button>
                        <button className={searchCityType === "month" ? "maps__tab maps__tab_active" : "maps__tab"} onClick={() => setSearchCityType('month')}>Месяц</button>
                        <button className={searchCityType === "3month" ? "maps__tab maps__tab_active" : "maps__tab"} onClick={() => setSearchCityType('3month')}>Три месяца</button>
                    </div>
                    </>}
                </StyledMapsMenu>
                <StyledMap>
                    <div className="maps__map">
                            {isMapError && <div className="map"><div className="maps__loader">
                                <h3 className="maps__error">При загрузке карты произошла ошибка :(</h3>
                            </div></div>}
                            {isMapNotFound && <div className="map"><div className="maps__loader">
                                <h3 className="maps__error">Мы в этом городе не работаем :(</h3>
                            </div></div>}
                            {isMapLoading && !isMapError && !isMapNotFound && <div className="map"><div className="maps__loader">
                                <div className="lds-dual-ring"></div>
                            </div></div>}
                            {!isMapLoading && !isMapError && !isMapNotFound && <YMaps>
                                <Map width="100%" height="600px" defaultState={{ center: [mapData.center.lat, mapData.center.lng], zoom: 10 }}>
                                    {mapData?.data?.length && mapData.data.map((marker, index) => <Placemark key={index} geometry={[marker.lat, marker.lng]} width='64px' height='64px' options={{
                                        iconLayout: "default#image",
                                        iconImageHref: "/static/map/icon.png",
                                        iconImageSize: [64, 64]
                                    }} />)}
                                </Map>
                            </YMaps>}
                    </div>
                </StyledMap>
            </section>
    )
}

const StyledMapsMenu = styled.div`
  .maps__menu {
    display: none;
    grid-template-columns: 1fr;
    position: absolute;
    z-index: 1;
    max-height: 260px;
    overflow-y: auto;
    left: 0;
    top: 60px;
    width: 100%;
    border-radius: 4px;
    background-color: #303550;
  }
  
  .maps__city {
    padding: 19px 24px;
    font-size: 22px;
    line-height: 1.2em;
    font-weight: 400;
    border-radius: 4px;
    transition: background-color .3s ease;
    
    &:hover {
      background-color: #4D5268;
    }
  }
  
  .maps__menu_active {
    display: grid;
  }
  
  .maps__input input:focus {
    & ~ .maps__menu {
      display: block;
    }
  }
`

const StyledMap = styled.div`
  .map {
    width: 100%;
    height: 600px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .maps__map {
    background-color: #fff;
  }
  
  .map-disabled {
    display: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    color: #000729;
    width: max-content;
    height: max-content;
    font-family: inherit;
  }
  
  .maps__error {
    font-size: 24px;
    color: #000729;
  }
`
export default MapComponent