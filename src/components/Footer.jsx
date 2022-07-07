import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom";
import RadioGroup from "./RadioGroup";

const Footer = ({ page, submitForm, phone, setPhone, type='' }) => {
    const [ radio, setRadio ] = useState('telegram')
    const [ width, setWidth ] = useState(window?.innerWidth)

    const setTab = (e) => {
        const childrenCount = e.target.children.length
        let childrenItems = []

        if (childrenCount) {
            childrenItems = Array.from(e.target.children)
        } else {
            childrenItems = Array.from(e.target.parentNode.children)
        }

        childrenItems.forEach(children => {
            if (children.classList.value.includes('active')) {
                children.classList.remove('active')
            } else {
                children.classList.add('active')
            }
        })
    }

    useEffect(() => {
        const cb = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', cb)

        return () => window.removeEventListener('resize', cb)
    }, [])

    if (page === 'customer') return (
        <>
        {width > 1399 && <StyledFooter>
            {type !== 'faq' && <header className="footer-header">
                <div className="container container_footer-header">
                    <div className="footer-header__content">
                        <div>
                            <h2 className="footer-header__title">Хотите заказать исполнителей?</h2>
                            <p className="footer-header__description">Оставьте заявку, мы вам перезвоним</p>

                            <form action="" className="header__form footer-header__form">
                                <input type="tel" required placeholder="+7 (___) ___-__-__" className="header__input" />
                                <button className="header__button">
                                    Разместить заказ
                                    <span className="arrow-right-big icon" />
                                </button>
                                <input type="text" placeholder="ИНН" className="header__input" />
                            </form>

                            <div className="header__clients">
                                <a href="#" className="header__client">
                                    <img src="/static/customer/header/links/01.png" alt="изображение"/>
                                </a>

                                <a href="#" className="header__client">
                                    <img src="/static/customer/header/links/02.png" alt="изображение"/>
                                </a>

                                <a href="#" className="header__client">
                                    <img src="/static/customer/header/links/03.png" alt="изображение"/>
                                </a>

                                <a href="#" className="header__client">
                                    <img src="/static/customer/header/links/04.png" alt="изображение"/>
                                </a>
                            </div>
                        </div>

                        <p className="header__info">Отправляя форму, вы соглашаетесь с <a href="#">условиями</a></p>
                    </div>
                    <img src="/static/customer/footer/header/illustration.png" alt="иллюстрация" className="footer-header__image"/>
                </div>
            </header>}
            <main className="footer-main">
                <div className="container container_footer-main">
                    <div className="footer-main__left">
                        <div className="footer-main__logo">
                            <div>
                                <img src="/static/logo.png" alt="логотип"/>
                                <span>Заказчикам</span>
                            </div>
                            <p>Технологичная HR-Tech площадка</p>
                        </div>
                        <div className="footer-main-important">
                            <img src="/static/customer/footer/main/qr-code.png" alt="qr-code" className="footer-main-important__qr-code"/>

                            <div className="footer-main-important__links">
                                <a href="#" className="footer-main-important__link">Условия договора оферты</a>
                                <a href="#" className="footer-main-important__link">Политика конфиденциальности</a>
                                <a href="#" className="footer-main-important__link">Правила платежей и возвратов</a>
                            </div>

                            <div className="footer-main-important__images">
                                <a href="#">
                                    <img src="/static/customer/footer/main/pay/01.png" alt="MasterCard" className="footer-main-important__image"/>
                                </a>
                                <a href="#">
                                    <img src="/static/customer/footer/main/pay/02.png" alt="МИР" className="footer-main-important__image"/>
                                </a>
                                <a href="#">
                                    <img src="/static/customer/footer/main/pay/03.png" alt="Visa" className="footer-main-important__image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-main-right">
                        <header className="footer-main-right__header">
                            <div className="footer-main-item">
                                <h5 className="footer-main-item__title">Заказчикам</h5>

                                <div className="footer-main-item__links">
                                    <a href="#" className="footer-main-item__link">Готовые решения бизнесу</a>
                                    <a href="#" className="footer-main-item__link">Карта присутствия</a>
                                    <a href="#" className="footer-main-item__link">Технологии</a>
                                    <a href="#" className="footer-main-item__link">Госконтракты и тендеры</a>
                                    <Link to="/customer/faq" className="footer-main-item__link">Вопрос-ответ</Link>
                                    <a href="#" className="footer-main-item__link">Skilla Журнал</a>
                                </div>

                                <button className="footer-main-item__button">Разместить заказ</button>
                            </div>

                            <div className="footer-main-item">
                                <h5 className="footer-main-item__title">Предпринимателям</h5>






                                <div className="footer-main-item__links">
                                    <a href="#" className="footer-main-item__link">Кейсы</a>
                                    <a href="#" className="footer-main-item__link">Обучение</a>
                                    <a href="#" className="footer-main-item__link">Бизнес-Герои</a>
                                    <Link to="/business/faq" className="footer-main-item__link">Вопрос-ответ</Link>
                                    <a href="#" className="footer-main-item__link">О компании</a>
                                    <a href="#" className="footer-main-item__link">Франшиза</a>
                                </div>

                                <button className="footer-main-item__button">Стать партнером</button>
                            </div>

                            <div className="footer-main-item">
                                <h5 className="footer-main-item__title">Исполнителям</h5>

                                <div className="footer-main-item__links">
                                    <a href="#" className="footer-main-item__link">Виды заказов</a>
                                    <a href="#" className="footer-main-item__link">Отзывы исполнителей</a>
                                    <a href="#" className="footer-main-item__link">Заказчики</a>
                                    <a href="#" className="footer-main-item__link">Как начать</a>
                                    <a href="#" className="footer-main-item__link">Условия работы</a>
                                    <Link to="/worker/faq" className="footer-main-item__link">Вопрос-ответ</Link>
                                    <a href="#" className="footer-main-item__link">Скачать приложение</a>
                                </div>

                                <button className="footer-main-item__button">Стать исполнителем</button>
                            </div>

                            <div className="footer-main-item">
                                <h5 className="footer-main-item__title">Соискателям</h5>

                                <div className="footer-main-item__links">
                                    <a href="#" className="footer-main-item__link">Про Skilla</a>
                                    <a href="#" className="footer-main-item__link">Вакансии</a>
                                    <a href="#" className="footer-main-item__link">Наш офис</a>
                                </div>
                            </div>
                        </header>
                        <footer className="footer-main-right__footer">
                            <div className="footer-main-right__images">
                                <a href="#">
                                    <img src="/static/customer/footer/main/media/01.png" alt="ВК" className="footer-main-right__image"/>
                                </a>
                                <a href="#">
                                    <img src="/static/customer/footer/main/media/02.png" alt="Instagram" className="footer-main-right__image"/>
                                </a>
                                <a href="#">
                                    <img src="/static/customer/footer/main/media/03.png" alt="YouTube" className="footer-main-right__image"/>
                                </a>
                            </div>
                            <div className="footer-main-right__flex">
                                <p className="footer-main-right__description">Skilla © 2010-2022 Копирование информации запрещено <span />ООО «Скилла Инновации» ИНН 123456789 ИП Упоров Кирилл Андреевич ИНН 1234567890123  <span />Санкт-Петербург, пр. Энергетиков, д.10, оф.416 work@skilla.ru +7 (800) 333-17-21</p>
                                <a href="#" className="footer-main-right__button">
                                    <img src="/static/customer/footer/main/mini-logo.png" alt="логотип"/>
                                    <span className="arrow-right-top-smail icon"></span>
                                </a>
                            </div>
                        </footer>
                    </div>
                </div>
            </main>
            <footer className="footer-footer">
                <div className="container container_footer-footer">
                    <a href="#">
                        <img src="/static/customer/footer/footer/01.png" alt="App Store" className="footer-footer__image"/>
                    </a>

                    <a href="#">
                        <img src="/static/customer/footer/footer/02.png" alt="Google Play" className="footer-footer__image"/>
                    </a>

                    <a href="#">
                        <img src="/static/customer/footer/footer/03.png" alt="NASHSTORE" className="footer-footer__image"/>
                    </a>

                    <a href="#">
                        <img src="/static/customer/footer/footer/04.png" alt="AppGallery" className="footer-footer__image"/>
                    </a>
                </div>
            </footer>
        </StyledFooter>}
        {width <= 1399 && <StyledFooterMobile>
        {type !== 'faq' && <header className="footer-header footer-header">
            <div className="container container_footer-header">
                <div className="footer-header__content">
                    <div>
                        <h2 className="footer-header__title footer-header__title_worker">Хотите заказать исполнителей?</h2>
                        <form action="" className="header__form">
                            <input type="tel" required placeholder="+7 (___) ___-__-__" className="header__input" />
                            <button className="header__button">
                                Разместить заказ
                                <span className="arrow-right-big icon" />
                            </button>
                            <input type="text" placeholder="0000-000-000" className="header__input" />
                        </form>
                    </div>
                </div>
                <img src="/static/customer/footer/header/illustration.png" alt="иллюстрация" className="footer-header__image"/>
            </div>
        </header>}
        <main className="footer-main footer-main">
            <div className="container container_footer-main">
                <div className="footer-main__logo">
                    <div>
                        <img src="/static/logo.png" alt="логотип"/>
                        <span>Заказчикам</span>
                    </div>
                    <p>Технологичная HR-Tech площадка</p>
                </div>
                <div className="footer-main__items">
                    <div className="footer-main-item" onClick={setTab}>
                        <h5 className="footer-main-item__title">Заказчикам</h5>

                        <div className="footer-main-item__links">
                            <a href="#" className="footer-main-item__link">Готовые решения бизнесу</a>
                            <a href="#" className="footer-main-item__link">Карта присутствия</a>
                            <a href="#" className="footer-main-item__link">Технологии</a>
                            <a href="#" className="footer-main-item__link">Госконтракты и тендеры</a>
                            <Link to="/customer/faq" className="footer-main-item__link">Вопрос-ответ</Link>
                            <a href="#" className="footer-main-item__link">Skilla Журнал</a>
                        </div>

                        <button className="footer-main-item__button">Разместить заказ</button>
                    </div>
                    <div className="footer-main-item" onClick={setTab}>
                        <h5 className="footer-main-item__title">Предпринимателям</h5>

                        <div className="footer-main-item__links">
                            <a href="#" className="footer-main-item__link">Кейсы</a>
                            <a href="#" className="footer-main-item__link">Обучение</a>
                            <a href="#" className="footer-main-item__link">Бизнес-Герои</a>
                            <Link to="/business/faq" className="footer-main-item__link">Вопрос-ответ</Link>
                            <a href="#" className="footer-main-item__link">О компании</a>
                            <a href="#" className="footer-main-item__link">Франшиза</a>
                        </div>

                        <button className="footer-main-item__button">Стать партнером</button>
                    </div>
                    <div className="footer-main-item" onClick={setTab}>
                        <h5 className="footer-main-item__title">Исполнителям</h5>

                        <div className="footer-main-item__links">
                            <a href="#" className="footer-main-item__link">Виды заказов</a>
                            <a href="#" className="footer-main-item__link">Отзывы исполнителей</a>
                            <a href="#" className="footer-main-item__link">Заказчики</a>
                            <a href="#" className="footer-main-item__link">Как начать</a>
                            <a href="#" className="footer-main-item__link">Условия работы</a>
                            <Link to="/worker/faq" className="footer-main-item__link">Вопрос-ответ</Link>
                            <a href="#" className="footer-main-item__link">Скачать приложение</a>
                        </div>

                        <button className="footer-main-item__button">Стать исполнителем</button>
                    </div>
                    <div className="footer-main-item" onClick={setTab}>
                        <h5 className="footer-main-item__title">Соискателям</h5>

                        <div className="footer-main-item__links">
                            <a href="#" className="footer-main-item__link">Про Skilla</a>
                            <a href="#" className="footer-main-item__link">Вакансии</a>
                            <a href="#" className="footer-main-item__link">Наш офис</a>
                        </div>
                    </div>
                </div>
                <div className="footer-main-right__images">
                    <a href="#">
                        <img src="/static/customer/footer/main/media/01.png" alt="ВК" className="footer-main-right__image"/>
                    </a>
                    <a href="#">
                        <img src="/static/customer/footer/main/media/02.png" alt="Instagram" className="footer-main-right__image"/>
                    </a>
                    <a href="#">
                        <img src="/static/customer/footer/main/media/03.png" alt="YouTube" className="footer-main-right__image"/>
                    </a>
                </div>
                <div className="footer-main-important__links">
                    <a href="#" className="footer-main-important__link">Условия договора оферты</a>
                    <a href="#" className="footer-main-important__link">Политика конфиденциальности</a>
                    <a href="#" className="footer-main-important__link">Правила платежей и возвратов</a>
                </div>
                <div className="footer-main-important__images">
                    <a href="#">
                        <img src="/static/customer/footer/main/pay/01.png" alt="MasterCard" className="footer-main-important__image"/>
                    </a>
                    <a href="#">
                        <img src="/static/customer/footer/main/pay/02.png" alt="МИР" className="footer-main-important__image"/>
                    </a>
                    <a href="#">
                        <img src="/static/customer/footer/main/pay/03.png" alt="Visa" className="footer-main-important__image"/>
                    </a>
                </div>
                <p className="footer-main-right__description">Skilla © 2010-2022 Копирование информации запрещено <span />ООО «Скилла Инновации» ИНН 123456789 ИП Упоров Кирилл Андреевич ИНН 1234567890123  <span />Санкт-Петербург, пр. Энергетиков, д.10, оф.416 work@skilla.ru +7 (800) 333-17-21</p>
                <a href="#" className="footer-main-right__button">
                    <img src="/static/customer/footer/main/mini-logo.png" alt="логотип"/>
                    <span className="arrow-right-top-smail icon"></span>
                </a>
            </div>
        </main>
        <footer className="footer-footer">
            <div className="container container_footer-footer">
                <a href="#">
                    <img src="/static/customer/footer/footer/01.png" alt="App Store" className="footer-footer__image"/>
                </a>

                <a href="#">
                    <img src="/static/customer/footer/footer/02.png" alt="Google Play" className="footer-footer__image"/>
                </a>

                <a href="#">
                    <img src="/static/customer/footer/footer/03.png" alt="NASHSTORE" className="footer-footer__image"/>
                </a>

                <a href="#">
                    <img src="/static/customer/footer/footer/04.png" alt="AppGallery" className="footer-footer__image"/>
                </a>
            </div>
        </footer>
    </StyledFooterMobile>}
    </>
    )

    if (page === 'worker') return (
        <>
        {width > 1399 && <StyledFooter>
            {type !== 'faq' && <header className="footer-header footer-header_worker">
                <div className="container container_footer-header">
                    <div className="footer-header__content_worker">
                        <div>
                            <img src="/static/worker/download/icon.png" alt="Skilla работа" className="footer-header__icon"/>
                            <h2 className="footer-header__title footer-header__title_worker">Скачай <span>приложение</span> и зарабатывай вместе с <br /><span>75 000+</span> исполнителями</h2>

                            <div className="header__clients header__clients_worker">
                                <a href="#" className="header__client">
                                    <img src="/static/customer/header/links/01.png" alt="изображение"/>
                                </a>

                                <a href="#" className="header__client">
                                    <img src="/static/customer/header/links/02.png" alt="изображение"/>
                                </a>

                                <a href="#" className="header__client">
                                    <img src="/static/customer/header/links/03.png" alt="изображение"/>
                                </a>

                                <a href="#" className="header__client">
                                    <img src="/static/customer/header/links/04.png" alt="изображение"/>
                                </a>
                            </div>

                            <img src="/static/worker/download/qr-code.png" alt="qr-code" className="footer-header__qr-code"/>
                        </div>
                    </div>
                    <img src="/static/worker/footer/header/illustration.png" alt="иллюстрация" className="footer-header__image footer-header__image_worker"/>
                </div>
            </header>}
            <main className="footer-main footer-main_worker">
                <div className="container container_footer-main">
                    <div className="footer-main__left">
                        <div className="footer-main__logo">
                            <div>
                                <img src="/static/logo.png" alt="логотип"/>
                                <span>Исполнителям</span>
                            </div>
                            <p>Технологичная HR-Tech площадка</p>
                        </div>
                        <div className="footer-main-important">
                            <img src="/static/customer/footer/main/qr-code.png" alt="qr-code" className="footer-main-important__qr-code"/>

                            <div className="footer-main-important__links">
                                <a href="#" className="footer-main-important__link">Условия договора оферты</a>
                                <a href="#" className="footer-main-important__link">Политика конфиденциальности</a>
                                <a href="#" className="footer-main-important__link">Правила платежей и возвратов</a>
                            </div>

                            <div className="footer-main-important__images">
                                <a href="#">
                                    <img src="/static/customer/footer/main/pay/01.png" alt="MasterCard" className="footer-main-important__image"/>
                                </a>
                                <a href="#">
                                    <img src="/static/customer/footer/main/pay/02.png" alt="МИР" className="footer-main-important__image"/>
                                </a>
                                <a href="#">
                                    <img src="/static/customer/footer/main/pay/03.png" alt="Visa" className="footer-main-important__image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-main-right">
                        <header className="footer-main-right__header">
                            <div className="footer-main-item">
                                <h5 className="footer-main-item__title">Заказчикам</h5>

                                <div className="footer-main-item__links">
                                    <a href="#" className="footer-main-item__link">Готовые решения бизнесу</a>
                                    <a href="#" className="footer-main-item__link">Карта присутствия</a>
                                    <a href="#" className="footer-main-item__link">Технологии</a>
                                    <a href="#" className="footer-main-item__link">Госконтракты и тендеры</a>
                                    <Link to="/customer/faq" className="footer-main-item__link">Вопрос-ответ</Link>
                                    <a href="#" className="footer-main-item__link">Skilla Журнал</a>
                                </div>

                                <button className="footer-main-item__button">Разместить заказ</button>
                            </div>

                            <div className="footer-main-item">
                                <h5 className="footer-main-item__title">Предпринимателям</h5>

                                <div className="footer-main-item__links">
                                    <a href="#" className="footer-main-item__link">Кейсы</a>
                                    <a href="#" className="footer-main-item__link">Обучение</a>
                                    <a href="#" className="footer-main-item__link">Бизнес-Герои</a>
                                    <Link to="/business/faq" className="footer-main-item__link">Вопрос-ответ</Link>
                                    <a href="#" className="footer-main-item__link">О компании</a>
                                    <a href="#" className="footer-main-item__link">Франшиза</a>
                                </div>

                                <button className="footer-main-item__button">Стать партнером</button>
                            </div>

                            <div className="footer-main-item">
                                <h5 className="footer-main-item__title">Исполнителям</h5>

                                <div className="footer-main-item__links">
                                    <a href="#" className="footer-main-item__link">Виды заказов</a>
                                    <a href="#" className="footer-main-item__link">Отзывы исполнителей</a>
                                    <a href="#" className="footer-main-item__link">Заказчики</a>
                                    <a href="#" className="footer-main-item__link">Как начать</a>
                                    <a href="#" className="footer-main-item__link">Условия работы</a>
                                    <Link to="/worker/faq" className="footer-main-item__link">Вопрос-ответ</Link>
                                    <a href="#" className="footer-main-item__link">Скачать приложение</a>
                                </div>

                                <button className="footer-main-item__button">Стать исполнителем</button>
                            </div>

                            <div className="footer-main-item">
                                <h5 className="footer-main-item__title">Соискателям</h5>

                                <div className="footer-main-item__links">
                                    <a href="#" className="footer-main-item__link">Про Skilla</a>
                                    <a href="#" className="footer-main-item__link">Вакансии</a>
                                    <a href="#" className="footer-main-item__link">Наш офис</a>
                                </div>
                            </div>
                        </header>
                        <footer className="footer-main-right__footer">
                            <div className="footer-main-right__images">
                                <a href="#">
                                    <img src="/static/customer/footer/main/media/01.png" alt="ВК" className="footer-main-right__image"/>
                                </a>
                                <a href="#">
                                    <img src="/static/customer/footer/main/media/02.png" alt="Instagram" className="footer-main-right__image"/>
                                </a>
                                <a href="#">
                                    <img src="/static/customer/footer/main/media/03.png" alt="YouTube" className="footer-main-right__image"/>
                                </a>
                            </div>
                            <div className="footer-main-right__flex">
                                <p className="footer-main-right__description">Skilla © 2010-2022 Копирование информации запрещено <span />ООО «Скилла Инновации» ИНН 123456789 ИП Упоров Кирилл Андреевич ИНН 1234567890123  <span />Санкт-Петербург, пр. Энергетиков, д.10, оф.416 work@skilla.ru +7 (800) 333-17-21</p>
                                <a href="#" className="footer-main-right__button">
                                    <img src="/static/customer/footer/main/mini-logo.png" alt="логотип"/>
                                    <span className="arrow-right-top-smail icon"></span>
                                </a>
                            </div>
                        </footer>
                    </div>
                </div>
            </main>
            <footer className="footer-footer">
                <div className="container container_footer-footer">
                    <a href="#">
                        <img src="/static/customer/footer/footer/01.png" alt="App Store" className="footer-footer__image"/>
                    </a>

                    <a href="#">
                        <img src="/static/customer/footer/footer/02.png" alt="Google Play" className="footer-footer__image"/>
                    </a>

                    <a href="#">
                        <img src="/static/customer/footer/footer/03.png" alt="NASHSTORE" className="footer-footer__image"/>
                    </a>

                    <a href="#">
                        <img src="/static/customer/footer/footer/04.png" alt="AppGallery" className="footer-footer__image"/>
                    </a>
                </div>
            </footer>
        </StyledFooter>}
        {width <= 1399 && <StyledFooterMobile>
            {type !== 'faq' && <header className="footer-header footer-header_worker">
                <div className="container container_footer-header">
                    <div className="footer-header__content_worker">
                        <div>
                            <img src="/static/worker/download/icon.png" alt="Skilla работа" className="footer-header__icon"/>
                            <h2 className="footer-header__title footer-header__title_worker">Скачай <span>приложение</span> и зарабатывай вместе с <br /><span>75 000+</span> исполнителями</h2>

                            <div className="header__clients header__clients_worker">
                                <a href="#" className="header__client">
                                    <img src="/static/customer/header/links/01.png" alt="изображение"/>
                                </a>

                                <a href="#" className="header__client">
                                    <img src="/static/customer/header/links/02.png" alt="изображение"/>
                                </a>

                                <a href="#" className="header__client">
                                    <img src="/static/customer/header/links/03.png" alt="изображение"/>
                                </a>

                                <a href="#" className="header__client">
                                    <img src="/static/customer/header/links/04.png" alt="изображение"/>
                                </a>
                            </div>

                            <img src="/static/worker/download/qr-code.png" alt="qr-code" className="footer-header__qr-code"/>
                        </div>
                    </div>
                    <img src="/static/worker/footer/header/illustration.png" alt="иллюстрация" className="footer-header__image footer-header__image_worker"/>
                </div>
            </header>}
            <main className="footer-main footer-main_worker">
                <div className="container container_footer-main">
                    <div className="footer-main__logo">
                        <div>
                            <img src="/static/logo.png" alt="логотип"/>
                            <span>Исполнителям</span>
                        </div>
                        <p>Технологичная HR-Tech площадка</p>
                    </div>
                    <div className="footer-main__items">
                        <div className="footer-main-item" onClick={setTab}>
                            <h5 className="footer-main-item__title">Заказчикам</h5>

                            <div className="footer-main-item__links">
                                <a href="#" className="footer-main-item__link">Готовые решения бизнесу</a>
                                <a href="#" className="footer-main-item__link">Карта присутствия</a>
                                <a href="#" className="footer-main-item__link">Технологии</a>
                                <a href="#" className="footer-main-item__link">Госконтракты и тендеры</a>
                                <Link to="/customer/faq" className="footer-main-item__link">Вопрос-ответ</Link>
                                <a href="#" className="footer-main-item__link">Skilla Журнал</a>
                            </div>

                            <button className="footer-main-item__button">Разместить заказ</button>
                        </div>
                        <div className="footer-main-item" onClick={setTab}>
                            <h5 className="footer-main-item__title">Предпринимателям</h5>

                            <div className="footer-main-item__links">
                                <a href="#" className="footer-main-item__link">Кейсы</a>
                                <a href="#" className="footer-main-item__link">Обучение</a>
                                <a href="#" className="footer-main-item__link">Бизнес-Герои</a>
                                <Link to="/business/faq" className="footer-main-item__link">Вопрос-ответ</Link>
                                <a href="#" className="footer-main-item__link">О компании</a>
                                <a href="#" className="footer-main-item__link">Франшиза</a>
                            </div>

                            <button className="footer-main-item__button">Стать партнером</button>
                        </div>
                        <div className="footer-main-item" onClick={setTab}>
                            <h5 className="footer-main-item__title">Исполнителям</h5>

                            <div className="footer-main-item__links">
                                <a href="#" className="footer-main-item__link">Виды заказов</a>
                                <a href="#" className="footer-main-item__link">Отзывы исполнителей</a>
                                <a href="#" className="footer-main-item__link">Заказчики</a>
                                <a href="#" className="footer-main-item__link">Как начать</a>
                                <a href="#" className="footer-main-item__link">Условия работы</a>
                                <Link to="/worker/faq" className="footer-main-item__link">Вопрос-ответ</Link>
                                <a href="#" className="footer-main-item__link">Скачать приложение</a>
                            </div>

                            <button className="footer-main-item__button">Стать исполнителем</button>
                        </div>
                        <div className="footer-main-item" onClick={setTab}>
                            <h5 className="footer-main-item__title">Соискателям</h5>

                            <div className="footer-main-item__links">
                                <a href="#" className="footer-main-item__link">Про Skilla</a>
                                <a href="#" className="footer-main-item__link">Вакансии</a>
                                <a href="#" className="footer-main-item__link">Наш офис</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-main-right__images">
                        <a href="#">
                            <img src="/static/customer/footer/main/media/01.png" alt="ВК" className="footer-main-right__image"/>
                        </a>
                        <a href="#">
                            <img src="/static/customer/footer/main/media/02.png" alt="Instagram" className="footer-main-right__image"/>
                        </a>
                        <a href="#">
                            <img src="/static/customer/footer/main/media/03.png" alt="YouTube" className="footer-main-right__image"/>
                        </a>
                    </div>
                    <div className="footer-main-important__links">
                        <a href="#" className="footer-main-important__link">Условия договора оферты</a>
                        <a href="#" className="footer-main-important__link">Политика конфиденциальности</a>
                        <a href="#" className="footer-main-important__link">Правила платежей и возвратов</a>
                    </div>
                    <div className="footer-main-important__images">
                        <a href="#">
                            <img src="/static/customer/footer/main/pay/01.png" alt="MasterCard" className="footer-main-important__image"/>
                        </a>
                        <a href="#">
                            <img src="/static/customer/footer/main/pay/02.png" alt="МИР" className="footer-main-important__image"/>
                        </a>
                        <a href="#">
                            <img src="/static/customer/footer/main/pay/03.png" alt="Visa" className="footer-main-important__image"/>
                        </a>
                    </div>
                    <p className="footer-main-right__description">Skilla © 2010-2022 Копирование информации запрещено <span />ООО «Скилла Инновации» ИНН 123456789 ИП Упоров Кирилл Андреевич ИНН 1234567890123  <span />Санкт-Петербург, пр. Энергетиков, д.10, оф.416 work@skilla.ru +7 (800) 333-17-21</p>
                    <a href="#" className="footer-main-right__button">
                        <img src="/static/customer/footer/main/mini-logo.png" alt="логотип"/>
                        <span className="arrow-right-top-smail icon"></span>
                    </a>
                </div>
            </main>
            <footer className="footer-footer">
                <div className="container container_footer-footer">
                    <a href="#">
                        <img src="/static/customer/footer/footer/01.png" alt="App Store" className="footer-footer__image"/>
                    </a>

                    <a href="#">
                        <img src="/static/customer/footer/footer/02.png" alt="Google Play" className="footer-footer__image"/>
                    </a>

                    <a href="#">
                        <img src="/static/customer/footer/footer/03.png" alt="NASHSTORE" className="footer-footer__image"/>
                    </a>

                    <a href="#">
                        <img src="/static/customer/footer/footer/04.png" alt="AppGallery" className="footer-footer__image"/>
                    </a>
                </div>
            </footer>
        </StyledFooterMobile>}
        </>
    )

    if (page === 'business') return (
        <>
        {width > 1399 && <StyledFooter>
            {type !== 'faq' && <header className="footer-header footer-header_business">
                <div className="container container_footer-header">
                    <div className="footer-header__content_business">
                        <div>
                            {type === 'main' ? <>
                                    <h2 className="footer-header__title footer-header__title_business footer-header__title_business_main">Получите расчет <span>финансовых показателей</span></h2>
                                    <p className="footer-header__description">Расскажем, сколько можно заработать</p>
                                </>
                                : <>
                                    <h2 className="footer-header__title footer-header__title_business">Откройте <span>партнерский офис</span> в
                                        своем городе</h2>
                                    <p className="footer-header__description">Откройте партнерский офис в своем городе</p>
                                </>
                            }
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

                            <p className="header__info">Отправляя форму, вы соглашаетесь с <a href="#">условиями</a></p>
                        </div>
                    </div>
                    <img src="/static/business/footer/header/illustration.png" alt="иллюстрация" className="footer-header__image footer-header__image_business"/>
                </div>
            </header>}
            <main className="footer-main footer-main_business">
                <div className="container container_footer-main">
                    <div className="footer-main__left">
                        <div className="footer-main__logo">
                            <div>
                                <img src="/static/logo.png" alt="логотип"/>
                                <span>Предпринимателям</span>
                            </div>
                            <p>Технологичная HR-Tech площадка</p>
                        </div>
                        <div className="footer-main-important">
                            <img src="/static/customer/footer/main/qr-code.png" alt="qr-code" className="footer-main-important__qr-code"/>

                            <div className="footer-main-important__links">
                                <a href="#" className="footer-main-important__link">Условия договора оферты</a>
                                <a href="#" className="footer-main-important__link">Политика конфиденциальности</a>
                                <a href="#" className="footer-main-important__link">Правила платежей и возвратов</a>
                            </div>

                            <div className="footer-main-important__images">
                                <a href="#">
                                    <img src="/static/customer/footer/main/pay/01.png" alt="MasterCard" className="footer-main-important__image"/>
                                </a>
                                <a href="#">
                                    <img src="/static/customer/footer/main/pay/02.png" alt="МИР" className="footer-main-important__image"/>
                                </a>
                                <a href="#">
                                    <img src="/static/customer/footer/main/pay/03.png" alt="Visa" className="footer-main-important__image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-main-right">
                        <header className="footer-main-right__header">
                            <div className="footer-main-item">
                                <h5 className="footer-main-item__title">Заказчикам</h5>

                                <div className="footer-main-item__links">
                                    <a href="#" className="footer-main-item__link">Готовые решения бизнесу</a>
                                    <a href="#" className="footer-main-item__link">Карта присутствия</a>
                                    <a href="#" className="footer-main-item__link">Технологии</a>
                                    <a href="#" className="footer-main-item__link">Госконтракты и тендеры</a>
                                    <Link to="/customer/faq" className="footer-main-item__link">Вопрос-ответ</Link>
                                    <a href="#" className="footer-main-item__link">Skilla Журнал</a>
                                </div>

                                <button className="footer-main-item__button">Разместить заказ</button>
                            </div>

                            <div className="footer-main-item">
                                <h5 className="footer-main-item__title">Предпринимателям</h5>

                                <div className="footer-main-item__links">
                                    <a href="#" className="footer-main-item__link">Кейсы</a>
                                    <a href="#" className="footer-main-item__link">Обучение</a>
                                    <a href="#" className="footer-main-item__link">Бизнес-Герои</a>
                                    <Link to="/business/faq" className="footer-main-item__link">Вопрос-ответ</Link>
                                    <a href="#" className="footer-main-item__link">О компании</a>
                                    <a href="#" className="footer-main-item__link">Франшиза</a>
                                </div>

                                <button className="footer-main-item__button">Стать партнером</button>
                            </div>

                            <div className="footer-main-item">
                                <h5 className="footer-main-item__title">Исполнителям</h5>

                                <div className="footer-main-item__links">
                                    <a href="#" className="footer-main-item__link">Виды заказов</a>
                                    <a href="#" className="footer-main-item__link">Отзывы исполнителей</a>
                                    <a href="#" className="footer-main-item__link">Заказчики</a>
                                    <a href="#" className="footer-main-item__link">Как начать</a>
                                    <a href="#" className="footer-main-item__link">Условия работы</a>
                                    <Link to="/worker/faq" className="footer-main-item__link">Вопрос-ответ</Link>
                                    <a href="#" className="footer-main-item__link">Скачать приложение</a>
                                </div>

                                <button className="footer-main-item__button">Стать исполнителем</button>
                            </div>

                            <div className="footer-main-item">
                                <h5 className="footer-main-item__title">Соискателям</h5>

                                <div className="footer-main-item__links">
                                    <a href="#" className="footer-main-item__link">Про Skilla</a>
                                    <a href="#" className="footer-main-item__link">Вакансии</a>
                                    <a href="#" className="footer-main-item__link">Наш офис</a>
                                </div>
                            </div>
                        </header>
                        <footer className="footer-main-right__footer">
                            <div className="footer-main-right__images">
                                <a href="#">
                                    <img src="/static/customer/footer/main/media/01.png" alt="ВК" className="footer-main-right__image"/>
                                </a>
                                <a href="#">
                                    <img src="/static/customer/footer/main/media/02.png" alt="Instagram" className="footer-main-right__image"/>
                                </a>
                                <a href="#">
                                    <img src="/static/customer/footer/main/media/03.png" alt="YouTube" className="footer-main-right__image"/>
                                </a>
                            </div>
                            <div className="footer-main-right__flex">
                                <p className="footer-main-right__description">Skilla © 2010-2022 Копирование информации запрещено <span />ООО «Скилла Инновации» ИНН 123456789 ИП Упоров Кирилл Андреевич ИНН 1234567890123  <span />Санкт-Петербург, пр. Энергетиков, д.10, оф.416 work@skilla.ru +7 (800) 333-17-21</p>
                                <a href="#" className="footer-main-right__button">
                                    <img src="/static/customer/footer/main/mini-logo.png" alt="логотип"/>
                                    <span className="arrow-right-top-smail icon"></span>
                                </a>
                            </div>
                        </footer>
                    </div>
                </div>
            </main>
            <footer className="footer-footer">
                <div className="container container_footer-footer">
                    <a href="#">
                        <img src="/static/customer/footer/footer/01.png" alt="App Store" className="footer-footer__image"/>
                    </a>

                    <a href="#">
                        <img src="/static/customer/footer/footer/02.png" alt="Google Play" className="footer-footer__image"/>
                    </a>

                    <a href="#">
                        <img src="/static/customer/footer/footer/03.png" alt="NASHSTORE" className="footer-footer__image"/>
                    </a>

                    <a href="#">
                        <img src="/static/customer/footer/footer/04.png" alt="AppGallery" className="footer-footer__image"/>
                    </a>
                </div>
            </footer>
        </StyledFooter>}
        {width <= 1399 && <StyledFooterMobile>
                {type !== 'faq' && <header className="footer-header footer-header_business">
                <div className="container container_footer-header">
                    <div className="footer-header__content_business">
                        <div>
                            {type === 'main' ? <>
                                    <h2 className="footer-header__title footer-header__title_business footer-header__title_business_main">Получите расчет <span>финансовых показателей</span></h2>
                                    <p className="footer-header__description">Расскажем, сколько можно заработать</p>
                                </>
                                : <>
                                    <h2 className="footer-header__title footer-header__title_business">Откройте <span>партнерский офис</span> в
                                        своем городе</h2>
                                    <p className="footer-header__description">Откройте партнерский офис в своем городе</p>
                                </>
                            }

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
                            <p className="header__info">Отправляя форму, вы соглашаетесь с <a href="#">условиями</a></p>
                        </div>
                    </div>
                    <img src="/static/business/footer/header/illustration.png" alt="иллюстрация" className="footer-header__image footer-header__image_business"/>
                </div>
            </header>}
                <main className="footer-main footer-main_business">
                    <div className="container container_footer-main">
                        <div className="footer-main__logo">
                            <div>
                                <img src="/static/logo.png" alt="логотип"/>
                                <span>Предпринимателям</span>
                            </div>
                            <p>Технологичная HR-Tech площадка</p>
                        </div>
                        <div className="footer-main__items">
                            <div className="footer-main-item" onClick={setTab}>
                                <h5 className="footer-main-item__title">Заказчикам</h5>

                                <div className="footer-main-item__links">
                                    <a href="#" className="footer-main-item__link">Готовые решения бизнесу</a>
                                    <a href="#" className="footer-main-item__link">Карта присутствия</a>
                                    <a href="#" className="footer-main-item__link">Технологии</a>
                                    <a href="#" className="footer-main-item__link">Госконтракты и тендеры</a>
                                    <Link to="/customer/faq" className="footer-main-item__link">Вопрос-ответ</Link>
                                    <a href="#" className="footer-main-item__link">Skilla Журнал</a>
                                </div>

                                <button className="footer-main-item__button">Разместить заказ</button>
                            </div>
                            <div className="footer-main-item" onClick={setTab}>
                                <h5 className="footer-main-item__title">Предпринимателям</h5>

                                <div className="footer-main-item__links">
                                    <a href="#" className="footer-main-item__link">Кейсы</a>
                                    <a href="#" className="footer-main-item__link">Обучение</a>
                                    <a href="#" className="footer-main-item__link">Бизнес-Герои</a>
                                    <Link to="/business/faq" className="footer-main-item__link">Вопрос-ответ</Link>
                                    <a href="#" className="footer-main-item__link">О компании</a>
                                    <a href="#" className="footer-main-item__link">Франшиза</a>
                                </div>

                                <button className="footer-main-item__button">Стать партнером</button>
                            </div>
                            <div className="footer-main-item" onClick={setTab}>
                                <h5 className="footer-main-item__title">Исполнителям</h5>

                                <div className="footer-main-item__links">
                                    <a href="#" className="footer-main-item__link">Виды заказов</a>
                                    <a href="#" className="footer-main-item__link">Отзывы исполнителей</a>
                                    <a href="#" className="footer-main-item__link">Заказчики</a>
                                    <a href="#" className="footer-main-item__link">Как начать</a>
                                    <a href="#" className="footer-main-item__link">Условия работы</a>
                                    <Link to="/worker/faq" className="footer-main-item__link">Вопрос-ответ</Link>
                                    <a href="#" className="footer-main-item__link">Скачать приложение</a>
                                </div>

                                <button className="footer-main-item__button">Стать исполнителем</button>
                            </div>
                            <div className="footer-main-item" onClick={setTab}>
                                <h5 className="footer-main-item__title">Соискателям</h5>

                                <div className="footer-main-item__links">
                                    <a href="#" className="footer-main-item__link">Про Skilla</a>
                                    <a href="#" className="footer-main-item__link">Вакансии</a>
                                    <a href="#" className="footer-main-item__link">Наш офис</a>
                                </div>
                            </div>
                        </div>
                        <div className="footer-main-right__images">
                            <a href="#">
                                <img src="/static/customer/footer/main/media/01.png" alt="ВК" className="footer-main-right__image"/>
                            </a>
                            <a href="#">
                                <img src="/static/customer/footer/main/media/02.png" alt="Instagram" className="footer-main-right__image"/>
                            </a>
                            <a href="#">
                                <img src="/static/customer/footer/main/media/03.png" alt="YouTube" className="footer-main-right__image"/>
                            </a>
                        </div>
                        <div className="footer-main-important__links">
                            <a href="#" className="footer-main-important__link">Условия договора оферты</a>
                            <a href="#" className="footer-main-important__link">Политика конфиденциальности</a>
                            <a href="#" className="footer-main-important__link">Правила платежей и возвратов</a>
                        </div>
                        <div className="footer-main-important__images">
                            <a href="#">
                                <img src="/static/customer/footer/main/pay/01.png" alt="MasterCard" className="footer-main-important__image"/>
                            </a>
                            <a href="#">
                                <img src="/static/customer/footer/main/pay/02.png" alt="МИР" className="footer-main-important__image"/>
                            </a>
                            <a href="#">
                                <img src="/static/customer/footer/main/pay/03.png" alt="Visa" className="footer-main-important__image"/>
                            </a>
                        </div>
                        <p className="footer-main-right__description">Skilla © 2010-2022 Копирование информации запрещено <span />ООО «Скилла Инновации» ИНН 123456789 ИП Упоров Кирилл Андреевич ИНН 1234567890123  <span />Санкт-Петербург, пр. Энергетиков, д.10, оф.416 work@skilla.ru +7 (800) 333-17-21</p>
                        <a href="#" className="footer-main-right__button">
                            <img src="/static/customer/footer/main/mini-logo.png" alt="логотип"/>
                            <span className="arrow-right-top-smail icon"></span>
                        </a>
                    </div>
                </main>
                <footer className="footer-footer">
                    <div className="container container_footer-footer">
                        <a href="#">
                            <img src="/static/customer/footer/footer/01.png" alt="App Store" className="footer-footer__image"/>
                        </a>

                        <a href="#">
                            <img src="/static/customer/footer/footer/02.png" alt="Google Play" className="footer-footer__image"/>
                        </a>

                        <a href="#">
                            <img src="/static/customer/footer/footer/03.png" alt="NASHSTORE" className="footer-footer__image"/>
                        </a>

                        <a href="#">
                            <img src="/static/customer/footer/footer/04.png" alt="AppGallery" className="footer-footer__image"/>
                        </a>
                    </div>
                </footer>
            </StyledFooterMobile>}
        </>
    )
}

