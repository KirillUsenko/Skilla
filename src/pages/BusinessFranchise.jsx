import React, {useState} from 'react'
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RadioGroup from "../components/RadioGroup";

const DownloadPage = () => {
    const [ radio, setRadio ] = useState('telegram')

    return (
        <StyledFranchise>
            <Navbar page="business" type="business" activePage="franchise" />
            <header className="header">
                <div className="container">
                    <div className="header__content">
                        <h1 className="header__title">Откройте партнерский офис и заработайте до 10 млн <span />в первый год</h1>
                        <p className="header__description">Получайте до 50% комиссию, соединяя заказчиков — компании и физических лиц — исполнителей заказов</p>
                        <form action="" className="header-form">
                            <div className="header-form__flex">
                                <input type="tel" required placeholder="+7 (___) ___-__-__" className="header-form__input"/>
                                <button type="submit" className="header-form__button">
                                    Получить презентацию
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
                        <p className="header__info">Отправляя форму, вы соглашаетесь с <a href="#">условиями</a></p>
                    </div>
                    <img src="/static/business/franchise/header/illustration.png" alt="иллюстрация" className="header__image"/>
                </div>
            </header>
            <section className="clients">
                <div className="container clients__block">
                    <div className="clients__content">
                        <h2 className="clients__title">Skilla не продает франшизу, а <span>заключает договор</span> бизнес-партнерства</h2>
                        <p className="clients__text">Все прозрачно. Это честнее, чем франшиза, <span />т.к. в России нет хороших франшиз</p>
                        <ul className="clients-list">
                            <li className="clients-list__item"><span className="check business icon" />Честные условия</li>
                            <li className="clients-list__item"><span className="check business icon" />Прозрачное сотрудничество</li>
                            <li className="clients-list__item"><span className="check business icon" />Гарантия возврата инвестиций</li>
                        </ul>
                    </div>
                    <img src="/static/business/franchise/clients/illustration.png" alt="иллюстрация" className="clients__image"/>
                </div>
            </section>
            <section className="orders">
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
                                        <h3 className="orders-list-item__title">Скачай приложение</h3>
                                        <p className="orders-list-item__text">Из официальных сторов</p>
                                    </div>
                                </div>

                                <div className="orders-list-item">
                                    <div className="orders-list-item__icon">
                                        <img src="/static/business/franchise/orders/icons/02.png" alt="иконка"/>
                                    </div>
                                    <div className="orders-list-item__content">
                                        <h3 className="orders-list-item__title">Пройди проверку</h3>
                                        <p className="orders-list-item__text">Проверка данных занимает от 5 минут до 24 часов по будням</p>
                                    </div>
                                </div>

                                <div className="orders-list-item">
                                    <div className="orders-list-item__icon">
                                        <img src="/static/business/franchise/orders/icons/03.png" alt="иконка"/>
                                    </div>
                                    <div className="orders-list-item__content">
                                        <h3 className="orders-list-item__title">Отправляйся на заказ</h3>
                                        <p className="orders-list-item__text">После звонка куратора отправляйся на первый заказ</p>
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
            </section>
            <Footer page="business" />
        </StyledFranchise>
    )
}

