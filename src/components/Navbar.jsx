import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import {Link, useNavigate} from "react-router-dom";

const Navbar = ({ page, activePage, type }) => {
    const [ isScrollNavbar, setIsScrollNavbar ] = useState(false)
    const [ isBurgerActive, setIsBurgerActive ] = useState(false)
    const navigate = useNavigate()
    const [ width, setWidth ] = useState(window?.innerWidth)

    const changeIsBurgerActive = (e) => {
        if (e.target.classList.value.includes('burger-close')) setIsBurgerActive(false)
    }

    useEffect(() => {
        const cb = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', cb)

        return () => window.removeEventListener('resize', cb)
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 150) {
                setIsScrollNavbar(true)
            } else {
                setIsScrollNavbar(false)
            }
        })
    }, [])

    if (page === 'customer') return (
        <>
        <StyledScrollNavbar className={isScrollNavbar ? "scrollnav_active" : ""}>
            <div className="container scrollnav_container">
                <a href="https://skilla.ru/"><img src="/static/customer/logo.png" alt="Skilla заказчикам" className="scrollnav__logo"/></a>

                <div className="scrollnav__links">
                    <Link to="/" className="scrollnav__link">Готовые решения бизнесу</Link>
                    <Link to="/" className="scrollnav__link">Карта присутствия</Link>
                    <Link to="/" className="scrollnav__link">IT-технологии</Link>
                    <Link to="/" className="scrollnav__link">Госконтракты и тендеры</Link>
                    <Link to="/customer/faq" className="scrollnav__link">Вопрос-ответ</Link>
                    <button className="scrollnav__button">Разместить заказ</button>
                </div>
            </div>
        </StyledScrollNavbar>
        <StyledNavbar>
            <div className="container">
                <header className="nav__header">
                    <div className="nav__info">
                        <a href="https://skilla.ru">
                            <img src="/static/logo.png" alt="логотип" className="nav__logo"/>
                        </a>
                        <div className="nav__tabs">
                            <Link to="/customer" className="nav__tab nav__tab_active">Заказчикам</Link>
                            <Link to="/business" className="nav__tab">Предпринимателям</Link>
                            <Link to="/worker" className="nav__tab">Исполнителям</Link>
                        </div>
                    </div>

                    <button className="nav__button">
                        Разместить заказ
                        <span className="arrow-right icon" />
                    </button>
                </header>

                <footer className="nav__footer">
                    <Link to="/" className="nav__link">Главная</Link>
                    <Link to="/" className="nav__link">Готовые решения бизнесу</Link>
                    <Link to="/" className="nav__link">Карта присутствия</Link>
                    <Link to="/" className="nav__link">IT-технологии</Link>
                    <Link to="/" className="nav__link">Госконтракты и тендеры</Link>
                    <Link to={`/${page}/faq`} className={activePage === 'faq' ? "nav__link nav__link_active" : "nav__link"}>Вопрос-ответ</Link>
                    <Link to="/" className="nav__link">Журнал</Link>
                </footer>
            </div>
        </StyledNavbar>
        {width <= 1399 && <StyledBurger>
                <div className="container">
                    <div className="burger">
                        <Link to="/worker" className="burger__logo">
                            <img src="/static/customer/logo.png" alt="Skilla исполнителям" />
                        </Link>
                        <div className="burger__icon" onClick={() => {
                            if (isBurgerActive) setIsBurgerActive(false)
                            else setIsBurgerActive(true)
                        }}>
                            <img src="/static/nav/burger.png" alt="открыть меню"/>
                        </div>
                    </div>
                    <div className={isBurgerActive ? "burger-menu burger-menu_active burger-close" : "burger-menu"} onClick={changeIsBurgerActive}>
                        <div className={isBurgerActive ? "burger-menu__content vov fade-in-left" : "burger-menu__content"}>
                            <header className="burger-menu__header">
                                <div className="burger-menu__nav">
                                    <a href="https://skilla.ru/">
                                        <img src="/static/logo.png" alt="Skilla" />
                                    </a>
                                    <span onClick={() => setIsBurgerActive(false)} className="burger-menu__cross close-menu icon"></span>
                                </div>

                                <div className="burger-menu__links">
                                    <Link to="/customer" className={activePage === 'main' ? "burger-menu__link burger-menu__link_active" : "burger-menu__link"}>Главная</Link>
                                    <Link to="/" className="burger-menu__link">Готовые решения бизнесу</Link>
                                    <Link to="/" className="burger-menu__link">Карта присутствия</Link>
                                    <Link to="/" className="burger-menu__link">IT-технологии</Link>
                                    <Link to="/" className="burger-menu__link">Госконтракты и тендеры</Link>
                                    <Link to={`/${page}/faq`} className={activePage === 'faq' ? "burger-menu__link burger-menu__link_active" : "burger-menu__link"}>Вопрос-ответ</Link>
                                </div>
                            </header>
                            <footer className="burger-menu__footer">
                                <button className="burger-menu__button" onClick={() => navigate('/customer')}>
                                    Разместить заказ
                                    <span className="icon arrow-right-big"></span>
                                </button>
                                <p className="burger-menu__copyright">Skilla © 2010-2022 Копирование информации запрещено</p>
                            </footer>
                        </div>
                    </div>
                </div>
            </StyledBurger>}
        {width <= 1399 && <StyledBurgerScroll className={isBurgerActive ? "" : isScrollNavbar ? "scrollnav_active" : ""}>
                <div className="container">
                    <div className="burger">
                        <a href="https://skilla.ru" className="burger__logo">
                            <img src="/static/logo.png" alt="Skilla" />
                        </a>
                        <div className="burger__icon" onClick={() => {
                            if (isBurgerActive) setIsBurgerActive(false)
                            else setIsBurgerActive(true)
                        }}>
                            <img src="/static/nav/burger.png" alt="открыть меню"/>
                        </div>
                    </div>
                </div>
            </StyledBurgerScroll>}
        </>
    )

    if (page === 'worker') return (
        <>
        <StyledScrollNavbar className={isScrollNavbar ? "scrollnav_active" : ""}>
            <div className="container scrollnav_container">
                <Link to="/business"><img src="/static/worker/logo.png" alt="Skilla исполнителям" className="scrollnav__logo"/></Link>

                <div className="scrollnav__links scrollnav__links_worker">
                    <Link to="/" className="scrollnav__link">Виды заказов</Link>
                    <Link to="/" className="scrollnav__link">Отзывы</Link>
                    <Link to="/" className="scrollnav__link">Заказчики</Link>
                    <Link to="/" className="scrollnav__link">Как начать работать</Link>
                </div>

                <div className="scrollnav__links scrollnav__links_worker">
                    <Link to="/worker/faq" className="scrollnav__link">Вопрос-ответ</Link>
                    <button className="scrollnav__button scrollnav__button_worker" onClick={() => navigate('/worker/download')}>Стать исполнителем</button>
                </div>
            </div>
        </StyledScrollNavbar>
        <StyledNavbar>
            <div className="container">
                <header className="nav__header">
                    <div className="nav__info">
                        <a href="https://skilla.ru">
                            <img src="/static/logo.png" alt="логотип" className="nav__logo"/>
                        </a>
                        <div className="nav__tabs nav__tabs_worker">
                            <Link to="/customer" className="nav__tab">Заказчикам</Link>
                            <Link to="/business" className="nav__tab">Предпринимателям</Link>
                            <Link to="/worker" className="nav__tab nav__tab_active">Исполнителям</Link>
                        </div>
                    </div>

                    <button className="nav__button nav__button_worker" onClick={() => navigate('/worker/download')}>
                        Скачать приложение
                        <span className="arrow-right icon" />
                    </button>
                </header>

                <footer className="nav__footer nav__footer_worker">
                    <Link to="/" className={activePage === 'main' ? "nav__link nav__link_active" : "nav__link"}>Главная</Link>
                    <Link to="/" className="nav__link">Виды заказов</Link>
                    <Link to="/" className="nav__link">Отзывы исполнителей</Link>
                    <Link to="/" className="nav__link">Заказчики</Link>
                    <Link to="/" className="nav__link">Как начать работать</Link>
                    <Link to="/" className="nav__link">Правила работы</Link>
                    <Link to={`/${page}/faq`} className={activePage === 'faq' ? "nav__link nav__link_active" : "nav__link"}>Вопрос-ответ</Link>
                </footer>
            </div>
        </StyledNavbar>
        {width <= 1399 && <StyledBurger>
            <div className="container">
                <div className="burger">
                    <Link to="/worker" className="burger__logo">
                        <img src="/static/worker/logo.png" alt="Skilla исполнителям" />
                    </Link>
                    <div className="burger__icon" onClick={() => {
                        if (isBurgerActive) setIsBurgerActive(false)
                        else setIsBurgerActive(true)
                    }}>
                        <img src="/static/nav/burger.png" alt="открыть меню"/>
                    </div>
                </div>
                <div className={isBurgerActive ? "burger-menu burger-menu_active burger-close" : "burger-menu"} onClick={changeIsBurgerActive}>
                        <div className={isBurgerActive ? "burger-menu__content vov fade-in-left burger-menu__content_worker" : "burger-menu__content burger-menu__content_worker"}>
                            <header className="burger-menu__header">
                                <div className="burger-menu__nav">
                                    <a href="https://skilla.ru/">
                                        <img src="/static/logo.png" alt="Skilla" />
                                    </a>
                                    <span onClick={() => setIsBurgerActive(false)} className="burger-menu__cross close-menu icon"></span>
                                </div>

                                <div className="burger-menu__links">
                                    <Link to="/worker" className={activePage === 'main' ? "burger-menu__link burger-menu__link_active" : "burger-menu__link"}>Главная</Link>
                                    <Link to="/" className="burger-menu__link">Виды заказов</Link>
                                    <Link to="/" className="burger-menu__link">Отзывы исполнителей</Link>
                                    <Link to="/" className="burger-menu__link">Заказчики</Link>
                                    <Link to="/" className="burger-menu__link">Как начать работать</Link>
                                    <Link to="/" className="burger-menu__link">Правила работы</Link>
                                    <Link to={`/${page}/faq`} className={activePage === 'faq' ? "burger-menu__link burger-menu__link_active" : "burger-menu__link"}>Вопрос-ответ</Link>
                                </div>
                            </header>
                            <footer className="burger-menu__footer">
                                <button className="burger-menu__button" onClick={() => navigate('/worker/download')}>
                                    Скачать приложение
                                    <span className="icon download"></span>
                                </button>
                                <p className="burger-menu__copyright">Skilla © 2010-2022 Копирование информации запрещено</p>
                            </footer>
                        </div>
                </div>
            </div>
        </StyledBurger>}
        {width <= 1399 && <StyledBurgerScroll className={isBurgerActive ? "" : isScrollNavbar ? "scrollnav_active" : ""}>
                <div className="container">
                    <div className="burger">
                        <a href="https://skilla.ru" className="burger__logo">
                            <img src="/static/logo.png" alt="Skilla" />
                        </a>
                        <div className="burger__icon" onClick={() => {
                            if (isBurgerActive) setIsBurgerActive(false)
                            else setIsBurgerActive(true)
                        }}>
                            <img src="/static/nav/burger.png" alt="открыть меню"/>
                        </div>
                    </div>
                </div>
            </StyledBurgerScroll>}
        </>
    )

    if (page === 'business') return (
        <>
            <StyledScrollNavbar className={isScrollNavbar ? "scrollnav_active" : ""}>
                {type !== 'business' ?
                    <div className="container scrollnav_container scrollnav_container_business">
                        <Link to="/business"><img src="/static/business/logo.png" alt="Skilla предпринемателям" className="scrollnav__logo"/></Link>

                        <div className="scrollnav__links scrollnav__links_business">
                            <Link to="/" className="scrollnav__link">Кейсы предпринимателей</Link>
                            <Link to="/" className="scrollnav__link">Обучение</Link>
                            <Link to="/" className="scrollnav__link">Бизнес-Герои</Link>
                            <Link to="/business/faq" className="scrollnav__link">Ворос-ответ</Link>
                            <Link to="/" className="scrollnav__link">О компании</Link>
                            <Link to="/business/franchise" className={activePage === 'franchise' ? "scrollnav__link scrollnav__link_active" : "scrollnav__link"}>Франшиза</Link>
                            <button className="scrollnav__button scrollnav__button_business">Стать партнером</button>
                        </div>
                    </div>
                :
                    <div className="container scrollnav_container scrollnav_container_business_only">
                        <a href="#">
                            <img alt="Как открыть свой бизнес со 100% гарантией успеха" src="/static/business/nav/image.png" className="scrollnav__description" />
                        </a>

                        <p className="scrollnav__time">Бесплатный вебинар 18 июля в 19:30 мск</p>
                    </div>
                }
            </StyledScrollNavbar>
            <StyledNavbar>
                <div className="container">
                    <header className="nav__header">
                        <div className="nav__info">
                            <a href="https://skilla.ru">
                                <img src="/static/logo.png" alt="логотип" className="nav__logo"/>
                            </a>
                            <div className="nav__tabs nav__tabs_business">
                                <Link to="/customer" className="nav__tab">Заказчикам</Link>
                                <Link to="/business" className="nav__tab nav__tab_active">Предпринимателям</Link>
                                <Link to="/worker" className="nav__tab">Исполнителям</Link>
                            </div>
                        </div>

                        <button className="nav__button nav__button_business">
                            Вход в Skilla IS
                            <span className="cabinet-link icon" />
                        </button>
                    </header>

                    <footer className="nav__footer nav__footer_business">
                        <Link to="/business" className={activePage === 'main' ? "nav__link nav__link_active" : "nav__link"}>Главная</Link>
                        <Link to="/" className="nav__link">Кейсы предпринимателей</Link>
                        <Link to="/" className="nav__link">Обучение</Link>
                        <Link to="/" className="nav__link">Бизнес-Герои</Link>
                        <Link to={`/${page}/faq`} className={activePage === 'faq' ? "nav__link nav__link_active" : "nav__link"}>Вопрос-ответ</Link>
                        <Link to="/" className="nav__link">О компании</Link>
                        <Link to="/business/franchise" className={activePage === 'franchise' ? "nav__link nav__link_active" : "nav__link"}>Франшиза</Link>
                        <Link to="/" className="nav__link">Стать партнером</Link>
                    </footer>
                </div>
            </StyledNavbar>
            {width <= 1399 && <StyledBurger>
                <div className="container">
                    <div className="burger">
                        <a href="https://skilla.ru" className="burger__logo">
                            <img src="/static/business/logo.png" alt="логотип" />
                        </a>
                        <div className="burger__icon" onClick={() => {
                            if (isBurgerActive) setIsBurgerActive(false)
                            else setIsBurgerActive(true)
                        }}>
                            <img src="/static/nav/burger.png" alt="открыть меню"/>
                        </div>
                    </div>
                    <div className={isBurgerActive ? "burger-menu burger-menu_active burger-close" : "burger-menu burger-close"} onClick={changeIsBurgerActive}>
                        <div className={isBurgerActive ? "burger-menu__content vov fade-in-left burger-menu__content_business" : "burger-menu__content burger-menu__content_business"}>
                            <header className="burger-menu__header">
                                <div className="burger-menu__nav">
                                    <a href="https://skilla.ru/">
                                        <img src="/static/logo.png" alt="Skilla" />
                                    </a>
                                    <span onClick={() => setIsBurgerActive(false)} className="burger-menu__cross close-menu icon"></span>
                                </div>

                                <div className="burger-menu__links burger-menu__links_business">
                                    <Link to="/business" className={activePage === 'main' ? "burger-menu__link burger-menu__link_active" : "burger-menu__link"}>Главная</Link>
                                    <Link to="/" className="burger-menu__link">Виды заказов</Link>
                                    <Link to="/" className="burger-menu__link">Отзывы исполнителей</Link>
                                    <Link to="/" className="burger-menu__link">Заказчики</Link>
                                    <Link to="/" className="burger-menu__link">Как начать работать</Link>
                                    <Link to="/" className="burger-menu__link">Правила работы</Link>
                                    <Link to={`/${page}/faq`} className={activePage === 'faq' ? "burger-menu__link burger-menu__link_active" : "burger-menu__link"}>Вопрос-ответ</Link>
                                </div>
                            </header>
                            <footer className="burger-menu__footer">
                                <button className="burger-menu__button burger-menu__button_business" onClick={() => navigate('/')}>
                                    Вход в Skilla IS
                                    <span className="icon cabinet-link"></span>
                                </button>
                                <p className="burger-menu__copyright">Skilla © 2010-2022 Копирование информации запрещено</p>
                            </footer>
                        </div>
                    </div>
                </div>
            </StyledBurger>}
            {width <= 1399 && <StyledBurgerScroll className={isBurgerActive ? "" : isScrollNavbar ? "scrollnav_active" : ""}>
                <div className="container">
                    <div className="burger">
                        <a href="https://skilla.ru" className="burger__logo">
                            <img src="/static/logo.png" alt="логотип" />
                        </a>
                        <div className="burger__icon" onClick={() => {
                            if (isBurgerActive) setIsBurgerActive(false)
                            else setIsBurgerActive(true)
                        }}>
                            <img src="/static/nav/burger.png" alt="открыть меню"/>
                        </div>
                    </div>
                </div>
            </StyledBurgerScroll>}
        </>
    )

    return null
}