const StyledFooter = styled.footer`
    color: #fff;

      .header-form {
        padding: 24px;
        background-color: #303550 !important;
        border-radius: 12px;
        width: max-content;
        margin: 40px 0 0 0;
      }
    
      .header-form__flex {
        display: flex;
      }
    
      .header-form__input {
        display: block;
        height: 50px;
        background-color: rgba(0, 7, 41, 0.3);
        padding: 12.5px 13px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px 0 0 4px;
        width: 275px;
        color: #fff;
    
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
          background: url("data:image/svg+xml;charset=UTF-8,%3csvg width='6' height='7' viewBox='0 0 6 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='3' cy='3.5' r='3' fill='%2300FF88'/%3e%3c/svg%3e ") no-repeat center #303550;
          background-position: 4px 3.5px;
        }
    
        &::before {
          content: "";
          display: block;
          width: 100%;
          height: 100%;
          background-color: #303550;
          border: 1px solid rgba(199, 201, 209, 0.3);
          border-radius: 50%;
        }
      }
  
    .header__info {
      padding: 330px 0 40px 0;
    }
  
    .footer-main_worker .footer-main__logo span {
      background-color: #8800FF;
    }
  
    .footer-header {
      padding: 135px 0 45px 0;
      background: url("/static/customer/footer/header/background.png") no-repeat center;
      background-size: 100% 100%;
      position: relative;
    }
  
  .footer-header_worker {
    padding: 180px 0 195px 0;
    background: url("/static/worker/footer/header/background.png") no-repeat center top / cover;
  }

  .footer-header_business {
    padding: 140px 0 0 0;
    background: url("/static/business/footer/header/background.png") no-repeat center top / cover;
  }
  
  .footer-main_business .footer-main__logo span {
    background-color: #00FF88;
    color: #000729;
  }

  .footer-header__title_worker span {
    color: #B866FF;
  }
  
  .footer-header__content_worker {
    max-width: 685px;
  }
  
  .footer-header__icon {
    margin-bottom: 32px;
  }
  
    .footer-header__title {
        font-size: 46px;
        line-height: 1.2em;
        font-weight: 800;
        margin-bottom: 16px;
    }

  .footer-header__title_business {
    & span {
      color: #00FF88;
    }
  }
  
  .footer-header__content_business .footer-header__description {
    color: #E3E4E8;
  }
  
    .footer-header__description {
        font-size: 22px;
        font-weight: 500;
        line-height: 1.3em;
    }
  
  .footer-header__qr-code {
    margin-top: 62px;
  }
  
  .footer-header__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .footer-header__form {
    margin: 56px 0;
  }
  
  .footer-header__image_worker {
    position: absolute;
    right: 0;
    bottom: 0;
  }
  
  .container_footer-header {
    display: flex;
    justify-content: space-between;
  }
  
  .footer-main {
    background: url("/static/customer/footer/main/background.png") no-repeat center;
    background-size: 100% 100%;
    padding: 65px 0 40px 0;
  }

  .footer-main_worker {
    background: url("/static/worker/footer/main/background.png") no-repeat center;
    background-size: 100% 100%;
  }

  .footer-main_business {
    background: url("/static/business/footer/main/background.png") no-repeat center;
    background-size: 100% 100%;
  }
  
  .container_footer-main {
    display: flex;
    justify-content: space-between;
  }
  
  .footer-main__left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .footer-main__logo {
    & > div {
      display: flex;
      align-items: center;
      
      & span {
        display: block;
        margin-left: 8px;
        padding: 5px 8px;
        background-color: #002CFB;
        color: #fff;
        font-size: 16px;
        line-height: 1.3em;
        font-weight: 600;
        border-radius: 4px;
      }
    }
    
    & p {
      margin-top: 16px;
      font-size: 14px;
      line-height: 1.2em;
      color: #ABADBA;
    }
  }
  
  .footer-main__qr-code {
    max-width: 95px;
  }
  
  .footer-main-important__links {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 12px;
    margin: 24px 0;
  }
  
  .footer-main-important__link {
    color: #ABADBA;
    font-size: 14px;
    line-height: 1.1em;
    transition: color .3s ease;
    
    &:hover {
      color: #fff;
    }
  }
  
  .footer-main-important__images {
    display: flex;
    gap: 24px;
  }
  
  .footer-main-right__header {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 24px;
  }
  
  .footer-main-item__title {
    font-size: 18px;
    line-height: 1.3em;
    font-weight: 800;
    color: #E3E4E8;
    margin-bottom: 24px;
  }
  
  .footer-main-item__links {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
  
  .footer-main-item__link {
    font-size: 16px;
    line-height: 1.1em;
    color: #ABADBA;
    text-decoration: none;
    transition: color .3s ease;
    
    &:hover {
      color: #fff;
      text-decoration: underline;
    }
  }
  
  .footer-main-item__button {
    padding: 0 16px;
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 4px;
    font-family: inherit;
    font-size: 16px;
    color: #fff;
    line-height: 2em;
    margin-top: 12px;
    cursor: pointer;
    transition: background-color .3s ease, color .3s ease;
    
    &:hover {
      color: #040D36;
      background-color: #fff;
    }
  }

  .footer-main-right__images {
    display: flex;
    gap: 32px;
    margin-bottom: 12px;
  }
  
  .footer-main-right__flex {
    display: flex;
    justify-content: space-between;
  }
  
  .footer-main-right__description {
    font-size: 14px;
    line-height: 1.2em;
    color: #ABADBA;
    
    & span {
      display: block;
    }
  }
  
  .footer-main-right__button {
    display: flex;
    align-items: center;
    padding: 12.35px 16px;
    border-radius: 4px;
    border: 1px solid #FFFFFF66;
    cursor: pointer;
    transition: border-color .3s ease;
    
    & span {
      margin-left: 16px;
    }
    
    &:hover {
      border-color: #fff;
    }
  }
  
  .footer-footer {
    padding: 15px 0 12px 0;
    background-color: #0F1324;
  }
  
  .container_footer-footer {
    display: flex;
    justify-content: center;
    gap: 120px;
  }
  
  @media screen and (max-width: 1600px) {
    .footer-header__image_worker {
      max-width: 600px;
    }
    
    .footer-header_business {
      padding-top: 100px;
      padding-bottom: 40px;
      
      & .header__info {
        padding-top: 220px;
      }
    }
    
    .footer-header__image_business {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 700px;
    }

    .footer-header__title_business span {
      &::after {
        content: "";
        display: block;
      }
    }
    
    .footer-header__title_business_main span {
      display: block;
    }
  }
`