const StyledFranchise = styled.div`
  .header {
    background: url('/static/business/franchise/header/background.png') no-repeat center top / cover;
    min-height: 100vh;
    position: relative;
    margin: auto;
  }

  .header__image {
    position: absolute;
    right: 0;
    bottom: 0;
  }

  .header__content {
    position: relative;
    z-index: 1;
    max-width: 810px;
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
    color: #E3E4E8;
    font-weight: 500;

    & span {
      display: block;
    }
  }

  .header-form {
    padding: 24px;
    background-color: rgba(0, 7, 41, 0.5);
    border-radius: 12px;
    width: max-content;
    margin: 40px 0 60px 0;
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
    padding: 70px 0 0 0;

    & a {
      color: inherit;
      transition: color .3s ease;
      text-decoration: underline;

      &:hover {
        color: #97A8FF;
      }
    }
  }

  .clients {
    background: url("/static/business/franchise/clients/background.png") no-repeat center right / cover #000729;;
    padding: 120px 0 120px 0;
    color: #fff;
    overflow: hidden;
  }

  .clients__content {
    max-width: 670px;
  }

  .clients__block {
    border-radius: 12px;
    background-color: #303550;
    padding: 80px 120px;
    position: relative;
  }

  .clients__title {
    font-size: 46px;
    line-height: 1.2em;
    margin-bottom: 16px;
    max-width: 665px;

    & span {
      color: #00FF88;
    }
  }

  .clients__text {
    font-size: 22px;
    line-height: 1.3em;
    font-weight: 500;
    color: #E3E4E8;

    & span {
      display: block;
    }
  }

  .clients-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin: 95px 0 0 0;
    padding: 0;
    list-style: none;
  }

  .clients-list__item {
    font-size: 22px;
    line-height: 1.3em;
    font-weight: 600;
    display: flex;
    align-items: center;

    & span {
      margin-right: 16px;
    }
  }

  .clients__image {
    position: absolute;
    right: -260px;
    bottom: -8px;
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

  .footer-header .header-form__checkbox::before {
    background-color: #303550;
  }

  .footer-header .header-form__checkbox:checked::before {
    background-color: #303550;
  }

  @media (max-height: 1200px) {
    .header__content {
      padding-top: 300px;
    }
  }

  @media (max-height: 900px) {
    .header {
      padding: 230px 0 55px 0;
    }

    .header__content {
      padding-top: 0;
    }
    
    .header__image {
      width: 800px;
    }
  }
  @media screen and (max-width: 1600px) {
    .container {
      width: 1200px;
    }

    .scrollnav__links {
      gap: 25px !important;
    }

    .scrollnav__link {
      font-size: 14px;
    }

    .faq-question__tab::after {
      right: -22px;
    }

    .header__image {
      width: 700px;
      right: 0;
    }
    
    .clients__image {
      width: 1000px;
      right: -170px;
      bottom: -6px;
    }
    
    .orders__illustration {
      max-width: 600px;
    }
  }

  @media screen and (max-width: 1399px) {
    .container {
      width: 315px;
    }
    
    .header {
      padding: 150px 0 0 0;
      min-height: auto;
    }
    
    .header__clients {
      display: none;
    }

    .header__title {
      font-size: 36px;
      margin-bottom: 16px;
    }
    
    .header__description {
      font-size: 16px;
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

    .header__links {
      display: none;
    }

    .header__info {
      font-size: 13px;
      padding-top: 0;
    }
    
    .header__image {
      position: static;
      display: block;
      width: 100%;
      margin: auto;
      margin-top: 30px;
    }
    
    .clients {
      padding: 50px 0;
    }
    
    .clients__block {
      padding: 0;
      border-radius: 5px;
      display: flex;
      flex-direction: column-reverse;
    }
    
    .clients__image {
      position: static;
      width: 140%;
      margin-left: -20%;
    }
    
    .clients__content {
      padding: 10px;
    }
    
    .clients__title {
      font-size: 24px;
      margin-bottom: 15px;
    }
    
    .clients__text {
      font-size: 16px;
      
      & span {
        display: inline;
      }
    }
    
    .clients-list {
      margin-top: 15px;
    }
    
    .clients-list {
      grid-gap: 10px;
    }
    
    .clients-list__item {
      font-size: 16px;
      
      & span {
        margin-right: 8px;
        width: 17px;
        height: 16px;
        background-size: cover;
      }
    }
    
    .orders {
      padding: 50px 0;
    }
    
    .orders__title {
      font-size: 24px;
      margin-bottom: 12px;
    }
    
    .orders__description {
      font-size: 16px;
    }
    
    .orders-list {
      padding: 15px;
      margin-top: 30px;
      background-color: #000729;
      border-radius: 5px;
      
      &::before {
        left: 34px;
      }
      
      &::after {
        display: none;
      }
    }
    
    .orders__clients {
      display: none;
    }
    
    .orders-list-item__title {
      font-size: 16px;
      margin-bottom: 5px;
    }
    
    .orders-list-item__text {
      font-size: 14px;
    }
    
    .orders-list-item__icon {
      margin-right: 0;
    }
    
    .orders-list-item__content {
      max-width: 220px;
      margin-left: 20px;
    }
    
    .orders__illustration {
      position: static;
      width: 100%;
      margin-bottom: 30px;
    }
  }
`

export default DownloadPage