const StyledScrollNavbar = styled.nav`
  position: fixed;
  z-index: 15;
  top: -65px;
  left: 0;
  padding: 11px 0;
  width: 100%;
  height: 65px;
  background-color: #000729;
  display: flex;
  align-items: center;
  transition: top .3s ease;
  
  .scrollnav_container_business_only {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    & .scrollnav__time {
      color: #fff;
      font-weight: 400;
      font-size: 18px;
      line-height: 1.3em;
    }
    
    & .scrollnav__description {
      margin-bottom: -16px;
    }
  }
  
  &.scrollnav_active {
    top: 0;
  }
  
  .scrollnav__links {
    display: flex;
    align-items: center;
    gap: 42px;
  }
  
  .scrollnav__links_business {
    grid-gap: 52px;
  }
  
  .scrollnav__link {
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    line-height: 1.3em;
    color: #E3E4E8;
    transition: color .3s ease;
    
    &:hover {
      color: #fff;
    }
  }
  
  .scrollnav__links_worker {
    gap: 74px;
  }
  
  .scrollnav__button {
    border: 0;
    font-weight: 600;
    padding: 9.5px 20px;
    font-size: 16px;
    line-height: 1.3em;
    color: #E3E4E8;
    border-radius: 4px;
    background-color: #303550;
    cursor: pointer;
    transition: background-color .3s ease, color .3s ease;
    
    &:hover {
      background-color: #002CFB;
    }
  }
  
  .scrollnav__button_worker:hover {
    background-color: #8800FF;
  }
  
  .scrollnav__button_business:hover {
    background-color: #00FF88;
    color: #000729;
    
    & span {
      
    }
  }
  
  .scrollnav_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .scrollnav_container_business {
    width: 1470px;
  }

  @media screen and (max-width: 1399px) {
    display: none;
  }
`