const StyledFooterMobile = styled.footer`
  color: #fff;

  .header-form {
    padding: 20px;
    background-color: #303550 !important;
    border-radius: 5px;
    width: 100%;
    margin: 30px 0;
  }

  .footer-header {
    padding: 50px 0 50px 0;
    background: url("/static/customer/footer/header/background.png") no-repeat center left / cover;
    position: relative;
  }

  .footer-header_worker {
    padding: 50px 0 0 0;
    background: url("/static/worker/footer/header/background.png") no-repeat center top / cover;
  }

  .footer-header_business {
    overflow: hidden;
    padding: 50px 0 0 0;
    background: url("/static/business/footer/header/background.png") no-repeat center top / cover;
  }
  
  .footer-header__icon {
    margin-bottom: 15px;
  }
  
  .header__clients {
    display: none;
  }
  
  .footer-header__title {
    font-size: 24px;
    font-weight: 800;
    line-height: 1.2em;
    margin-bottom: 12px;

    & span {
      color: #00FF88;
    }
  }
  
  .footer-header__title_worker {
    margin-bottom: 15px;
  }

  .footer-header__title_business {
    & span {
      color: #00FF88;
    }
  }
  
  .footer-header__title_worker {
    & span {
      color: #B866FF;
    }
  }
  
  .footer-header__description {
    font-size: 16px;
    color: #E3E4E8;
  }

  .header-form__flex {
    display: flex;
  }

  .header-form__input {
    display: block;
    height: 50px;
    background-color: rgba(0, 7, 41, 0.3);
    padding: 12.5px 13px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px 0 0 4px;
    width: 275px;
    color: #fff;

    &::placeholder {
      color: #fff;
    }
  }

  .header-form__button {
    margin-left: 0;
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
    font-size: 16px;
    transition: background-color .3s ease;

    & span {
      margin-left: 12px;
    }

    &:hover {
      background-color: #00CC6E;
    }
  }

  .header-form__labels {
    display: grid;
    grid-gap: 25px;
    grid-template-columns: 1fr 1fr;
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
      background: url("data:image/svg+xml;charset=UTF-8,%3csvg width='6' height='7' viewBox='0 0 6 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='3' cy='3.5' r='3' fill='%2300FF88'/%3e%3c/svg%3e ") no-repeat center #303550;
      background-position: 4px 3.5px;
    }

    &::before {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      background-color: #303550;
      border: 1px solid rgba(199, 201, 209, 0.3);
      border-radius: 50%;
    }
  }
  
  .footer-header__image {
    position: static;
    width: 100%;
    margin-top: 30px;
  }
  
  .footer-header__image_worker {
    margin-top: -20px;
    margin-bottom: -4px;
  }

  .footer-main {
    background: url("/static/customer/footer/main/background_mobile.png") no-repeat center bottom / cover;
    padding: 40px 0 50px 0;
  }

  .footer-main_worker {
    background: url("/static/worker/footer/main/background_mobile.png") no-repeat center bottom / cover;
  }

  .footer-main_business {
    background: url("/static/business/footer/main/background_mobile.png") no-repeat center center / cover;
    
    & .footer-main__logo > div > span {
      background-color: #00FF88;
      color: #000729;
      font-weight: 700;
    }
  }

  .footer-main__logo {
    margin-bottom: 30px;
    & > div {
      display: flex;
      align-items: center;

      & span {
        display: block;
        margin-left: 8px;
        padding: 5px 8px;
        background-color: #002CFB;
        color: #fff;
        font-size: 12px;
        line-height: 1.3em;
        font-weight: 600;
        border-radius: 4px;
      }
    }

    & p {
      margin-top: 16px;
      font-size: 12px;
      line-height: 1.2em;
      color: #ABADBA;
    }
    
    & img {
      height: 25px;
    }
  }

  .footer-main-item {
    cursor: pointer;
  }

  .footer-main-important__links {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 16px;
    margin: 55px 0 32px 0;
  }

  .footer-main-important__link {
    color: #ABADBA;
    font-size: 14px;
    line-height: 1.1em;
    transition: color .3s ease;

    &:hover {
      color: #fff;
    }
  }

  .footer-main-important__images {
    display: flex;
    gap: 24px;
  }

  .footer-main-right__header {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 24px;
  }
  
  .footer-main__items {
    margin-bottom: 55px;
  }

  .footer-main-item__title {
    font-size: 18px;
    line-height: 1.3em;
    font-weight: 700;
    color: #E3E4E8;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    
    &::after {
      content: url("data:image/svg+xml;charset=UTF-8,%3csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M10.59 0.589844L6 5.16984L1.41 0.589844L0 1.99984L6 7.99984L12 1.99984L10.59 0.589844Z' fill='white'/%3e%3c/svg%3e ");;
      display: block;
      margin-left: 14px;
    }

    &.active::after {
      content: url("data:image/svg+xml;charset=UTF-8,%3csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M10.59 7.99982L6 3.41982L1.41 7.99982L0 6.58982L6 0.589817L12 6.58982L10.59 7.99982Z' fill='white'/%3e%3c/svg%3e ");
    }
  }

  .footer-main-item__links {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    display: none;
    
    &.active {
      display: grid;
    }
  }

  .footer-main-item__link {
    font-size: 14px;
    line-height: 1.1em;
    color: #ABADBA;
    text-decoration: none;
    transition: color .3s ease;

    &:hover {
      color: #fff;
      text-decoration: underline;
    }
  }

  .footer-main-item__button {
    padding: 0 16px;
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 4px;
    font-family: inherit;
    font-size: 14px;
    color: #fff;
    line-height: 2em;
    margin-top: 12px;
    cursor: pointer;
    transition: background-color .3s ease, color .3s ease;
    display: none;
    margin-bottom: 24px;
    
    &.active {
      display: block;
    }

    &:hover {
      color: #040D36;
      background-color: #fff;
    }
  }

  .footer-main-right__images {
    display: flex;
    justify-content: center;
    gap: 32px;
  }

  .footer-main-right__flex {
    display: flex;
    justify-content: space-between;
  }

  .footer-main-right__description {
    margin: 32px 0;
    font-size: 12px;
    line-height: 1.2em;
    color: #ABADBA;

    & span {
      display: block;
    }
  }

  .footer-main-right__button {
    display: flex;
    align-items: center;
    width: max-content;
    padding: 6px 13px;
    border-radius: 4px;
    border: 1px solid #FFFFFF66;
    cursor: pointer;
    transition: border-color .3s ease;
    
    & img {
      height: 23px;
    }

    & span {
      margin-left: 13px;
      width: 12px;
      height: 12px;
    }

    &:hover {
      border-color: #fff;
    }
  }
  
  .container_footer-footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 40px;
    grid-row-gap: 15px;
    
    & a {
      display: block;
      width: 100%;
      height: 100%;
      
      & img {
        width: 100%;
        height: 100%;
      }
    }
  }
  
  .footer-footer {
    background-color: #000729;
  }
  
  .header__form {
    margin: 0 !important;
  }
`

export default Footer