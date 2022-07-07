import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Link} from "react-router-dom";
import {getList, getClientsTabs} from "../Api";

const Clients = () => {
    const [ activeTab, setActiveTab ] = useState(0)
    const [ clientsContent, setClientsContent ] = useState(null)
    const [ isClientsContentLoading, setIsClientsContentLoading ] = useState(true)
    const [ isClientsContentNotFound, setIsClientsContentNotFound ] = useState(true)
    const [ clientsTabs, setClientsTabs ] = useState(null)
    const [ isClientsTabsLoading, setIsClientsTabsLoading ] = useState(true)
    const [ width, setWidth ] = useState(window?.innerWidth)

    useEffect(() => {
        const cb = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', cb)

        return () => window.removeEventListener('resize', cb)
    }, [])

    const changeClientsTab = (index, alias) => {
        setActiveTab(index)
        setIsClientsContentLoading(true)
        setIsClientsContentNotFound(false)

        getList(alias)
            .then(response => {
                if (response.data.results[0]) setClientsContent(response.data.results)
                else setIsClientsContentNotFound(true)
                setIsClientsContentLoading(false)
            })
            .catch(e => {
                setIsClientsContentNotFound(true)
                console.log(e)
            })
    }

    useEffect(() => {
        getClientsTabs()
            .then(response => {
                changeClientsTab(0, response.data.results[0].alias)
                setClientsTabs(response.data.results)
                setIsClientsTabsLoading(false)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])

    const sliderSettings = {
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1399,
                settings: {
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            }
        ]
    }

    return (
        <section className="clients">
            <div className="container">
                <div className="container_smail">
                    <h3 className="clients__title">Воспользуйтесь <span>типовыми услугами</span> от 75 000+ исполнителей</h3>
                    <p className="clients__desc">Skilla разработала предложения для заказчиков, на основе своего опыта с 2010 г</p>
                </div>

                <div className="tabs">
                    <div className="tabs__buttons">
                        {isClientsTabsLoading && <div style={{
                            margin: '30px auto',
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <div className="lds-dual-ring"></div>
                        </div>}
                        {!isClientsTabsLoading && clientsTabs?.length && clientsTabs?.map((clientTab, index) => <button key={index} index={index} className={activeTab === index ? "tabs__button tabs__button_active" : "tabs__button"} onClick={() => changeClientsTab(index, clientTab.alias)}>{clientTab.name}</button>)}
                    </div>
                    {isClientsContentLoading && <div style={{
                        margin: '30px auto',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <div className="lds-dual-ring"></div>
                    </div>}
                    {!isClientsContentLoading && !isClientsContentNotFound && <div className={width > 1399 ? clientsContent.length > 4 ? "tabs__content" : "tabs__content tabs__content_flex" : "tabs__content"}>
                        {clientsContent.length > 4 ? <Slider {...sliderSettings}>
                            {clientsContent.map((service, index) => <div key={index}>
                                <div className="tab">
                                    <img src={service.service_icon} alt="иконка" className="tab__icon"/>
                                    <span className="tab__money">до {service.service_price} за смену</span>
                                    <h3 className="tab__title">{service.service_name}</h3>
                                    <p className="tab__text">{service.service_slogan}</p>
                                    <Link to={service.service_link || '#'} className="tab__link">
                                        Читать об услуге
                                        <span className="arrow-right-top icon"></span>
                                    </Link>
                                </div>
                            </div>)}
                        </Slider> : width > 1399 ? clientsContent.map((service, index) => <div key={index}>
                                <div className="tab">
                                    <img src={service.service_icon} alt="иконка" className="tab__icon"/>
                                    <span className="tab__money">до {service.service_price} за смену</span>
                                    <h3 className="tab__title">{service.service_name}</h3>
                                    <p className="tab__text">{service.service_slogan}</p>
                                    <Link to={service.service_link || '#'} className="tab__link">
                                        Читать об услуге
                                        <span className="arrow-right-top icon"></span>
                                    </Link>
                                </div>
                            </div>) : <Slider {...sliderSettings}>
                        {clientsContent.map((service, index) => <div key={index}>
                            <div className="tab">
                            <img src={service.service_icon} alt="иконка" className="tab__icon"/>
                            <span className="tab__money">до {service.service_price} за смену</span>
                            <h3 className="tab__title">{service.service_name}</h3>
                            <p className="tab__text">{service.service_slogan}</p>
                            <Link to={service.service_link || ''} className="tab__link">
                            Читать об услуге
                            <span className="arrow-right-top icon"></span>
                            </Link>
                            </div>
                            </div>)}
                            </Slider>}
                    </div>}
                    {!isClientsContentLoading && isClientsContentNotFound && <div className="tabs__content">
                        <h2 className="tabs__not-found">Услуги не найдены :(</h2>
                    </div>}
                </div>
            </div>
        </section>
    )
}

export default Clients