const StyledNavbar = styled.nav`
  position: absolute;
  left: 0;
  right: 0;
  top: 40px;
  z-index: 10;
  
  .nav__tabs_worker {
    & .nav__tab_active {
      background-color: #8800FF;
    }
  }

  .nav__tabs_business {
    background-color: rgba(0,7,41,0.5) !important;
    
    & .nav__tab {
      &:first-child {
        border-radius: 4px 0 0 4px;
      }

      &:last-child {
        border-radius: 0 4px 4px 0;
      }
      
      &:not(.nav__tab_active):hover {
        color: rgba(143, 146, 163, 1) !important;
      }
    }
    
    & .nav__tab_active {
      background-color: #00FF88;
      color: #0F1324;
      font-weight: 600;
    }
  }
  
  .nav__link_active {
    font-weight: 700;
  }
  
  .nav__tabs {
    display: flex;
    border-radius: 4px;
    width: min-content;
    margin-left: 25px;
    background-color: rgba(149, 168, 255, 0.2);
  }
  
  .nav__tab {
    display: block;
    padding: 10px 20px;
    font-size: 16px;
    line-height: 21px;
    text-decoration: none;
    font-weight: 500;
    color: #fff;
    cursor: pointer;
    transition: color .3s ease;
    
    &:hover:not(.nav__tab_active) {
      color: #97A8FF;
    }
  }
  
  .nav__tab_active {
    background-color: #002CFB;
    border-radius: 4px;
  }
  
  .nav__info {
    display: flex;
    align-items: center;
  }
  
  .nav__button {
    padding: 10px 20px;
    display: flex;
    align-items: center;
    font-family: 'Raleway';
    font-weight: 600;
    color: #fff;
    border: 0;
    font-size: 16px;
    border-radius: 4px;
    background-color: rgba(149, 168, 255, 0.2);
    cursor: pointer;
    transition: background-color .3s ease, color .3s ease;
    
    & .icon {
      margin-left: 15px;
    }
    
    &.nav__button_worker:hover {
      background-color: #8800FF;
    }
    
    &.nav__button_business {
      background-color: rgba(0, 7, 41, 0.5);
    }
    
    &.nav__button_business:hover {
      background-color: #00FF88;
      color: #000729;
      
      & span {
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M6 1H14V15H6' stroke='%23000729' stroke-width='1.5'/%3e%3cpath d='M6.37986 4.20896L10.0854 7.91455M10.0854 7.91455L6.37986 11.6201M10.0854 7.91455H1' stroke='%23000729' stroke-width='1.5'/%3e%3c/svg%3e ");
      }
    }
    
    &:hover {
      background-color: #002CFB;
    }
  }
  
  .nav__header {
    display: flex;
    justify-content: space-between;
  }
  
  .nav__footer {
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
  }
  
  .nav__footer_business .nav__link_active {
    background-color: rgba(0, 7, 41, 0.5);
    padding: 4px 12px;
    border-radius: 4px;
    margin-top: -4px;
  }
  
  .nav__link {
    font-size: 18px;
    line-height: 24px;
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    transition: background-color .3s ease, padding .3s ease, border-radius .3s ease, margin-top .3s ease, color .3s ease;
    
    &:hover:not(.nav__link_active) {
      color: rgba(0, 255, 136, 1);
    }
  }
  
  .nav__link_active {
    font-weight: 700;
  }
  
  @media screen and (max-width: 1399px) {
    display: none;
  }
`

