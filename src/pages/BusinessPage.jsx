import React, {useState, useEffect, useRef} from 'react'
import styled from "styled-components";
import Navbar from "../components/Navbar";
import RadioGroup from "../components/RadioGroup";
import Footer from "../components/Footer";
import Chart from "../components/Chart";
import Slider from "react-slick";
import Clients from "../components/Clients";
import {getCities, sendForm} from "../Api";
import Calculator from "../components/Calculator";

const BusinessPage = () => {
    const [ city, setCity ] = useState('')
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ why, setWhy ] = useState('')
    const [ isFormSubmit, setIsFormSubmit ] = useState(false)
    const [ isExpPeoples, setIsExpPeoples ] = useState('0')
    const [ isExpBusiness, setIsExpBusiness ] = useState('0')
    const [ cities, setCities ] = useState(null)
    const [ isCitiesLoading, setIsCitiesLoading ] = useState(true)
    const [ sliderImageLink, setSliderImageLink ] = useState('')
    const [ step, setStep ] = useState(1)
    const [ isSliderActive, setIsSliderActive ] = useState(false)
    const [ phone, setPhone ] = useState('')
    const [ radio, setRadio ] = useState('telegram')
    const [ width, setWidth ] = useState(window?.innerWidth)

    const openSlider = (e) => {
        setIsSliderActive(true)
        setSliderImageLink(e.target.innerHTML.split('<img src="')[1].split('" alt')[0].trim())
    }
    const submitForm = (e) => {
        e.preventDefault()
        setStep(1)
        sendForm(phone, radio)
            .then(response => {
                if (response.data.result === 'success') {
                    setIsFormSubmit(true)
                    return true
                }
                else {
                    setIsFormSubmit(false)
                    return false
                }
            })
            .catch(e => {
                setIsFormSubmit(false)
                console.log(e)
                return false
            })
    }

    const sliderSettings = {
        className: "slider-images",
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        margin: 10,
        dots: false,
        arrows: true
    }

    const sliderMoneySettings = {
        className: "money__slider",
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        margin: 10,
        dots: true,
        arrows: false,
        initialSlide: 4
    }

    const sliderGridSettings = {
        className: "grid__slider",
        centerMode: true,
        infinite: true,
        centerPadding: "1px",
        slidesToShow: 3,
        sliderToScroll: 1,
        speed: 300,
        dots: true,
        arrows: false
    }

    useEffect(() => {
        getCities()
            .then(response => {
                setCities(response.data)
                setIsCitiesLoading(false)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])

    useEffect(() => {
        const cb = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', cb)

        return () => window.removeEventListener('resize', cb)
    }, [])

    useEffect(() => {
        setWhy('')
        setEmail('')
        setName('')
        setCity('')
        setIsExpBusiness('0')
        setIsExpPeoples('0')
        setStep(1)
    }, [isFormSubmit])

    return (
        <StyledBusiness>
            {isFormSubmit && <form onSubmit={(e) => {
                e.preventDefault()
                if (step === 1) {
                    if (cities.filter(item => item.name === city)[0]) setStep(step + 1)
                    else setCity('')
                    return
                }
                setStep(step + 1)
            }} onClick={(e) => e.target.classList.value.includes('modal---') && setIsFormSubmit(false)} className="modal---">
                <div className="modal__content">
                    <div className="modal__cross" onClick={() => setIsFormSubmit(false)}>
                        <span className="cross icon"></span>
                    </div>
                    <h2 className="modal__title">{step === 4 ? 'Хороший ход!' : `Шаг ${step} из 3`}</h2>

                    {step === 1 && <>
                        <p className="modal__text">Мы уже получили заявку и свяжемся с вами, чтобы ускорить процесс, ответьте на вопросы</p>
                        <input type="text" required placeholder="Ваше имя" value={name} onChange={(e) => setName(e.target.value)} className="modal__input modal__input_step1"/>

                        <div className="modal__input_city modal__input_city_step1">
                            <input type="text" required value={city} onChange={(e) => setCity(e.target.value)} placeholder="Москва" className="modal__input"/>
                            {isCitiesLoading && <div className="modal__input_menu"><div className="lds-dual-ring"></div></div>}
                            {!isCitiesLoading && <div className="modal__input_menu">
                                {cities.filter((item) => item.name.startsWith(city))?.length ? cities.filter((item) => item.name.startsWith(city)).map((city, index) => <p key={index} className="modal__input_city-item" onClick={() => setCity(city.name)}>{city.name}</p>) : <p className="modal__input_city-item">Города не найдены</p>}
                            </div>}
                        </div>
                        <button className="modal__button" type="submit">Далее</button>
                        <div className="modal__progress">
                            <span />
                        </div>
                    </>}
                    {step === 2 && <>
                        <div className="modal__back" onClick={() => {
                            setCity('')
                            setName('')
                            setStep(1)
                        }}>
                            <span className="back icon"></span>
                        </div>
                        <p className="modal__text">Чтобы получить подробные финансовые расчеты, укажите email</p>
                        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Ваш Email" className="modal__input modal__input_step2"/>
                        <button className="modal__button" type="submit">Далее</button>
                        <div className="modal__progress">
                            <span />
                            <span />
                        </div>
                    </>}
                    {step === 3 && <>
                        <div className="modal__back" onClick={() => {
                            setCity('')
                            setName('')
                            setEmail('')
                            setStep(2)
                        }}>
                            <span className="back icon"></span>
                        </div>
                        <p className="modal__text">Расскажите, почему мы должны обратить внимание на вашу кандидатуру</p>
                        <div className="modal__question">
                            <p className="modal__question-text">Есть ли у вас опыт руководства людьми?</p>
                            <RadioGroup
                                type="modal"
                                defaultValue="0"
                                onChange={value => setIsExpPeoples(value === '1')} />
                        </div>
                        <div className="modal__question">
                            <p className="modal__question-text">Есть ли у вас опыт ведения бизнеса?</p>
                            <RadioGroup
                                type="modal"
                                defaultValue="0"
                                onChange={value => setIsExpBusiness(value === '1')} />
                        </div>
                        <div className="modal__question">
                            <p className="modal__question-text">Почему вы хотите стать партнером Skilla?</p>
                            <textarea required value={why} onChange={e => setWhy(e.target.value)} type="text" placeholder="Ваш ответ" className="modal__input modal__input_step3" />
                        </div>
                        <button className="modal__button modal__button_step3" type="submit">Отправить</button>
                        <div className="modal__progress">
                            <span />
                            <span />
                            <span />
                        </div>
                    </>}
                    {step === 4 && <>
                        <div className="modal__back"onClick={() => {
                            setCity('')
                            setName('')
                            setEmail('')
                            setIsExpPeoples('0')
                            setIsExpBusiness('0')
                            setStep(3)
                        }}>
                            <span className="back icon"></span>
                        </div>
                        <p className="modal__text">Пока мы изучаем вашу анкету, посмотрите свежие выступления с мероприятия Skilla Бизнес-Герои.</p>
                        <div className="modal-video">
                            <div className="modal-video__video">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/9nvwp7SHID4?controls=0"
                                        title="YouTube video player" frameBorder="0" allowFullScreen></iframe>

                            </div>
                            <div className="modal-video__content">
                                <h6 className="modal-video__title">Система на 5+</h6>
                                <p className="modal-video__description">Алексей Солдатенко</p>
                            </div>
                        </div>
                        <button className="modal__button modal__button_step4">Посмотреть</button>
                        <div className="modal__progress">
                            <span />
                            <span />
                            <span />
                            <span />
                        </div>
                    </>}
                </div>
            </form>}
            {width > 1399 &&
            <div onClick={(e) => e.target.classList.value.includes('slider-container') && setIsSliderActive(false)} className={isSliderActive ? "slider-container slider_active" : "slider-container"}>
                <Slider {...sliderSettings}>
                    <div>
                        <div className="slider__image">
                            <img src="/static/business/slider/01.png" alt="изображение"/>
                        </div>
                    </div>
                    <div>
                        <div className="slider__image">
                            <img src="/static/business/slider/02.png" alt="изображение"/>
                        </div>
                    </div>
                    <div>
                        <div className="slider__image">
                            <img src="/static/business/slider/03.png" alt="изображение"/>
                        </div>
                    </div>
                    <div>
                        <div className="slider__image">
                            <img src="/static/business/slider/04.png" alt="изображение"/>
                        </div>
                    </div>
                    <div>
                        <div className="slider__image">
                            <img src="/static/business/slider/05.png" alt="изображение"/>
                        </div>
                    </div>
                    <div>
                        <div className="slider__image">
                            <img src="/static/business/slider/06.png" alt="изображение"/>
                        </div>
                    </div>
                    <div>
                        <div className="slider__image">
                            <img src="/static/business/slider/07.png" alt="изображение"/>
                        </div>
                    </div>
                    <div>
                        <div className="slider__image">
                            <img src="/static/business/slider/08.png" alt="изображение"/>
                        </div>
                    </div>
                    <div>
                        <div className="slider__image">
                            <img src="/static/business/slider/09.png" alt="изображение"/>
                        </div>
                    </div>
                    <div>
                        <div className="slider__image">
                            <img src="/static/business/slider/10.png" alt="изображение"/>
                        </div>
                    </div>
                    <div>
                        <div className="slider__image">
                            <img src="/static/business/slider/11.png" alt="изображение"/>
                        </div>
                    </div>
                    <div>
                        <div className="slider__image">
                            <img src="/static/business/slider/12.png" alt="изображение"/>>
                        </div>
                    </div>
                    <div>
                        <div className="slider__image">
                            <img src="/static/business/slider/13.png" alt="изображение"/>
                        </div>
                    </div>
                    <div>
                        <div className="slider__image">
                            <img src="/static/business/slider/14.png" alt="изображение"/>
                        </div>
                    </div>
                </Slider>
            </div>}
            {width <= 1399 &&
                <div onClick={(e) => e.target.classList.value.includes('slider-container') && setIsSliderActive(false)} className={isSliderActive ? "slider-container slider_active" : "slider-container"}>
                    <div>
                        <div className="slider__image">
                            <img src={sliderImageLink} alt="изображение"/>
                        </div>
                    </div>
                </div>}
            <Navbar page="business" activePage="main" />
            <header className="header">
                <div className="container">
                    <div className="header__content">
                        <h1 className="header__title">Зарабатывайте <span />
                            на самозанятых до 10 млн/год <span />
                            в своем офисе</h1>
                        <p className="header__description">При поддержке национального проекта России. Присоединиться может каждый.</p>
                        <form onSubmit={submitForm} method="GET" className="header-form">
                            <div className="header-form__flex">
                                <input value={phone} onChange={e => setPhone(e.target.value)} type="text" required placeholder="+7 (___) ___-__-__" pattern='\+?[0-9\s\-\(\)]+' className="header-form__input" style={{color: '#fff'}}/>
                                <button type="submit" className="header-form__button">
                                    Узнать больше
                                    <span className="arrow-right-business icon"></span>
                                </button>
                            </div>
                            <RadioGroup
                                defaultValue="telegram"
                                onChange={value => setRadio(value)} />
                        </form>
                        <div className="header__links">
                            <a href="#" className="header__link">
                                <img src="/static/business/franchise/header/links/01.png" alt="ФНС"/>
                            </a>

                            <a href="#" className="header__link">
                                <img src="/static/business/franchise/header/links/02.png" alt="Минкомсвязь России"/>
                            </a>
                            <a href="#" className="header__link">
                                <img src="/static/business/franchise/header/links/03.png" alt="Роспатент"/>
                            </a>

                        </div>
                        {width > 1399 && <p className="header__info">Отправляя форму, вы соглашаетесь с <a href="#">условиями</a></p>}
                    </div>
                </div>
                {width <= 1399 && <>
                    <img src="/static/business/header/illustration.png" className="header__image" alt="иллюстрация" />
                    <div className="container">
                        <p className="header__info">Отправляя форму, вы соглашаетесь с <a href="#">условиями</a></p>
                    </div>
                </>}
            </header>
            <section className="triggers">
                <div className="container_smail">
                    <div className="triggers__content">
                        <h2 className="triggers__title">Принцип Uber — соединяйте <span>заказчиков и исполнителей</span> в мобильном приложении</h2>
                        <p className="triggers__description">Получайте 50% комиссию с каждого заказа 24 часа в сутки, даже, когда спите.</p>
                        <button className="triggers__button">
                            Получить подробности
                            <span className="arrow-right-business icon"></span>
                        </button>
                    </div>
                    <img src="/static/business/triggers/illustration.png" alt="иллюстрация" className="triggers__image"/>
                </div>
            </section>
            <section className="app">
                <div className="container">
                    <img src="/static/business/app/illustration.png" alt="иллюстрация" className="app__image" />
                    <div className="app__content">
                        <h2 className="app__title"><span>75 000+</span> исполнителей установили приложение Skilla Работа</h2>
                        <p className="app__description">Исполнители выполняют заказы и получают оплату через приложение, а вы — комиссию</p>
                        <div className="app__links">
                            <a href="#" className="app__link">
                                <img src="/static/business/app/links/01.png" alt="Google Play" className="app__link"/>
                            </a>
                            <a href="#" className="app__link">
                                <img src="/static/business/app/links/02.png" alt="App Store" className="app__link"/>
                            </a>
                            <a href="#" className="app__link">
                                <img src="/static/business/app/links/03.png" alt="AppGallery" className="app__link"/>
                            </a>
                            <a href="#" className="app__link">
                                <img src="/static/business/app/links/04.png" alt="NASHSTORE" className="app__link"/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Clients />
            <section className="peoples">
                <div className="container_smail">
                    <h2 className="peoples__title">Повторите успех <span>250+ предпринимателей,</span> начавших бизнес с нуля</h2>

                    <div className="peoples__grid">
                        <div className="peoples-item">
                            <a href="#" className="peoples-item__icon">
                                <img src="/static/business/peoples/icons/01.png" alt="человек" />
                            </a>

                            <h4 className="peoples-item__title">Более 6 лет работаю с гипермаркетами</h4>
                            <button className="peoples-item__button">
                                Подробнее
                                <span className="arrow-right-top green icon"></span>
                            </button>
                        </div>
                        <div className="peoples-item">
                            <a href="#" className="peoples-item__icon">
                                <img src="/static/business/peoples/icons/01.png" alt="человек" />
                            </a>

                            <h4 className="peoples-item__title">Более 6 лет работаю с гипермаркетами</h4>
                            <button className="peoples-item__button">
                                Подробнее
                                <span className="arrow-right-top green icon"></span>
                            </button>
                        </div>
                        <div className="peoples-item">
                            <a href="#" className="peoples-item__icon">
                                <img src="/static/business/peoples/icons/01.png" alt="человек" />
                            </a>

                            <h4 className="peoples-item__title">Более 6 лет работаю с гипермаркетами</h4>
                            <button className="peoples-item__button">
                                Подробнее
                                <span className="arrow-right-top green icon"></span>
                            </button>
                        </div>
                        <div className="peoples-item">
                            <a href="#" className="peoples-item__icon">
                                <img src="/static/business/peoples/icons/01.png" alt="человек" />
                            </a>

                            <h4 className="peoples-item__title">Более 6 лет работаю с гипермаркетами</h4>
                            <button className="peoples-item__button">
                                Подробнее
                                <span className="arrow-right-top green icon"></span>
                            </button>
                        </div>
                        <div className="peoples-item">
                            <a href="#" className="peoples-item__icon">
                                <img src="/static/business/peoples/icons/01.png" alt="человек" />
                            </a>

                            <h4 className="peoples-item__title">Более 6 лет работаю с гипермаркетами</h4>
                            <button className="peoples-item__button">
                                Подробнее
                                <span className="arrow-right-top green icon"></span>
                            </button>
                        </div>
                        <div className="peoples-item">
                            <a href="#" className="peoples-item__icon">
                                <img src="/static/business/peoples/icons/01.png" alt="человек" />
                            </a>

                            <h4 className="peoples-item__title">Более 6 лет работаю с гипермаркетами</h4>
                            <button className="peoples-item__button">
                                Подробнее
                                <span className="arrow-right-top green icon"></span>
                            </button>
                        </div>
                        <div className="peoples-item">
                            <a href="#" className="peoples-item__icon">
                                <img src="/static/business/peoples/icons/01.png" alt="человек" />
                            </a>

                            <h4 className="peoples-item__title">Более 6 лет работаю с гипермаркетами</h4>
                            <button className="peoples-item__button">
                                Подробнее
                                <span className="arrow-right-top green icon"></span>
                            </button>
                        </div>
                        <div className="peoples-item">
                            <a href="#" className="peoples-item__icon">
                                <img src="/static/business/peoples/icons/01.png" alt="человек" />
                            </a>

                            <h4 className="peoples-item__title">Более 6 лет работаю с гипермаркетами</h4>
                            <button className="peoples-item__button">
                                Подробнее
                                <span className="arrow-right-top green icon"></span>
                            </button>
                        </div>
                        <div className="peoples-item">
                            <a href="#" className="peoples-item__icon">
                                <img src="/static/business/peoples/icons/01.png" alt="человек" />
                            </a>

                            <h4 className="peoples-item__title">Более 6 лет работаю с гипермаркетами</h4>
                            <button className="peoples-item__button">
                                Подробнее
                                <span className="arrow-right-top green icon"></span>
                            </button>
                        </div>
                        <div className="peoples-item peoples-item_more">
                            <button className="peoples-item__button">
                                Все истории
                                <span className="arrow-right-top green icon"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <Chart page="business" />
            <section className="money">
                <div className="container_smail">
                    <h2 className="money__title">Заработайте <span>1 000 000 ₽</span> за 6 месяцев</h2>
                    <p className="money__description">Ежемесячная комиссия партнера зависит от размера города. Через 2-3 года можно добиться пассивного дохода.</p>
                </div>
                <div className="container">
                    {width > 1399 && <div className="money__grid">
                        <div className="money-item">
                            <img src="/static/business/money/icons/01.png" alt="иконка" className="money-item__icon"/>
                            <p className="money-item__description">Средние города</p>
                            <span className="money-item__price">300 000 ₽</span>
                        </div>
                        <div className="money-item">
                            <img src="/static/business/money/icons/02.png" alt="иконка" className="money-item__icon"/>
                            <p className="money-item__description">Города-миллионники</p>
                            <span className="money-item__price">500 000 ₽</span>
                        </div>
                        <div className="money-item">
                            <img src="/static/business/money/icons/03.png" alt="иконка" className="money-item__icon money-item__icon_big"/>
                            <p className="money-item__description">Крупнейшие города</p>
                            <span className="money-item__price">1 500 000 ₽</span>
                        </div>
                    </div>}
                    {width <= 1399 && <Slider {...sliderMoneySettings}>
                        <div className="money-item">
                            <img src="/static/business/money/icons/01.png" alt="иконка" className="money-item__icon"/>
                            <p className="money-item__description">Средние города</p>
                            <span className="money-item__price">300 000 ₽</span>
                            <p className="money-item__cities">Барнаул, Иркутск, Ульяновск, Хабаровск, Владивосток, Ярославль, Махачкала, Томск, Оренбург, Кемерово, Тула, Новокузнецк, Рязань, Астрахань, Набережные, Пенза, Гомель, Липецк, Киров, Чебоксары, Калининград, Курск, Улан-Удэ и другие.</p>
                        </div>
                        <div className="money-item">
                            <img src="/static/business/money/icons/02.png" alt="иконка" className="money-item__icon"/>
                            <p className="money-item__description">Города-миллионники</p>
                            <span className="money-item__price">500 000 ₽</span>
                            <p className="money-item__cities">Барнаул, Иркутск, Ульяновск, Хабаровск, Владивосток, Ярославль, Махачкала, Томск, Оренбург, Кемерово, Тула, Новокузнецк, Рязань, Астрахань, Набережные, Пенза, Гомель, Липецк, Киров, Чебоксары, Калининград, Курск, Улан-Удэ и другие.</p>
                        </div>
                        <div className="money-item">
                            <img src="/static/business/money/icons/03.png" alt="иконка" className="money-item__icon money-item__icon_big"/>
                            <p className="money-item__description">Крупнейшие города</p>
                            <span className="money-item__price">1 500 000 ₽</span>
                            <p className="money-item__cities">Барнаул, Иркутск, Ульяновск, Хабаровск, Владивосток, Ярославль, Махачкала, Томск, Оренбург, Кемерово, Тула, Новокузнецк, Рязань, Астрахань, Набережные, Пенза, Гомель, Липецк, Киров, Чебоксары, Калининград, Курск, Улан-Удэ и другие.</p>
                        </div>
                    </Slider>}
                </div>
            </section>
            <section className="calculator">
                <div className="container">
                    <h2 className="calculator__title">Рассчитайте прибыль <span>своего офиса</span> Skilla Работа</h2>
                    <p className="calculator__description">Доход зависит от вложений и выполнения регламентов</p>

                    <Calculator submitForm={submitForm} phone={phone} setPhone={setPhone} setRadio={setRadio} />
                </div>
            </section>
            <section className="heroes">
                <header className="heroes-header">
                    <div className="container container_heroes-header">
                        <div className="container_smail">
                        <div className="heroes-header__content">
                            <h2 className="heroes__title">Учитесь бесплатно <span>на закрытых мероприятиях</span> у практиков-миллионеров </h2>
                            <p className="heroes__description">Skilla организовывает бизнес-мероприятия для партнеров-предпринимателей, приглашая на них компании из списка Forbes: Авито, Яндекс, Тинькофф</p>

                            <div className="heroes__companies">
                                <a href="#" className="heroes__company">
                                    <img src="/static/business/heroes/companies/01.png" alt="Яндекс"/>
                                </a>
                                <a href="#" className="heroes__company">
                                    <img src="/static/business/heroes/companies/02.png" alt="Avito"/>
                                </a>
                                <a href="#" className="heroes__company">
                                    <img src="/static/business/heroes/companies/03.png" alt="Google"/>
                                </a>
                                <a href="#" className="heroes__company">
                                    <img src="/static/business/heroes/companies/04.png" alt="Tinkoff"/>
                                </a>
                            </div>
                        </div>

                        <img src="/static/business/heroes/image.png" alt="БИЗНЕС ГЕРОИ" className="heroes-header__image"/>
                    </div>
                    </div>
                </header>
                <footer className="heroes-videos">
                    <div className="container">
                        <div className="heroes-videos__grid">
                            <div className="heroes-video">
                                <div className="heroes-video__video">
                                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/9nvwp7SHID4?controls=0"
                                            title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                </div>
                                <h6 className="heroes-video__title">Как масштабировать свой бизнес</h6>
                                <p className="heroes-video__description">Кирилл Упоров, основатель Skilla, «Бизнес-Герои» 2021</p>
                            </div>
                            <div className="heroes-video">
                                <div className="heroes-video__video">
                                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/9nvwp7SHID4?controls=0"
                                            title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                </div>
                                <h6 className="heroes-video__title">Как масштабировать свой бизнес</h6>
                                <p className="heroes-video__description">Кирилл Упоров, основатель Skilla, «Бизнес-Герои» 2021</p>
                            </div>
                            <div className="heroes-video">
                                <div className="heroes-video__video">
                                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/9nvwp7SHID4?controls=0"
                                            title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                </div>
                                <h6 className="heroes-video__title">Как масштабировать свой бизнес</h6>
                                <p className="heroes-video__description">Кирилл Упоров, основатель Skilla, «Бизнес-Герои» 2021</p>
                            </div>
                        </div>
                        <button className="heroes-videos__button">
                            Все видео с мероприятий
                            <span className="arrow-right-top-big icon"></span>
                        </button>
                    </div>
                </footer>
            </section>
            {width > 1399 && <section className="grid">
                <div className="grid__image grid__image_grey grid__image_tablet" onClick={openSlider}>
                    <img src="/static/business/grid/01.png" alt="изображение"/>
                </div>
                <div className="grid__image grid__image_big grid__text">
                    <h2 className="grid__title">Пройдите <span>2-х дневное</span> обязательное <span>обучение</span> в Санкт-Петербурге</h2>
                    <p className="grid__description">7 специалистов управляющей компании обучают по специальной программе открытию бизнеса</p>
                </div>
                <div className="grid__image grid__image_desktop" onClick={openSlider}>
                    <img src="/static/business/grid/02.png" alt="изображение"/>
                </div>
                <div className="grid__image" onClick={openSlider}>
                    <img src="/static/business/grid/03.png" alt="изображение"/>
                </div>
                <div className="grid__image grid__image_grey" onClick={openSlider}>
                    <img src="/static/business/grid/04.png" alt="изображение"/>
                </div>
                <div className="grid__image grid__image_grey grid__image_tablet" onClick={openSlider}>
                    <img src="/static/business/grid/05.png" alt="изображение"/>
                </div>
                <div className="grid__image grid__image_big" onClick={openSlider}>
                    <img src="/static/business/grid/06.png" alt="изображение"/>
                </div>
                <div className="grid__image grid__image_desktop" onClick={openSlider}>
                    <img src="/static/business/grid/07.png" alt="изображение"/>
                </div>
                <div className="grid-link" onClick={() => window.location = 'https://skilla.ru'}>
                    <div className="grid-link__text">
                        <span>Посмотрите, как проходит обучение партнеров</span>
                        <span className="arrow-business-link icon"></span>
                    </div>
                </div>
                <div className="grid__image grid__image_grey" onClick={openSlider}>
                    <img src="/static/business/grid/08.png" alt="изображение"/>
                </div>
            </section>}
            {width <= 1399 && <section className="grid">
                <div className="container">
                    <h2 className="grid__title">Пройдите <span>2-х дневное</span> обязательное <span>обучение</span> в Санкт-Петербурге</h2>
                    <p className="grid__description">7 специалистов управляющей компании обучают по специальной программе открытию бизнеса</p>
                </div>
                <Slider {...sliderGridSettings}>
                    <div>
                        <div className="grid__image grid__image_grey grid__image_tablet">
                            <img src="/static/business/grid/01.png" alt="изображение"/>
                        </div>
                    </div>
                    <div>
                        <div className="grid__image grid__image_grey grid__image_tablet">
                            <img src="/static/business/grid/02.png" alt="изображение"/>
                        </div>
                    </div>
                    <div>
                        <div className="grid__image grid__image_grey grid__image_tablet">
                            <img src="/static/business/grid/03.png" alt="изображение"/>
                        </div>
                    </div>
                    <div>
                        <div className="grid__image grid__image_grey grid__image_tablet">
                            <img src="/static/business/grid/04.png" alt="изображение"/>
                        </div>
                    </div>
                    <div>
                        <div className="grid__image grid__image_grey grid__image_tablet">
                            <img src="/static/business/grid/05.png" alt="изображение"/>
                        </div>
                    </div>
                    <div>
                        <div className="grid__image grid__image_grey grid__image_tablet">
                            <img src="/static/business/grid/06.png" alt="изображение"/>
                        </div>
                    </div>
                    <div>
                        <div className="grid__image grid__image_grey grid__image_tablet">
                            <img src="/static/business/grid/07.png" alt="изображение"/>
                        </div>
                    </div>
                    <div>
                        <div className="grid__image grid__image_grey grid__image_tablet">
                            <img src="/static/business/grid/08.png" alt="изображение"/>
                        </div>
                    </div>
                </Slider>
                <div className="container">
                    <div className="videos-video videos-video_more" onClick={() => window.location = 'https://skilla.ru'}>
                        <h3 className="videos-video__title">Посмотрите, как проходит обучение партнеров</h3>
                        <span className="videos-video__icon arrow-right-top-big icon"></span>
                    </div>
                </div>
            </section>}
            <section className="friends">
                <div className="container">
                    <img src="/static/business/friends/illustration.png" alt="иллюстрация" className="friends__illustration"/>
                    <div className="friends__content">
                        <h2 className="friends__title">Поприветствуйте <span>друзей-единомышленников</span>, которых вам так не хватало</h2>
                        <p className="friends__description">В Skilla вы познакомитесь с предпринимателями. Новые знакомства и дружба, поездки в другие страны и совместный отдых изменят ваше мышление и откроют новые горизонты.</p>

                        <div className="friends__grid">
                            <img src="/static/business/friends/images/01.png" alt="изображение" className="friends__image"/>
                            <img src="/static/business/friends/images/02.png" alt="изображение" className="friends__image"/>
                            <img src="/static/business/friends/images/03.png" alt="изображение" className="friends__image"/>
                            <img src="/static/business/friends/images/04.png" alt="изображение" className="friends__image"/>
                            <img src="/static/business/friends/images/05.png" alt="изображение" className="friends__image"/>
                            <img src="/static/business/friends/images/06.png" alt="изображение" className="friends__image"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="videos">
                <div className="container_smail">
                    <h2 className="videos__title">Посмотрите <span>35 видео-отзывов</span> о бизнесе со Skilla</h2>
                    <p className="videos__description">Убедитесь сами в том, что другие достигли успеха. Их жизни изменились, благодаря сотрудничеству со Skilla.</p>
                </div>
                <div className="container">
                    <div className="videos__grid">
                        <div className="videos-video">
                            <div className="videos-video__video">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/9nvwp7SHID4?controls=0"
                                        title="YouTube video player" frameBorder="0" allowFullScreen></iframe>

                            </div>
                            <div className="videos-video__content">
                                <h6 className="videos-video__title">Система на 5+</h6>
                                <p className="videos-video__description">Алексей Солдатенко</p>
                            </div>
                        </div>
                        <div className="videos-video">
                            <div className="videos-video__video">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/9nvwp7SHID4?controls=0"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>

                            </div>
                            <div className="videos-video__content">
                                <h6 className="videos-video__title">Система на 5+</h6>
                                <p className="videos-video__description">Алексей Солдатенко</p>
                            </div>
                        </div>
                        <div className="videos-video">
                            <div className="videos-video__video">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/9nvwp7SHID4?controls=0"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>

                            </div>
                            <div className="videos-video__content">
                                <h6 className="videos-video__title">Система на 5+</h6>
                                <p className="videos-video__description">Алексей Солдатенко</p>
                            </div>
                        </div>
                        <div className="videos-video">
                            <div className="videos-video__video">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/9nvwp7SHID4?controls=0"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>

                            </div>
                            <div className="videos-video__content">
                                <h6 className="videos-video__title">Система на 5+</h6>
                                <p className="videos-video__description">Алексей Солдатенко</p>
                            </div>
                        </div>
                        <div className="videos-video">
                            <div className="videos-video__video">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/9nvwp7SHID4?controls=0"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>

                            </div>
                            <div className="videos-video__content">
                                <h6 className="videos-video__title">Система на 5+</h6>
                                <p className="videos-video__description">Алексей Солдатенко</p>
                            </div>
                        </div>
                        <div className="videos-video">
                            <div className="videos-video__video">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/9nvwp7SHID4?controls=0"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>

                            </div>
                            <div className="videos-video__content">
                                <h6 className="videos-video__title">Система на 5+</h6>
                                <p className="videos-video__description">Алексей Солдатенко</p>
                            </div>
                        </div>
                        <div className="videos-video">
                            <div className="videos-video__video">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/9nvwp7SHID4?controls=0"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>

                            </div>
                            <div className="videos-video__content">
                                <h6 className="videos-video__title">Система на 5+</h6>
                                <p className="videos-video__description">Алексей Солдатенко</p>
                            </div>
                        </div>
                        <div className="videos-video videos-video_more" onClick={() => window.location = 'https://www.youtube.com/playlist?list=PLygJZzAR_Gd1ZUZf_39x5IlUmD8KDgx7H'}>
                            <h3 className="videos-video__title">Cмотрите все отзывы партнеров</h3>
                            <span className="videos-video__icon arrow-right-top-big icon"></span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="model">
                <div className="container">
                    <h2 className="model__title">Взгляните, как работает
                        бизнес-модель Skilla</h2>
                    <img src={width > 1399 ? "/static/business/model/illustration.png" : "/static/business/model/illustration_mobile.png"} alt="иллюстрация" className="model__image"/>
                </div>
            </section>
            <section className="office">
                {width > 1399 && <div className="container">
                    <div className="office__content">
                        <h2 className="office__title">Привлекайте исполнителей в <span>свой партнерский офис</span> Skilla Работа</h2>
                        <p className="office__description">Бренду доверяют исполнители и готовы выполнять заказы</p>
                        <button className="office__button">
                            Требования брендирования
                            <span className="download-big icon"></span>
                        </button>
                        <div className="office__grid">
                            <div className="office__image" onClick={openSlider}>
                                <img src="/static/business/office/images/01.png" alt="изображение"/>
                            </div>
                            <div className="office__image" onClick={openSlider}>
                                <img src="/static/business/office/images/02.png" alt="изображение"/>
                            </div>
                            <div className="office__image" onClick={openSlider}>
                                <img src="/static/business/office/images/03.png" alt="изображение"/>
                            </div>
                            <div className="office__image" onClick={openSlider}>
                                <img src="/static/business/office/images/04.png" alt="изображение"/>
                            </div>
                            <div className="office__image" onClick={openSlider}>
                                <img src="/static/business/office/images/05.png" alt="изображение"/>
                            </div>
                            <div className="office__image" onClick={openSlider}>
                                <img src="/static/business/office/images/06.png" alt="изображение"/>
                            </div>
                        </div>
                    </div>
                    <img src="/static/business/office/illustration.png" alt="илллюстрация" className="office__illustration"/>
                </div>}
                {width <= 1399 && <div className="container">
                        <div className="office__content">
                            <h2 className="office__title">Привлекайте исполнителей в <span>свой партнерский офис</span> Skilla Работа</h2>
                            <p className="office__description">Бренду доверяют исполнители и готовы выполнять заказы</p>
                            <img src="/static/business/office/illustration_mobile.png" alt="илллюстрация" className="office__illustration"/>
                            <div className="office__grid">
                                <div className="office__image" index={1} onClick={openSlider}>
                                    <img src="/static/business/office/images/01.png" alt="изображение"/>
                                </div>
                                <div className="office__image" index={2} onClick={openSlider}>
                                    <img src="/static/business/office/images/02.png" alt="изображение"/>
                                </div>
                                <div className="office__image" index={3} onClick={openSlider}>
                                    <img src="/static/business/office/images/03.png" alt="изображение"/>
                                </div>
                                <div className="office__image" index={4} onClick={openSlider}>
                                    <img src="/static/business/office/images/04.png" alt="изображение"/>
                                </div>
                                <div className="office__image" index={5}  onClick={openSlider}>
                                    <img src="/static/business/office/images/05.png" alt="изображение"/>
                                </div>
                                <div className="office__image" index={6} onClick={openSlider}>
                                    <img src="/static/business/office/images/06.png" alt="изображение"/>
                                </div>
                            </div>
                            <button className="office__button">
                                Требования брендирования
                                <span className="download-big icon"></span>
                            </button>
                        </div>
                    </div>}
            </section>
            {width > 1399 && <section className="orders">
                <div className="container">
                    <header className="orders__header">
                        <img src="/static/business/franchise/orders/illustartion.png" alt="иллюстрация" className="orders__illustration"/>

                        <div className="orders__content">
                            <h2 className="orders__title">Откройте свой бизнес <span />в рассрочку <span className="orders__title_word">от 32 500 руб/мес</span></h2>
                            <p className="orders__description">Бизнес Skilla аккредитован 15+ банками. Партнёрам одобрена беспроцентная рассрочка.</p>

                            <div className="orders-list">
                                <div className="orders-list-item">
                                    <div className="orders-list-item__icon">
                                        <img src="/static/business/franchise/orders/icons/01.png" alt="иконка"/>
                                    </div>
                                    <div className="orders-list-item__content">
                                        <h3 className="orders-list-item__title">Оставьте заявку</h3>
                                        <p className="orders-list-item__text">Эксперт по запуску бизнеса свяжется и расскажет о бизнесе</p>
                                    </div>
                                </div>

                                <div className="orders-list-item">
                                    <div className="orders-list-item__icon">
                                        <img src="/static/business/franchise/orders/icons/02.png" alt="иконка"/>
                                    </div>
                                    <div className="orders-list-item__content">
                                        <h3 className="orders-list-item__title">Пройдите скоринг и оценку</h3>
                                        <p className="orders-list-item__text">Мы проверяем каждого партнера на недобросовестность, судимости, банкротства и прочее</p>
                                    </div>
                                </div>

                                <div className="orders-list-item">
                                    <div className="orders-list-item__icon">
                                        <img src="/static/business/franchise/orders/icons/03.png" alt="иконка"/>
                                    </div>
                                    <div className="orders-list-item__content">
                                        <h3 className="orders-list-item__title">Оплатите взнос или получите рассрочку</h3>
                                        <p className="orders-list-item__text">Рассрочка — это договор с банком на 12 месяцев без переплаты процентов</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="container_smail">
                        <footer className="orders__clients">
                            <a href="#" className="orders__client">
                                <img src="/static/business/franchise/orders/clients/01.png" alt="ВТБ" />
                            </a>

                            <a href="#" className="orders__client">
                                <img src="/static/business/franchise/orders/clients/02.png" alt="ГазпромБанк" />
                            </a>

                            <a href="#" className="orders__client">
                                <img src="/static/business/franchise/orders/clients/03.png" alt="ВТБ" />
                            </a>

                            <a href="#" className="orders__client">
                                <img src="/static/business/franchise/orders/clients/04.png" alt="ВТБ" />
                            </a>

                            <a href="#" className="orders__client">
                                <img src="/static/business/franchise/orders/clients/05.png" alt="ВТБ" />
                            </a>

                            <a href="#" className="orders__client">
                                <img src="/static/business/franchise/orders/clients/06.png" alt="ВТБ" />
                            </a>
                        </footer>
                    </div>
                </div>
            </section>}
            {width <= 1399 && <section className="orders">
                <div className="container">
                    <header className="orders__header">

                        <div className="orders__content">
                            <h2 className="orders__title">Откройте свой бизнес <span />в рассрочку <span className="orders__title_word">от 32 500 руб/мес</span></h2>
                            <p className="orders__description">Бизнес Skilla аккредитован 15+ банками. Партнёрам одобрена беспроцентная рассрочка.</p>

                            <div className="orders-list">
                                <div className="orders-list-item">
                                    <div className="orders-list-item__content">
                                        <div className="orders-list-item__icon">
                                            <img src="/static/business/franchise/orders/icons/01.png" alt="иконка"/>
                                        </div>
                                        <h3 className="orders-list-item__title">Оставьте заявку</h3>
                                    </div>
                                    <p className="orders-list-item__text">Эксперт по запуску бизнеса свяжется и расскажет о бизнесе</p>
                                </div>

                                <div className="orders-list-item">
                                    <div className="orders-list-item__content">
                                        <div className="orders-list-item__icon">
                                            <img src="/static/business/franchise/orders/icons/02.png" alt="иконка"/>
                                        </div>
                                        <h3 className="orders-list-item__title">Пройдите скоринг и оценку</h3>
                                    </div>
                                    <p className="orders-list-item__text">Мы проверяем каждого партнера на недобросовестность, судимости, банкротства и прочее</p>
                                </div>

                                <div className="orders-list-item">
                                    <div className="orders-list-item__content">
                                        <div className="orders-list-item__icon">
                                            <img src="/static/business/franchise/orders/icons/03.png" alt="иконка"/>
                                        </div>
                                        <h3 className="orders-list-item__title">Оплатите взнос или получите рассрочку</h3>
                                    </div>
                                    <p className="orders-list-item__text">Рассрочка — это договор с банком на 12 месяцев без переплаты процентов</p>
                                </div>
                            </div>

                            <footer className="orders__clients">
                                <a href="#" className="orders__client">
                                    <img src="/static/business/franchise/orders/clients/01.png" alt="ВТБ" />
                                </a>

                                <a href="#" className="orders__client">
                                    <img src="/static/business/franchise/orders/clients/02.png" alt="ГазпромБанк" />
                                </a>

                                <a href="#" className="orders__client">
                                    <img src="/static/business/franchise/orders/clients/03.png" alt="ВТБ" />
                                </a>

                                <a href="#" className="orders__client">
                                    <img src="/static/business/franchise/orders/clients/04.png" alt="ВТБ" />
                                </a>

                                <a href="#" className="orders__client">
                                    <img src="/static/business/franchise/orders/clients/05.png" alt="ВТБ" />
                                </a>

                                <a href="#" className="orders__client">
                                    <img src="/static/business/franchise/orders/clients/06.png" alt="ВТБ" />
                                </a>
                            </footer>

                            <img src="/static/business/franchise/orders/illustartion.png" alt="иллюстрация" className="orders__illustration"/>
                        </div>
                    </header>
                </div>
            </section>}
            <div className="ribbons">
                <img src="/static/business/orders/ribbon-bottom.png" alt="ленты" className="ribbons__image"/>
            </div>
            <Footer submitForm={submitForm} phone={phone} setPhone={setPhone} page="business" type="main" />
        </StyledBusiness>
    )
}

const StyledBusiness = styled.div`
    background-color: #000729;
  
  .calculator {
    margin: 120px 0 105px 0;
    color: #fff;
  }

  .calculator__title {
    font-size: 46px;
    line-height: 1.2em;
    font-weight: 800;
    margin-bottom: 24px;
    max-width: 690px;

    & span {
      color: rgba(0, 255, 136, 1);
    }
  }

  .calculator__description {
    max-width: 690px;
    font-size: 22px;
    line-height: 1.3em;
    color: #E3E4E8;
  }
  
  .modal--- {
    position: fixed;
    z-index: 11;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 7, 41, 0.4);
  }
  
  .modal__content {
    width: 688px;
    min-height: 516px;
    background-color: #303550;
    color: #fff;
    position: relative;
    text-align: center;
  }
  
  .modal__cross {
    position: absolute;
    right: 24px;
    top: 24px;
  }
  
  .modal__button {
    cursor: pointer;
    padding: 0 50px;
    background-color: #00FF88;
    color: #000729;
    border: 0;
    border-radius: 4px;
    font-size: 18px;
    line-height: 48px;
    font-weight: 500;
    font-family: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: auto;
    transition: background-color .3s ease;
    
    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 24px;
      margin-left: 20px;
      background: url("data:image/svg+xml;charset=UTF-8,%3csvg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.5 4L11.09 5.41L16.67 11H4.5V13H16.67L11.09 18.59L12.5 20L20.5 12L12.5 4Z' fill='%23000729'/%3e%3c/svg%3e ") no-repeat center top / cover;
    }
    
    &:hover {
      background-color: #00CC6E;
    }
  }
  
  .modal__title {
    font-size: 36px;
    line-height: 1.2em;
    font-weight: 800;
    max-width: 450px;
    margin: auto;
    margin-top: 64px;
    margin-bottom: 16px;
  }
  
  .modal__text {  
    font-size: 18px;
    line-height: 1.3em;
    color: #E3E4E8;
    max-width: 450px;
    margin: auto;
  }
  
  .modal__input {
    width: 300px;
    background-color: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    padding: 10.5px 13px;
    font-family: inherit;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.5em;
    color: #fff;
    
    &::placeholder {
      font-family: inherit;
      color: #ABADBA;
    }
  }
  
  .modal__input_step1 {
    margin-top: 56px;
    margin-bottom: 15px;
  }
  
  .modal__input_step2 {
    margin: 55px 0 135px 0;
  }

  .modal__input_menu {
    display: none;
    height: 200px;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
    position: absolute;
    bottom: -200px;
  }

  .modal__input_city_step1 {
    margin-bottom: 70px !important;
  }
  
  .modal__input_city {
    margin: auto;
    position: relative;
    width: 300px;
    
    &:focus-within .modal__input_menu {
      display: block;
    }
    
    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 24px;
      position: absolute;
      right: 12px;
      top: 0;
      bottom: 0;
      margin: auto;
      background: url("data:image/svg+xml;charset=UTF-8,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M6.5 9L12 15L17.5 9H6.5Z' fill='%23ABADBA'/%3e%3c/svg%3e ") no-repeat center top / cover;
    }
  }
  
  .modal__input_city-item {
    padding: 10.5px 13px;
    background-color: #262A40;
    font-size: 18px;
    color: rgba(171, 173, 186, 1);
    font-weight: 500;
    text-align: left;
    transition: background-color .3s ease;
    
    &:hover {
      background-color: #44485C;
    }
  }
  
  .modal__question {
    max-width: 450px;
    margin: auto;
    margin-top: 45px;
    
    & .header-form__checkbox::before {
      background-color: #303550;
    }
    
    & .header-form__checkbox:checked::before {
      background-color: #303550;
    }
  }

  .modal__input_step3 {
    width: 300px;
    resize: none;
    height: 105px;
    margin-bottom: 55px;
  }

  .modal__button_step3::after {
    display: none;
  }
  
  .modal__question-text {
    font-size: 22px;
    line-height: 1.3em;
    margin-bottom: 17px;
    text-align: left;
  }
  
  .modal__progress {
    margin-top: 52px;
    display: flex;
    width: 100%;
    height: 6px;
    background-color: #ABADBA;
    
    & span {
      display: block;
      width: 25%;
      height: 6px;
      background-color: #00CC6E;
    }
  }
  
  .modal__back {
    position: absolute;
    left: 24px;
    top: 24px;
  }
  
  .modal-video {
    width: 450px;
    margin: 40px auto 55px auto;
  }
  
  .modal-video__content {
    text-align: left;
  }
  
  .modal-video__title {
    font-size: 18px;
    line-height: 20px;
    margin-bottom: 4px;
    font-weight: 700;
    margin-top: 20px;
  }
  
  .modal-video__description {
    font-size: 16px;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.7);
  }

  .tabs__content_flex {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 25px;
  }
  
  .modal-video__video {
    height: 255px;
  }
  
  @media screen and (max-width: 1399px) {
    .tabs__content_flex {
      grid-template-columns: 1fr;
    }
  }

  .slick-arrow {
    width: 48px;
    height: 48px;
    border-radius: 24px;
    font-size: 0;
    color: transparent;
    display: flex !important;
    justify-content: center;
    background-color: #000729;
    align-items: center;
    transition: background-color .3s ease;

    &:hover {
      background-color: #00CC6E;
    }
  }

  .slick-prev {
    left: -72px;

    &::before {
      content: url("/static/icons/arrow-left-slider.png");
    }

    &:hover::before {
      content: url("data:image/svg+xml;charset=UTF-8,%3csvg width='8' height='12' viewBox='0 0 8 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M6.49997 0L7.90997 1.41L3.32997 6L7.90997 10.59L6.49997 12L0.499973 6L6.49997 0Z' fill='white'/%3e%3c/svg%3e ");
    }
  }

  .slick-next {
    right: -72px;

    &::before {
      content: url("/static/icons/arrow-right-slider.png");
    }

    &:hover::before {
      content: url("data:image/svg+xml;charset=UTF-8,%3csvg width='8' height='12' viewBox='0 0 8 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M1.50009 0L0.0900879 1.41L4.67009 6L0.0900879 10.59L1.50009 12L7.50009 6L1.50009 0Z' fill='white'/%3e%3c/svg%3e ");
    }
  }
  
  .slider-container {
    position: fixed;
    z-index: 11;
    display: none;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 7, 41, 0.4);
  }
  
  .slider-container.slider_active {
    display: flex;
  }
  
  .slider-images {
    width: 1160px;
    height: 680px;
  }
  
  @media screen and (max-height: 750px) {
    .slider-images {
      width: 580px;
      height: 340px;
    }
    
    .slider__image img {
      max-height: 340px !important;
    }
  }
  
  .slider__image {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      max-height: 680px;
      overflow: hidden;
      background-color: #000729;
    }
  }

  .clients {
    margin: 150px 0 140px 0;
  }

  .clients__title {
    font-size: 40px;
    line-height: 48px;
    font-weight: 800;
    color: #fff;
    line-height: 1.2em;
    margin-bottom: 15px;
    max-width: 765px;

    & span {
      color: #00FF88;
    }
  }

  .clients__desc {
    font-size: 22px;
    line-height: 1.3em;
    font-weight: 500;
    color: #E3E4E8;
    max-width: 575px;
    margin-bottom: 55px;
  }

  .tabs__buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 16px;
    justify-content: center;
    margin-bottom: 32px;
  }

  .tabs__button {
    padding: 12.5px 30px;
    border-radius: 50px;
    border: 0;
    cursor: pointer;
    font-family: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.3em;
    background-color: transparent;
    color: #ABADBA;
    transition: color .3s ease, background-color .3s ease;

    &:hover {
      background-color: #303550;
      color: #fff;
    }

    &.tabs__button_active {
      background-color: #00CC6E;
      color: #fff;
    }
  }

  .tab {
    padding: 35px 14px 25px 14px;
    max-width: 332px;
    margin: 0 12px;
    border-radius: 12px;
    background-color: #303550;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    cursor: pointer;
    transition: background-color .3s ease;

    &:hover {
      background-color: #4D5268;

      & .tab__money {
        color: #fff;
        background-color: #303550;
      }

      & .tab__link {
        color: #fff;

        & span {
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M6.35878 1.95195L1.20191 7.10882L0.494802 6.40172L5.65162 1.24489L1.90904 1.24489L1.90904 0.244893L7.35878 0.244893L7.35878 5.69464H6.35878L6.35878 1.95195Z' fill='white'/%3e%3c/svg%3e ");
        }
      }
    }
  }

  .tab__icon {
    max-width: 200px;
  }

  .tab__money {
    margin: 24px 0;
    padding: 0 8px;
    background-color: #4D5268;
    font-size: 14px;
    line-height: 24px;
    color: #ABADBA;
    font-weight: 600;
    border-radius: 4px;
    transition: background-color .3s ease, color .3s ease;
  }

  .tab__title {
    color: #fff;
    margin-bottom: 8px;
    font-size: 20px;
    line-height: 1.3em;
    font-weight: 600;
  }

  .tab__text {
    color: #C7C9D1;
    font-size: 16px;
    line-height: 1.3em;
    margin-bottom: 25px;
  }

  .tab__link {
    text-decoration: none;
    display: flex;
    align-items: center;
    font-weight: 600;
    color: #676B7E;
    font-size: 16px;
    line-height: 1.3em;
    font-weight: 600;
    transition: color .3s ease;

    & span {
      margin-left: 11px;
    }
  }
  
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 24px;
    width: 100%;
    max-width: 1920px;
    margin: auto;
    margin-top: 145px;
    overflow: hidden;
    color: #fff;
  }
  
  .grid__text {
    padding: 50px 60px;
  }
  
  .grid-link {
    background: url("/static/business/grid/link.png");
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    cursor: pointer;
  }
  
  .grid-link__text {
    font-weight: 700;
    font-size: 32px;
    line-height: 37px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    
    & span:first-child {
      max-width: 242px;
    }
  }
  
  .grid__title {
    font-size: 46px;
    line-height: 1.2em;
    font-weight: 800;
    margin-bottom: 24px;
    
    & span {
      color: #00FF88;
    }
  }
  
  .grid__description {
    font-size: 22px;
    line-height: 1.3em;
    color: #E3E4E8;
  }
  
  .grid__image {
    width: 100%;
    transition: background-color .3s ease;
    position: relative;
    
    &::before {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 7, 41, .4);
      opacity: 0;
      cursor: pointer;
      transition: opacity .3s ease;
    }
    
    &::after {
      content: url("data:image/svg+xml;charset=UTF-8,%3csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M21 21L15.2857 15.2857M9.57143 6V13.1429M6 9.57143H13.1429M9.57143 18.1429C4.83756 18.1429 1 14.3053 1 9.57143C1 4.83756 4.83756 1 9.57143 1C14.3053 1 18.1429 4.83756 18.1429 9.57143C18.1429 14.3053 14.3053 18.1429 9.57143 18.1429Z' stroke='white' stroke-width='2'/%3e%3c/svg%3e ");
      width: max-content;
      height: max-content;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      opacity: 0;
      transition: opacity .3s ease;
    }
    
    & img {
      display: block;
    }
    
    &:not(.grid__text):not(.grid-link):hover {
      &::after,
      &::before {
        opacity: 1;
      }
    }
  }
  
  .grid__image_grey {
    opacity: .2;
  }
  
  @media screen and (max-width: 1780px) {
    .grid {
      grid-gap: 15px;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    } 
    
    .grid__image_desktop {
      display: none;
    }
  }
  
  @media screen and (max-width: 1405px) {
    .grid {
      grid-gap: 15px;
      grid-template-columns: 1fr 1fr 1fr;
    }

    .grid__image_tablet {
      display: none;
    }
  }

  .header {
    background: url('/static/business/header/background.png') no-repeat center;
    background-size: 100% 100%;
    min-height: 100vh;
    position: relative;
    margin: auto;
    padding-bottom: 0 !important;
  }

  .header__image {
    position: absolute;
    right: 0;
    bottom: 0;
  }

  .header__content {
    position: relative;
    z-index: 1;
    padding-top: calc(50vh - 220px);
  }

  .header__title {
    font-size: 54px;
    line-height: 1.1em;
    font-weight: 800;
    color: #fff;
    margin-bottom: 25px;

    & span {
      display: block;
    }
  }

  .header__description {
    font-size: 22px;
    line-height: 1.3em;
    font-weight: 500;
    max-width: 690px;
    color: rgb(227, 228, 232);

    & span {
      display: block;
    }
  }

  .header-form {
    padding: 24px;
    background-color: rgba(0, 7, 41, 0.5);
    border-radius: 12px;
    width: max-content;
    margin: 50px 0 32px 0;
  }

  .header-form__flex {
    display: flex;
  }

  .header-form__input {
    display: block;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 12.5px 13px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px 0 0 4px;
    width: 275px;

    &::placeholder {
      color: #fff;
    }
  }

  .header-form__button {
    margin-left: -4px;
    display: flex;
    align-items: center;
    height: 50px;
    padding: 12.5px 24px;
    font-size: 18px;
    line-height: 1.3em;
    font-weight: 600;
    cursor: pointer;
    background-color: #00FF88;
    border-radius: 4px;
    border: 0;
    transition: background-color .3s ease;

    & span {
      margin-left: 12px;
    }

    &:hover {
      background-color: #00CC6E;
    }
  }

  .header-form__labels {
    display: flex;
    grid-gap: 32px;
    margin-top: 18px;
  }

  .header-form__label {
    font-size: 16px;
    line-height: 1.2em;
    color: #C7C9D1;
    display: flex;
    align-items: center;
  }

  .header-form__checkbox {
    margin: 0 8px 0 0;
    width: 16px;
    height: 16px;

    &:checked::before {
      border: 1px solid #00FF88;
      background: url("data:image/svg+xml;charset=UTF-8,%3csvg width='6' height='7' viewBox='0 0 6 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='3' cy='3.5' r='3' fill='%2300FF88'/%3e%3c/svg%3e ") no-repeat center #002526;
      background-position: 4px 3.5px;
    }

    &::before {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      background-color: #002526;
      border: 1px solid rgba(199, 201, 209, 0.3);
      border-radius: 50%;
    }
  }

  .header__links {
    display: flex;
    gap: 84px;
  }

  .header__info {
    font-size: 14px;
    color: rgba(255, 255, 255, .6);
    padding: 115px 0 0 0;

    & a {
      color: inherit;
      transition: color .3s ease;
      text-decoration: underline;

      &:hover {
        color: #97A8FF;
      }
    }
  }
  
  .triggers {
    background: url("/static/business/triggers/background.png") no-repeat center;
    background-size: 100% 100%;
    padding: 225px 0 165px 0;
    margin-top: -1px;
    color: #fff;
    position: relative;
  }
  
  .triggers__content {
    position: relative;
    z-index: 1;
  }
  
  .triggers__title {
    font-size: 46px;
    line-height: 1.2em;
    font-weight: 800;
    margin-bottom: 24px;
    
    & span {
      color: rgba(0, 255, 136, 1);
      display: block;
    }
  }
  
  .triggers__description {
    font-size: 22px;
    line-height: 1.3em;
    color: #E3E4E8;
    max-width: 480px;
  }
  
  .triggers__button {
    display: flex;
    align-items: center;
    height: 50px;
    padding: 12.5px 20px;
    font-size: 18px;
    line-height: 1.3em;
    font-weight: 600;
    cursor: pointer;
    background-color: #00FF88;
    border-radius: 4px;
    border: 0;
    margin-top: 130px;
    transition: background-color .3s ease;

    & span {
      margin-left: 20px;
    }

    &:hover {
      background-color: #00CC6E;
    }
  }
  
  .triggers__image {
    position: absolute;
    right: 0;
    bottom: 0;
  }
  
  .app {
    padding: 256px 0 290px 0;
    background: url("/static/business/app/background.png") no-repeat center top / cover;
    position: relative;
    margin: auto;
    color: #fff;

    &::before {
      content: url('/static/business/app/ribbon-top.png');
      display: block;
      width: 100%;
      overflow: hidden;
      position: absolute;
      top: -35px;
      text-align: center;
    }

    &::after {
      content: url('/static/business/app/ribbon-bottom.png');
      display: block;
      width: 100%;
      overflow: hidden;
      position: absolute;
      bottom: -35px;
      text-align: center;
    }
  }
  
  .app__content {
    max-width: 670px;
    margin-left: auto;
  }
  
  .app__image {
    position: absolute;
    left: 0;
    bottom: 0;
  }
  
  .app__title {
    font-size: 46px;
    line-height: 1.2em;
    font-weight: 800;
    margin-bottom: 24px;
    
    & span {
      color: #00FF88;
    }
  }
  
  .app__description {
    font-size: 22px;
    line-height: 1.3em;
    color: #E3E4E8;
    max-width: 570px;
  }
  
  .app__links {
    margin-top: 130px;
    display: flex;
    gap: 45px;
  }
  
  .peoples {
    padding: 160px 0 125px 0;
    background: url("/static/business/peoples/background.png") no-repeat center / cover;
    position: relative;
    margin: auto;
    color: #fff;

    &::before {
      content: url('/static/business/peoples/ribbon-top.png');
      display: block;
      width: 100%;
      overflow: hidden;
      position: absolute;
      top: -40px;
      text-align: center;
    }

    &::after {
      content: url('/static/business/peoples/ribbon-bottom.png');
      display: block;
      width: 100%;
      overflow: hidden;
      position: absolute;
      bottom: -42px;
      text-align: center;
    }
  }
  
  .peoples__title {
    font-size: 44px;
    line-height: 1.2em;
    font-weight: 800;
    
    & span {
      color: #00FF88;
      
      &::after {
        content: "";
        display: block;
      }
    }
  }
  
  .peoples__grid {
    margin-top: 65px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 32px 24px;
  }
  
  .peoples-item {
    border-radius: 4px;
    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1));
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    cursor: pointer;
  }
  
  .peoples-item__icon {
    width: 160px;
    height: 160px;
    margin-bottom: 8px;
    position: relative;
    
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      display: block;
      width: inherit;
      height: inherit;
      border-radius: 50%;
      transition: background-color .3s ease;
    }
    
    &::after {
      content: url("data:image/svg+xml;charset=UTF-8,%3csvg width='19' height='20' viewBox='0 0 19 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M7.34315 0.656854V2.6509L15.2415 2.65797L0.0857864 17.8137L1.5 19.2279L16.6557 4.07218L16.6628 11.9706H18.6569V0.656854H7.34315Z' fill='white'/%3e%3c/svg%3e ");
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      width: min-content;
      height: min-content;
      margin: auto;
      opacity: 0;
      transition: opacity .3s ease;
    }
    
    & img {
      width: inherit;
      height: inherit;
      border-radius: 50%;
    }
    
    &:hover {
      &::before {
        background-color: rgba(0, 7, 41, 0.4);
      }
      
      &::after {
        opacity: 1;
      }
    }
  }
  
  .peoples-item__title {
    font-size: 18px;
    line-height: 1.3em;
    font-weight: 600;
    margin-bottom: 24px;
    padding: 0 8px;
  }
  
  .peoples-item__button {
    width: 100%;
    background-color: transparent;
    border: 0;
    border-radius: 4px;
    font-family: inherit;
    color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 9.5px 0;
    font-size: 16px;
    line-height: 1.3em;
    font-weight: 600;
    transition: background-color .3s ease, color .3s ease;
    
    & span {
      margin-left: 11px;
    }
    
    &:not(.peoples-item_more .peoples-item__button):hover {
      background-color: rgba(0, 153, 83, 1);
      color: #fff;
      
      & span {
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M6.85769 1.95195L1.70081 7.10882L0.993703 6.40172L6.15053 1.24489L2.40794 1.24489L2.40794 0.244893L7.85769 0.244893L7.85769 5.69464H6.85769L6.85769 1.95195Z' fill='white'/%3e%3c/svg%3e ");
      }
    }
  }
  
  .peoples-item_more {
    display: flex;
    justify-content: center;
    align-items: center;
    
    &:hover {
      background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.15));
    }
  }

  .maps {
    margin-top: 115px;
    color: #fff;
  }

  .maps__title {
    font-size: 46px;
    line-height: 1.2em;
    font-weight: 800;
    max-width: 805px;

    & span {
      color: #00FF88;
    }
  }
  .maps__input {
    display: inline-block;
    margin-left: 10px;
    width: 480px;
    position: relative;
    transition: width .3s ease;

    //&::after {
    //  content: url("data:image/svg+xml;charset=UTF-8,%3csvg width='20' height='13' viewBox='0 0 20 13' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M0 0.5H20L10 12.5L0 0.5Z' fill='%233357FF'/%3e%3c/svg%3e "); 
    //  padding-left: 5px;
    //}

    &:focus-within {
      &::after {
        content: url("data:image/svg+xml;charset=UTF-8,%3csvg width='21' height='21' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M12.0491 13.9633C10.7873 14.9274 9.21054 15.5 7.5 15.5C3.35786 15.5 0 12.1421 0 8C0 3.85786 3.35786 0.5 7.5 0.5C11.6421 0.5 15 3.85786 15 8C15 9.71053 14.4274 11.2873 13.4633 12.5491L20.0055 19.0913L18.5913 20.5055L12.0491 13.9633ZM13 8C13 11.0376 10.5376 13.5 7.5 13.5C4.46243 13.5 2 11.0376 2 8C2 4.96243 4.46243 2.5 7.5 2.5C10.5376 2.5 13 4.96243 13 8Z' fill='white'/%3e%3c/svg%3e ");
        position: absolute;
        right: 0;

      }
    }

    & input {
      padding: 0;
      border: 0;
      background-color: transparent;
      font-family: inherit;
      font-size: 46px;
      line-height: 1.2em;
      font-weight: 800;
      color: #3357FF;
      min-width: 100px;
      max-width: 480px;
      text-decoration: solid underline #3357FF 2px;
    }
  }
  .maps__description {
    font-weight: 500;
    font-size: 22px;
    line-height: 1.3em;
    color: #E3E4E8;
    margin-top: 16px;
    max-width: 805px;
  }
  .container_maps {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .maps__tabs {
    display: flex;
    border-radius: 4px;
    border: 1px solid #4D5268;
    height: 40px;
  }
  .maps__tab {
    border: 0;
    background-color: transparent;
    font-family: 'Inter';
    font-size: 18px;
    line-height: 1.3em;
    color: #C7C9D1;
    padding: 8.5px 24px;
    height: inherit;
    margin-top: -1px;
    cursor: pointer;
    transition: color .3s ease;

    &:hover:not(.maps__tab_active) {
      color: #fff;
    }
  }
  .maps__tab_active {
    background-color: #00FF88;
    color: #000729;
    border-radius: 4px;
    font-weight: 500;
  }
  .maps__map {
    max-width: 100%;
    margin-top: 55px;

    & img {
      width: 100%;
    }
  }

  .chart {
    margin: auto;
    padding: 125px 0 120px 0;
  }

  .chart__chart {
    margin-top: 90px;

    & tspan {
      fill: #fff;
    }

    & .recharts-cartesian-grid {
      opacity: .3;
    }

    & .recharts-cartesian-axis-line {
      stroke: #fff;
    }
  }

  .chart__loader {
    width: min-content;
    margin: auto;
  }
  
  .chart__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;

    & .chart__link {
      margin-top: 0;
      padding: 6px 12px;
    }
  }
  
  .chart-legend {
    display: flex;
    padding: 9.5px 16px;
    border-radius: 4px;
    background-color: #303550;
    color: #fff;
    gap: 20px;
    height: 100%;
    
    & span {
      display: flex;
      align-items: center;
      font-size: 16px;
      line-height: 1.3em;
      
      &::before {
        content: "";
        display: block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        margin-right: 8px;
      }
    }
  }
  
  .chart-tooltip {
    border-radius: 4px;
    background-color: #303550;
    padding: 4px 8px 8px 8px;
    color: #fff;
  }
  
  .chart-tooltip__title {
    font-size: 18px;
    line-height: 1.3em;
    font-weight: 600;
    margin-bottom: 5px;
  }
  
  .chart-tooltip__revenue,
  .chart-tooltip__orders {
    font-size: 16px;
    line-height: 1.5em;
  }

  .chart-legend__revenue::before {
    background-color: #00CC6E;
  }
  
  .chart-legend__orders::before {
    background-color: #FFD500;
  }


  .chart__link {
    margin-top: 30px;
    display: flex;
    align-items: center;
    padding: 10px 12px;
    background-color: #303550;
    border-radius: 4px;
    width: max-content;
    margin-left: auto;
    gap: 10px;
    font-size: 18px;
    line-height: 1.3em;
    color: #ABADBA;
    text-decoration: none;
    transition: color .3s ease;

    &:hover {
      color: #fff;

      & span {
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='10' height='11' viewBox='0 0 10 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M6.18939 2.60785L1.52643 2.60785L1.52643 0.607852L9.60346 0.607852L9.60346 8.68488H7.60346V4.02221L1.5265 10.0992L0.112288 8.68495L6.18939 2.60785Z' fill='white'/%3e%3c/svg%3e ");
      }
    }

    & span {
      margin-left: 5px;
    }
  }

  .money {
    padding: 200px 0;
    background: url("/static/business/money/background.png") no-repeat center top / cover;
    position: relative;
    margin: auto;
    color: #fff;

    &::before {
      content: url('/static/business/money/ribbon-top.png');
      display: block;
      width: 100%;
      overflow: hidden;
      position: absolute;
      top: -35px;
      text-align: center;
    }

    &::after {
      content: url('/static/business/money/ribbon-bottom.png');
      display: block;
      width: 100%;
      overflow: hidden;
      position: absolute;
      bottom: -45px;
      text-align: center;
    }
  }
  
  .money__title {
    font-size: 46px;
    line-height: 1.2em;
    margin-bottom: 16px;
    font-weight: 800;
    color: #fff;
    
    & span {
      color: rgba(0, 255, 136, 1);
    }
  }
  
  .money__description {
    font-size: 22px;
    line-height: 1.3em;
    color: #E3E4E8;
    max-width: 925px;
  }
  
  .money__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 25px;
    margin-top: 65px;
  }
  
  .money-item {
    border-radius: 12px;
    background-color: #000729;
    color: #fff;
    text-align: center;
    padding-bottom: 55px;
  }
  
  .money-item__description {
    margin-top: 50px;
    font-size: 38px;
    line-height: 1.1em;
    margin-bottom: 8px;
  }
  
  .money-item__price {
    font-weight: 800;
    font-size: 46px;
    line-height: 1.3em;
  }
  
  .money-item__icon_big {
    margin-top: -19px;
  }
  
  .heroes {
    background: url("/static/business/heroes/background.png") no-repeat center top / cover;
    padding: 160px 0;
    position: relative;
    margin: auto;
    color: #fff;

    &::after {
      content: url('/static/business/heroes/ribbon-bottom.png');
      display: block;
      width: 100%;
      overflow: hidden;
      position: absolute;
      bottom: -50px;
      text-align: center;
    }
  }
  
  .container_heroes-header {
    position: relative;
  }
  
  .heroes__title {
    font-size: 46px;
    line-height: 1.2em;
    font-weight: 800;
    margin-bottom: 16px;
    
    & span {
      display: block;
      color: #00FF88;
    }
  }
  
  .heroes__description {
    font-size: 22px;
    line-height: 1.3em;
    color: #E3E4E8;
    max-width: 845px;
  }
  
  .heroes__companies {
    margin-top: 40px;
    display: flex;
    align-items: center;
    gap: 123px;
  }
  
  .heroes-header__image {
    position: absolute;
    right: 0;
    bottom: 0;
  }
  
  .heroes-videos {
    margin-top: 80px;
  }
  
  .heroes-videos__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 24px;
  }
  
  .heroes-video {
    & .heroes-video__video {
      height: 255px;
      margin-bottom: 20px;
      filter: grayscale(100%);
      transition: filter .3s ease;
      
      &:hover {
        filter: grayscale(0%);
      }
    }
    
    & .heroes-video__title {
      font-size: 18px;
      line-height: 20px;
      margin-bottom: 8px;
    }
    
    & .heroes-video__description {
      font-size: 16px;
      line-height: 1.3em;
      color: rgba(255, 255, 255, 0.7);
    }
  }
  
  .heroes-videos__button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 30px;
    margin: 38px auto 0 auto;
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 4px;
    font-size: 18px;
    line-height: 1.3em;
    font-weight: 600;
    color: rgba(199, 201, 209, 1);
    font-family: inherit;
    cursor: pointer;
    transition: color .3s ease, background-color .3s ease;
    
    & span {
      margin-left: 20px;
    }
    
    &:hover {
      background-color: #00FF88;
      border-color: #00FF88;
      color: #000729;
      
      & span {
       background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='13' height='13' viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M1.34315 0.343133V2.33717L9.24153 2.34425L0.636039 10.9497L2.05025 12.3639L10.6557 3.75846L10.6628 11.6568H12.6569V0.343133H1.34315Z' fill='%23000729'/%3e%3c/svg%3e ");; 
      }
    }
  }
  
  .friends {
    color: #fff;
    position: relative;
    margin: 180px auto 0 auto;

    &::after {
      content: url('/static/business/friends/ribbon-bottom.png');
      display: block;
      width: 100%;
      overflow: hidden;
      position: absolute;
      bottom: -110px;
      text-align: center;
    }
  }
  
  .friends__illustration {
    position: absolute;
    left: 0;
    bottom: 0;
  }
  
  .friends__content {
    width: min-content;
    margin-left: auto;
    position: relative;
    z-index: 1;
  }
  
  .friends__title {
    font-weight: 800;
    font-size: 46px;
    line-height: 1.2em;
    color: #fff;
    margin-bottom: 16px;
    
    & span {
      color: #00FF88;
    }
  }
  
  .friends__description {
    font-size: 22px;
    line-height: 1.3em;
    color: #E3E4E8;
  }
  
  .friends__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px;
    margin-top: 55px;
    padding-bottom: 35px;
  }
  
  .friends__image {
    display: block;
  }
  
  .videos {
    margin-top: 185px;
    margin-bottom: 115px;
    color: #fff;
  }
  
  .videos__title {
    font-size: 46px;
    line-height: 1.2em;
    font-weight: 800;
    margin-bottom: 16px;
    
    & span {
      color: #00FF88;
      
      &::after {
        content: "";
        display: block;
      }
    }
  }
  
  .videos__description {
    font-size: 22px;
    line-height: 1.3em;
    color: #E3E4E8;
    max-width: 690px;
    margin-bottom: 55px;
  }
  
  .videos__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 24px;
  }
  
  .videos-video {
    filter: grayscale(100%);
    transition: filter .3s ease;
    
    &:hover {
      filter: grayscale(0%);
    }
    
    & .videos-video__video {
      height: 216px;
      margin-bottom: 16px;
    }
    
    & .videos-video__title {
      font-size: 18px;
      line-height: 20px;
      color: #E3E4E8;
      font-weight: 700;
      margin-bottom: 8px;
    }
    
    & .videos-video__description {
      font-size: 16px;
      line-height: 1.3em;
      color: #818598;
    }
  }
  
  .videos-video_more {
    background: url("/static/business/videos/link-background.png") no-repeat center top / cover;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 32px;
    height: 216px;
    cursor: pointer;
    filter: grayscale(0%);
    
    & .videos-video__title {
      font-size: 32px;
      line-height: 1.15em;
      font-weight: 700;
      max-width: 190px;
      margin-bottom: 0;
    }
  }
  
  .model {
    background: url("/static/business/model/background.png") no-repeat center top / cover;
    position: relative;
    margin: auto;
    color: #fff;
    padding: 170px 0 150px 0;

    &::before {
      content: url('/static/business/model/ribbon-top.png');
      display: block;
      width: 100%;
      overflow: hidden;
      position: absolute;
      top: -35px;
      text-align: center;
    }

    &::after {
      content: url('/static/business/model/ribbon-bottom.png');
      display: block;
      width: 100%;
      overflow: hidden;
      position: absolute;
      bottom: -35px;
      text-align: center;
    }
  }
  
  .model__title {
    font-size: 46px;
    line-height: 1.2em;
    font-weight: 800;
    margin-bottom: 50px;
    max-width: 580px;
    text-align: center;
    margin: auto;
    margin-bottom: 50px;
  }
  
  .office {
    margin: 245px 0 120px;
    color: #fff;
    position: relative;
  }
  
  .office__illustration {
    position: absolute;
    right: 0;
    bottom: 0;
  }
  
  .office__content {
    max-width: 670px;
    position: relative;
    z-index: 1;
  }
  
  .office__title {
    font-size: 46px;
    font-weight: 800;
    line-height: 1.2em;
    margin-bottom: 16px;
    
    & span {
      color: #00FF88;
    }
  }
  
  .office__description {
    font-weight: 500;
    font-size: 22px;
    line-height: 28px;
    color: #E3E4E8;
    margin-bottom: 120px;
  }
  
  .office__button {
    display: flex;
    align-items: center;
    padding: 12.5px 20px;
    background-color: transparent;
    border: 1px solid #C7C9D1;
    border-radius: 4px;
    font-family: inherit;
    color: #fff;
    font-size: 18px;
    line-height: 1.3em;
    font-weight: 600;
    cursor: pointer;
    transition: background-color .3s ease, color .3s ease, border-color .3s ease;
    
    & span {
      margin-left: 20px;
    }
    
    &:hover {
      background-color: #00FF88;
      border-color: #00FF88;
      color: #000729;
      
      & span {
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M11 4V16.17L5.41 10.58L4 12L12 20L20 12L18.59 10.59L13 16.17V4H11Z' fill='%23000729'/%3e%3c/svg%3e ");
      }
    }
  }
  
  .office__grid {
    margin-top: 32px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px;
  }
  
  .office__image {
    position: relative;
    cursor: pointer;
    
    & img {
      display: block;
    }

    &::before {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background-color: rgba(0, 7, 41, .3);
      opacity: 0;
      transition: opacity .3s ease;
    }
    
    &::after {
      content: url("data:image/svg+xml;charset=UTF-8,%3csvg width='23' height='24' viewBox='0 0 23 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M22.1417 22.4289L16.2642 16.5513M10.3866 7.00028V14.3472M6.71317 10.6737H14.0601M10.3866 19.4901C5.51752 19.4901 1.57031 15.5429 1.57031 10.6737C1.57031 5.80463 5.51752 1.85742 10.3866 1.85742C15.2558 1.85742 19.203 5.80463 19.203 10.6737C19.203 15.5429 15.2558 19.4901 10.3866 19.4901Z' stroke='white' stroke-width='2'/%3e%3c/svg%3e "); 
      width: 23px;
      height: 24px;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      opacity: 0;
      transition: opacity .3s ease;
    }
    
    &:hover::before,
    &:hover::after {
      opacity: 1;
    }
  }

  .orders {
    padding: 220px 0 130px 0;
    background: url('/static/business/franchise/orders/background.png') no-repeat center top / cover;
    color: #fff;
    overflow: hidden;
  }

  .orders__header {
    position: relative;
  }

  .orders__content {
    margin-left: auto;
    max-width: 725px;
  }

  .orders__illustration {
    position: absolute;
    left: 0;
    bottom: 0;
  }

  .orders__title {
    font-size: 46px;
    font-weight: 800;
    line-height: 1.1em;
    margin-bottom: 16px;

    & .orders__title_word {
      color: #00FF88;
    }

    & span:not(.orders__title_word) {
      display: block;
    }
  }

  .orders__description {
    font-size: 22px;
    line-height: 1.3em;
    color: #E3E4E8;
  }

  .orders-list {
    margin-top: 55px;
    padding: 40px 0 60px 40px;
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;

    &::before {
      content: "";
      display: block;
      width: 2.5px;
      height: 100%;
      background-color: #00CC6E;
      position: absolute;
      left: 60px;
      top: 0;
      bottom: 0;
      margin: auto;
      z-index: 1;
    }

    &::after {
      content: "";
      display: block;
      width: 100vw;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #000729;
      border-radius: 12px 0 0 12px;
    }
  }

  .orders-list-item {
    position: relative;
    z-index: 1;
    display: flex;
  }

  .orders-list-item__icon {
    margin-right: 40px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00CC6E;

    & img {
      width: 20px;
      height: 20px;
    }
  }

  .orders-list-item__title {
    font-size: 26px;
    line-height: 1.1em;
    font-weight: 800;
    margin-bottom: 12px;
  }

  .orders-list-item__text {
    font-size: 18px;
    line-height: 1.1em;
    font-weight: 500;
    color: #C7C9D1;
  }

  .orders__clients {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
  }

  .ribbons {
    max-width: 1920px;
    margin: auto;
    width: 100%;
    overflow: hidden;
    margin-top: -30px;

    & img {
      width: 100%;
    }
  }

  .footer-header .header-form__checkbox::before {
    background-color: #303550;
  }

  .footer-header .header-form__checkbox:checked::before {
    background-color: #303550;
  }
  
  .orders-list-item__content {
    max-width: 608px;
  }

  @media screen and (max-width: 2000px) {
    .triggers__image {
      width: 650px;
    }

    .friends__illustration {
      width: 750px;
    }

    .office__illustration {
      width: 760px;
    }
  }
  

  @media screen and (max-width: 1600px) {
    .container {
      width: 1200px;
    }
    
    .header__info {
      padding-top: 30px;
    }

    .scrollnav__links {
      gap: 25px !important;
    }

    .scrollnav__link {
      font-size: 14px;
    }
    
    .triggers__image {
      width: 600px;
    }
    
    .app__image {
      width: 600px;
    }
    
    .money-item {
      justify-self: center;
      width: 380px;
    }
    
    .money-item__icon {
      width: 100%;
    }
    
    .money-item__description {
      font-size: 24px;
    }
    
    .money-item__price {
      font-size: 36px;
    }
    
    .friends__illustration {
      width: 570px;
    }
    
    .model__image {
      width: 1200px;
    }
    
    .office__illustration {
      width: 600px;
    }
    
    .orders__illustration {
      width: 530px;
    }
  }

  @media screen and (max-width: 1399px) {
    .clients {
      margin: 50px 0 85px 0;
      overflow: hidden;
    }

    .clients__title {
      font-size: 24px;
      margin-bottom: 30px;
    }

    .container_smail {
      width: 315px;
    }

    .clients__desc {
      display: none;
    }

    .tabs__buttons {
      flex-direction: row;
      gap: 10px;
      width: 100vw;
      overflow: auto;
      flex-wrap: nowrap;
      justify-content: flex-start;
    }

    .tabs__button {
      padding: 15px;
      font-size: 14px;
      min-width: max-content;
      background-color: #303550;
    }

    .tab {
      margin: 0;
    }

    .tab__title {
      font-size: 18px;
    }

    .tab__text {
      font-size: 14px;
    }

    .tab__link {
      font-size: 14px;
    }

    .clients .slick-dots {
      display: flex !important;
      justify-content: space-between;
      position: static;
      grid-gap: 8px;
      margin-top: 16px;

      & li {
        background-color: #303550;
        display: block;
        width: 100%;
        height: 4px;
        border-radius: 0;
        margin: 0;

        &.slick-active {
          background-color: #002CFB;
        }

        & button {
          padding: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
        }
      }
    }
    
    .container {
      width: 315px;
    }
    
    .header__content {
      padding-top: 0;
    }
    
    .grid {
      display: block;
    }
    
    .grid__slider {
      width: 100%;
      margin: 40px auto 45px auto;
      width: 1020px;
      padding-left: 34px;
    }
    
    .grid .slick-center .grid__image {
      width: 310px;
      height: 250px;
      margin-top: 0;
      margin-left: -5.5px;
    }
    
    .grid .grid__image {
      display: flex !important;
      justify-content: center;
      width: 300px;
      opacity: 1 !important;
      background: #fff;
      height: 200px;
      margin-top: 25px;
      
      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .grid__title {
      font-size: 24px;
      margin-bottom: 12px;
    }

    .grid__description {
      font-size: 16px;
    }
    
    .grid .videos-video_more .videos-video__title {
      max-width: 240px;
    }
    
    .header {
      background-image: url("/static/business/header/background_mobile.png");
      background-size: cover;
      background-position: right;
      padding: 150px 0 17px 0;
      overflow: hidden;
    }
    
    & .header__image {
      position: static;
      width: 100%;
      display: block;
      margin: auto;
      margin-top: 30px;
      max-width: 500px;
    }

    .header__title {
      font-size: 36px;
      line-height: 1.2em;
      margin-bottom: 16px;
    }

    .header__description {
      font-size: 18px;
    }
    
    .header .header-form {
      display: none;
    }
    
    .header__links {
      gap: 72px;
      margin-left: -43%;
      margin-top: 30px;
    }
    
    .header__info {
      font-size: 13px;
      margin-top: -65px;
    }

    .triggers {
      background-image: none;
      padding: 50px 0 60px 0;
      
      & .container_smail {
        width: 315px;
        display: flex;
        flex-direction: column;
      }
    }

    .triggers__image {
      position: static;
      width: 315px;
      margin: auto;
      margin-top: 30px;
    }

    .triggers__title {
      font-size: 24px;
      margin-bottom: 12px;
    }

    .triggers__description {
      font-size: 16px;
    }

    .triggers__button {
      display: none;
    }
    
    .app {
      padding: 110px 0 90px 0;
      
      & .container {
        display: flex;
        flex-direction: column-reverse;
      }
    }
    
    .app__image {
      width: 100%;
      position: static;
      margin-top: 30px;
    }

    .app__title {
      font-size: 24px;
      margin-bottom: 12px;
    }

    .app__description {
      font-size: 16px;
    }
    
    .app__links {
      display: none;
    }
    
    .peoples {
      overflow: hidden;
      padding: 95px 0 105px 0;
      
      &::before {
        top: -10px;
      }
      
      & .container_smail {
        width: 315px;
      }
    }

    .peoples__title {
      font-size: 24px;
      margin-bottom: 30px;
    }
    
    .peoples__grid {
      display: flex;
      gap: 25px;
      width: 100vw;
      overflow-y: auto;
    }

    .peoples-item__icon {
      margin: 0 26px; 
      
      & img {
        width: 100%;
      }
    }

    .peoples-item__title {
      font-size: 16px;
      margin-top: 10px;
    }

    .maps {
      margin-top: 50px;
      overflow: hidden;
    }

    & .maps__title {
      font-size: 24px;
      margin-bottom: 12px;
    }

    & .maps__input input {
      font-size: 24px;
    }

    & .container_maps {
      flex-direction: column;
      gap: 15px;
      align-items: flex-start;
    }

    & .maps__tabs {
      width: 100%;
      margin-top: 30px;
      justify-content: space-between;
    }

    & .maps__tab {
      margin-right: -1px;
      font-size: 13px;
      width: 100%;
      padding: 8.5px 15px;
    }

    & .maps__input {
      width: auto;

      & input {
        max-width: 285px;

        &:focus {
          outline: 0;
        }
      }

      &:focus-within {
        outline: 0;
      }

      &:focus-within::after {
        content: url("data:image/svg+xml;charset=UTF-8,%3csvg width='14' height='14' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M12.0491 13.9633C10.7873 14.9274 9.21054 15.5 7.5 15.5C3.35786 15.5 0 12.1421 0 8C0 3.85786 3.35786 0.5 7.5 0.5C11.6421 0.5 15 3.85786 15 8C15 9.71053 14.4274 11.2873 13.4633 12.5491L20.0055 19.0913L18.5913 20.5055L12.0491 13.9633ZM13 8C13 11.0376 10.5376 13.5 7.5 13.5C4.46243 13.5 2 11.0376 2 8C2 4.96243 4.46243 2.5 7.5 2.5C10.5376 2.5 13 4.96243 13 8Z' fill='white'/%3e%3c/svg%3e ");
      }
    }

    & .maps__menu {
      top: 30px;
      max-height: 100px;
    }

    & .maps__city {
      padding: 10px;
      font-size: 12px;
    }

    & .maps__description {
      font-size: 16px;
      margin-top: 0;
    }

    & .maps__map {
      margin-top: 20px;
    }

    .chart {
      padding: 50px 0 80px 0;
    }

    .chart__chart {
      margin-top: 20px;
    }

    .chart__link {
      width: 100%;
      margin-top: 15px;
      font-size: 14px;
      justify-content: center;

      & img {
        height: 20px;
      }
    }

    .chart__info {
      flex-direction: column;
    }
    
    .chart-legend {
      width: 100%;
      margin-bottom: 10px;
      justify-content: center;
    }

    .chart-legend span {
      font-size: 14px;
    }

    .money {
      padding: 80px 0 140px 0;

      & .container_smail {
        width: 315px;
      }
    }

    .money__title {
      font-size: 24px;
      margin-bottom: 12px;
    }

    .money__description {
      font-size: 16px;
    }
    
    .money__slider {
      margin-top: 30px;
    }
    
    .money-item {
      padding-bottom: 24px;
    }
    
    .money-item__cities {
      margin-top: 16px;
      padding: 0 12px;
      font-size: 14px;
      line-height: 1.3em;
      color: #ABADBA;
    }
    
    .money__slider {
      margin-top: 16px;
      
      & .slick-dots {
        display: flex !important;
        justify-content: space-between;
        width: 100%;
        height: 4px;
        gap: 8px;
        bottom: -22px;
        
        & li {
          margin: 0;
          width: 100%;
          height: 100%;
          background-color: #000729;
          
          & button {
            margin: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
          }
        }
        
        & .slick-active {
          background-color: #00CC6E;
        }
      }
    }

    .money-item__icon_big {
      margin-top: 0;
    }
    
    .money-item__icon_big {
      height: 153px;
      margin: auto;
      margin-top: 20px;
    }
    
    .heroes .container_smail {
      width: 315px;
    }

    .heroes__title {
      font-size: 24px;
      margin-bottom: 12px;
      
      & span {
        display: inline;
      }
    }

    .heroes__description {
      font-size: 16px;
    }

    .triggers__title span {
      display: inline;
    }
    
    .heroes {
      padding: 50px 0 100px 0;
    }
    
    .container_heroes-header .container_smail {
      display: flex;
      flex-direction: column-reverse;
    }
    
    .heroes-header__image {
      position: static;
      margin: auto;
      margin-bottom: 30px;
      width: 130px;
    }
    
    .heroes__companies {
      display: none;
    }
    
    .heroes-videos {
      margin-top: 30px;
    }
    
    .heroes-videos__grid {
      grid-template-columns: 1fr;
      grid-gap: 20px;
    }

    .heroes-video .heroes-video__video {
      margin-bottom: 12px;
    }
    
    .heroes-video .heroes-video__title {
      font-size: 16px;
      line-height: 20px;
      color: #E3E4E8;
      margin-bottom: 2px;
    }
    
    .heroes-video .heroes-video__description {
      font-size: 13px;
      color: #ABADBA;
    }
    
    .heroes-videos__button {
      font-size: 14px;
      width: 100%;
      justify-content: center;
    }
    
    .grid__slider {
      & .slick-dots {
        display: flex !important;
        justify-content: space-between;
        width: 315px;
        margin: auto;
        left: 0;
        right: 0;
        height: 4px;
        gap: 8px;
        bottom: -22px;

        & li {
          margin: 0;
          width: 100%;
          height: 100%;
          background-color: #303550;

          & button {
            margin: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
          }
        }

        & .slick-active {
          background-color: #00CC6E;
        }
      }
    }
    
    .friends {
      margin: 50px 0 0 0;
      overflow: hidden;
      
      &::after {
        bottom: 0;
        z-index: 2;
      }
    }

    .friends__title {
      font-size: 24px;
      margin-bottom: 12px;
    }

    .friends__description {
      font-size: 16px;
    }
    
    .friends__content {
      width: 100%;
    }
    
    .friends__illustration {
      z-index: 2;
      bottom: 60px;
    }
    
    .friends__grid {
      display: flex;
      gap: 16px;
      width: 100vw;
      overflow-y: auto;
      padding-bottom: 0;
      margin-bottom: 380px;
    }
    
    .videos {
      margin: 40px 0 75px 0;
      
      & .container_smail {
        width: 315px;
      }
    }
    
    .videos-video {
      display: flex;
      justify-content: space-between;
    }

    .videos__title {
      font-size: 24px;
      margin-bottom: 12px;
    }

    .videos__description {
      font-size: 16px;
      margin-bottom: 30px;
    }
    
    .videos__grid {
      grid-template-columns: 1fr;
    }
    
    .videos-video .videos-video__video {
      width: 150px;
      height: 85px;
      margin-bottom: 0;
    }

    .videos-video .videos-video__title {
      font-size: 14px;
      margin-bottom: 8px;
    }

    .videos-video .videos-video__content {
      max-width: 180px;
    }

    .videos-video .videos-video__description {
      font-size: 14px;
    }
    
    .videos-video_more {
      padding: 13px 24px;
      border-radius: 4px;
      height: auto;
      
      & .videos-video__title {
        font-size: 18px;
        margin-bottom: 0;
      }
    }
    
    .model {
      padding: 120px 0 140px 0;
    }
    
    .model__title {
      font-size: 24px;
      margin-bottom: 30px;
    }
    
    .model__image {
      width: 100%;
    }
    
    .office {
      margin: 70px 0 50px 0;
      overflow: hidden;
    }

    .office__title {
      font-size: 24px;
      margin-bottom: 12px;
    }

    .office__description {
      font-size: 16px;
      margin-bottom: 5px;
    }
    
    .office__illustration {
      position: static;
      width: 100%;
      margin-bottom: 24px;
    }
    
    .office__grid {
      display: flex;
      gap: 18px;
      width: 100vw;
      overflow-y: auto;
      margin-bottom: 32px;
    }

    .office__button {
      font-size: 14px;
    }
    
    .orders {
      padding: 50px 0 0 0;
    }

    .orders__title {
      font-size: 24px;
      margin-bottom: 12px;
    }

    .orders__description {
      font-size: 16px;
      margin-bottom: 5px;
    }

    .orders-list {
      margin-top: 30px;
      padding: 0;
      
      &::before,
      &::after {
        display: none;
      }
    }

    .orders__illustration {
      width: 100%;
      position: static;
      margin-top: 30px;
    }
    
    .orders__clients {
      margin-top: 30px;
      gap: 65px;
      width: 100%;
      overflow-y: auto;
    }

    .ribbons img {
      width: auto;
    }

    .orders-list-item {
      display: block;
    }
    
    .orders-list-item__content {
      display: flex;
      align-items: center;
    }
    
    .orders-list-item__title {
      font-size: 16px;
      margin-bottom: 0;
      margin-left: 15px;
      max-width: 225px;
    }
    
    .orders-list-item__text {
      font-size: 14px;
    }
    
    .orders-list-item__icon {
      margin-right: 0;
    }
    
    .orders-list-item__text {
      color: #C7C9D1;
      margin-top: 10px;
    }
    
    .header__info {
      display: none;
    }

    .header-form {
      margin: 30px 0;
      width: 100%;
      padding: 20px;
      border-radius: 5px;
      display: flex;
      flex-direction: column-reverse;
    }

    .header-form__flex {
      flex-direction: column;
      align-items: center;
    }

    .header-form__input,
    .header-form__button {
      width: 100%;
    }

    .header-form__button {
      margin-left: 0;
      margin-top: 20px;
      font-size: 16px;
      justify-content: center;
    }

    .header-form__labels {
      display: grid;
      grid-gap: 25px;
      grid-template-columns: 1fr 1fr;
      margin-top: 0;
      margin-bottom: 18px;
    }

    .footer-header__image {
      margin-top: 0;
    }
  }
  @media screen and (max-width: 690px) {
    .grid__slider {
      margin-left: -168px;
    }
  }
  @media screen and (max-width: 495px) {
    .grid__slider {
      margin-left: -268px;
    }
    
    .modal__title {
      font-size: 24px;
      margin-bottom: 12px;
    }
    
    .modal__text {
      font-size: 16px;
      padding: 0 10px;
    }
    
    .modal__question {
      margin-top: 30px;
    }
    
    .modal__question-text {
      font-size: 16px;
      padding: 0 10px;
    }
    
    .modal .header-form__labels {
      padding: 0 10px;
    }
  }
  @media screen and (max-width: 400px) {
    .grid__slider {
      margin-left: -340px;
    }
  }
`

export default BusinessPage