const StyledBurger = styled.nav`
  background-color: transparent;
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 15;
  
  .burger {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
  
  .burger-menu {
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 7, 41, 0.4);
  }
  
  .burger-menu__content {
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 60px 16px 40px 16px;
    width: 315px;
    height: 100%;
    background: url("/static/customer/nav/background_mobile.png") no-repeat center top / cover;
  }
  
  .burger-menu__content_worker {
    background: url("/static/worker/nav/background_mobile.png") no-repeat center top / cover;
  }

  .burger-menu__content_business {
    background: url("/static/business/nav/background_mobile.png") no-repeat center top / cover;
  }
  
  .burger-menu_active {
    display: block;
  }
  
  .burger-menu__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .burger-menu__links {
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    grid-gap: 24px;
    margin-top: 60px;
  }

  .burger-menu__link {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.7);
    font-size: 18px;
    line-height: 1.3em;
    transition: color .3s ease;

    &:not(.burger-menu__link_active):hover {
      text-decoration: underline;
      color: #fff;
    }
  }

  .burger-menu__link_active {
    color: #fff;
  }

  .burger-menu__links_business {
    grid-gap: 20px;
  }
  
  .burger-menu__links_business .burger-menu__link {
    text-decoration: none;
    color: #E3E4E8;
    padding: 4px 8px;
    border-radius: 4px;
    background-color: transparent;
    font-size: 18px;
    line-height: 1.3em;
    width: max-content;
    transition: background-color .3s ease, color .3s ease;
    
    &.burger-menu__link_active {
      background-color: rgba(0, 7, 41, 0.5);
      color: #fff !important;
    }
    
    &:not(.burger-menu__link_active):hover {
      color: #00FF88;
      text-decoration: none;
    }
  }

  .burger-menu__button {
    width: 100%;
    padding: 13px 10px;
    border-radius: 4px;
    border: 0;
    background-color: rgba(231, 204, 255, 0.25);
    color: #fff;
    font-family: inherit;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.3em;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    transition: background-color .3s ease, color .3s ease;

    & span {
      margin-left: 15px;
      width: 16px;
      height: 23px;
    }
    
    &:hover {
      background-color: #8800FF;
    }
  }
  
  .burger-menu__button_business {
    background-color: rgba(0, 7, 41, 0.5);
    
    &:hover {
      background-color: #00FF88;
      color: #000729;
      
      & span {
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M6 1H14V15H6' stroke='%23000729' stroke-width='1.5'/%3e%3cpath d='M6.37986 4.20896L10.0854 7.91455M10.0854 7.91455L6.37986 11.6201M10.0854 7.91455H1' stroke='%23000729' stroke-width='1.5'/%3e%3c/svg%3e ");
      }
    }
    
    & span {
      width: 24px;
      height: 24px;
    }
  }
  
  .burger-menu__copyright {
    font-size: 14px;
    line-height: 1.3em;
    margin-top: 32px;
    color: rgba(255, 255, 255, 0.4);
  }
`

const StyledBurgerScroll = styled.nav`
  background-color: #000729;
  padding: 18px 0;
  position: fixed;
  z-index: 10;
  top: -70px;
  left: 0;
  right: 0;
  margin: auto;
  transition: top .3s ease;
  
  &.scrollnav_active {
    top: 0;
  }

  .burger {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  .burger-menu {
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 7, 41, 0.4);
  }

  .burger-menu__content {
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 60px 16px 40px 16px;
    width: 315px;
    height: 100%;
    background: url("/static/customer/nav/background_mobile.png") no-repeat center top / cover;
  }

  .burger-menu__content_worker {
    background: url("/static/worker/nav/background_mobile.png") no-repeat center top / cover;
  }

  .burger-menu__content_business {
    background: url("/static/business/nav/background_mobile.png") no-repeat center top / cover;
  }

  .burger-menu_active {
    display: block;
  }

  .burger-menu__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .burger-menu__links {
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    grid-gap: 24px;
    margin-top: 60px;
  }

  .burger-menu__link {
    text-decoration: none;
    color: #E3E4E8;
    font-size: 18px;
    line-height: 1.3em;
    transition: color .3s ease;

    &:hover {
      text-decoration: underline;
      color: #fff;
    }
  }

  .burger-menu__links_business {
    grid-gap: 20px;
  }

  .burger-menu__links_business .burger-menu__link {
    text-decoration: none;
    color: #E3E4E8;
    padding: 4px 8px;
    border-radius: 4px;
    background-color: transparent;
    font-size: 18px;
    line-height: 1.3em;
    width: max-content;
    transition: background-color .3s ease, color .3s ease;

    &.burger-menu__link_active {
      background-color: rgba(0, 7, 41, 0.5);
      color: #fff;
    }

    &:hover {
      color: #00FF88;
    }
  }

  .burger-menu__button {
    width: 100%;
    padding: 13px 10px;
    border-radius: 4px;
    border: 0;
    background-color: rgba(231, 204, 255, 0.25);
    color: #fff;
    font-family: inherit;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.3em;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    transition: background-color .3s ease;

    & span {
      margin-left: 15px;
      width: 16px;
      height: 23px;
    }

    &:hover {
      background-color: #8800FF;
    }
  }

  .burger-menu__button_business {
    background-color: rgba(0, 7, 41, 0.5);

    &:hover {
      background-color: #00FF88;
      color: #000729;
    }

    & span {
      width: 24px;
      height: 24px;
    }
  }

  .burger-menu__copyright {
    font-size: 14px;
    line-height: 1.3em;
    margin-top: 32px;
    color: rgba(255, 255, 255, 0.4);
  }
`

export default Navbar