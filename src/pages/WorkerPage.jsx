import React, {useRef} from 'react'
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {useNavigate} from "react-router-dom";
import Portfolio from "../components/Portfolio";
import Map from "../components/Map";

const WorkerPage = () => {
    const sliderRef = useRef(null)

    const settingsSlider = {
        className: "opinions__slider",
        centerPadding: "14px",
        centerMode: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        swipe: false,
        speed: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1399,
                settings: {
                    infinite: true,
                    centerPadding: 0,
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                    swipe: false,
                    speed: 0,
                    arrows: false,
                    dots: true
                }
            }
        ]
    }

    const navigate = useNavigate()
    return (
        <StyledWorker>
            <Navbar page="worker" activePage="main" />
            <header className="header">
                <div className="container">
                    <div className="header__content">
                        <h1 className="header__title">Выполняй заказы <span />рядом с домом <span />до 5 000 ₽/день</h1>
                        <p className="header__description">Удобная подработка или <span />работа рядом с домом по гибкому графику</p>
                        <button className="header__button" onClick={() => navigate('/worker/download')}>
                            Скачать приложение
                            <span className="download icon"></span>
                        </button>

                        <div className="header__apps">
                            <a href="#">
                                <img src="/static/worker/download/apps/01.png" alt="Google Play" className="header__app"/>
                            </a>
                            <a href="#">
                                <img src="/static/worker/download/apps/02.png" alt="App Store" className="header__app"/>
                            </a>
                            <a href="#">
                                <img src="/static/worker/download/apps/03.png" alt="AppGallery" className="header__app"/>
                            </a>
                            <a href="#">
                                <img src="/static/worker/download/apps/04.png" alt="NASHSTORE" className="header__app"/>
                            </a>
                        </div>
                    </div>

                    <img src="/static/worker/header/illustration.png" alt="иллюстрация" className="header__image"/>
                </div>
            </header>
            <section className="ribbons">
                <img src="/static/worker/header/ribbons.png" alt="ленты с текстом" className="ribbons__image"/>
            </section>
            <section className="work">
                <div className="container_smail">
                    <h2 className="work__title">Выбирай до 3-х заказов в день<span>без опыта работы</span></h2>
                    <p className="work__description">Работа для мужчин и женщин от 18 лет</p>

                    <div className="work__grid">
                        <div className="work-item">
                            <h5 className="work-item__title">Мерчендайзинг</h5>
                            <img src="/static/worker/work/icons/01.png" alt="иконка" className="work-item__icon"/>
                            <p className="work-item__price">от 1 200 ₽ за смену</p>
                            <a href="#" className="work-item__link">
                                Подробнее
                                <span className="arrow-right-top purple icon"></span>
                            </a>
                        </div>
                        <div className="work-item">
                            <h5 className="work-item__title">Мерчендайзинг</h5>
                            <img src="/static/worker/work/icons/01.png" alt="иконка" className="work-item__icon"/>
                            <p className="work-item__price">от 1 200 ₽ за смену</p>
                            <a href="#" className="work-item__link">
                                Подробнее
                                <span className="arrow-right-top purple icon"></span>
                            </a>
                        </div>
                        <div className="work-item">
                            <h5 className="work-item__title">Мерчендайзинг</h5>
                            <img src="/static/worker/work/icons/01.png" alt="иконка" className="work-item__icon"/>
                            <p className="work-item__price">от 1 200 ₽ за смену</p>
                            <a href="#" className="work-item__link">
                                Подробнее
                                <span className="arrow-right-top purple icon"></span>
                            </a>
                        </div>
                        <div className="work-item">
                            <h5 className="work-item__title">Мерчендайзинг</h5>
                            <img src="/static/worker/work/icons/01.png" alt="иконка" className="work-item__icon"/>
                            <p className="work-item__price">от 1 200 ₽ за смену</p>
                            <a href="#" className="work-item__link">
                                Подробнее
                                <span className="arrow-right-top purple icon"></span>
                            </a>
                        </div>
                        <div className="work-item">
                            <h5 className="work-item__title">Мерчендайзинг</h5>
                            <img src="/static/worker/work/icons/01.png" alt="иконка" className="work-item__icon"/>
                            <p className="work-item__price">от 1 200 ₽ за смену</p>
                            <a href="#" className="work-item__link">
                                Подробнее
                                <span className="arrow-right-top purple icon"></span>
                            </a>
                        </div>
                        <div className="work-item">
                            <h5 className="work-item__title">Мерчендайзинг</h5>
                            <img src="/static/worker/work/icons/01.png" alt="иконка" className="work-item__icon"/>
                            <p className="work-item__price">от 1 200 ₽ за смену</p>
                            <a href="#" className="work-item__link">
                                Подробнее
                                <span className="arrow-right-top purple icon"></span>
                            </a>
                        </div>
                        <div className="work-item">
                            <h5 className="work-item__title">Мерчендайзинг</h5>
                            <img src="/static/worker/work/icons/01.png" alt="иконка" className="work-item__icon"/>
                            <p className="work-item__price">от 1 200 ₽ за смену</p>
                            <a href="#" className="work-item__link">
                                Подробнее
                                <span className="arrow-right-top purple icon"></span>
                            </a>
                        </div>
                        <div className="work-item">
                            <h5 className="work-item__title">Мерчендайзинг</h5>
                            <img src="/static/worker/work/icons/01.png" alt="иконка" className="work-item__icon"/>
                            <p className="work-item__price">от 1 200 ₽ за смену</p>
                            <a href="#" className="work-item__link">
                                Подробнее
                                <span className="arrow-right-top purple icon"></span>
                            </a>
                        </div>
                        <div className="work-item">
                            <h5 className="work-item__title">Мерчендайзинг</h5>
                            <img src="/static/worker/work/icons/01.png" alt="иконка" className="work-item__icon"/>
                            <p className="work-item__price">от 1 200 ₽ за смену</p>
                            <a href="#" className="work-item__link">
                                Подробнее
                                <span className="arrow-right-top purple icon"></span>
                            </a>
                        </div>
                        <div className="work-item work-item_more" onClick={() => window.location = 'https://skilla.ru'}>
                            <a className="work-item__link work-item__link_more">
                                Все услуги
                                <span className="arrow-right-top purple icon"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="clients">
                <div className="container clients__block">
                    <div className="clients__content">
                        <h2 className="clients__title"><span>Заказчики</span> —  крупнейшие компании России и СНГ</h2>
                        <p className="clients__text">70% заказчиков — федеральные компании.<span />Твой труд гарантированно оплатят.</p>
                        <ul className="clients-list">
                            <li className="clients-list__item"><span className="check icon" />Хорошие условия работы</li>
                            <li className="clients-list__item"><span className="check icon" />Уважительное отношение кураторов</li>
                            <li className="clients-list__item"><span className="check icon" />Рыночная оплата за час/смену</li>
                        </ul>
                    </div>
                    <img src="/static/worker/clients/illustration.png" alt="иллюстрация" className="clients__image"/>
                </div>
            </section>
            <section className="profit">
                <div className="container">
                    <img src="/static/worker/profit/illustration.png" alt="иллюстрация" className="profit__illustration"/>
                    <div className="profit__content">
                        <h2 className="profit__title">Получай официальный<span /><span className="profit__title_white">белый</span> доход</h2>
                        <p className="profit__text">Заработок на карту вместо зарплаты в конверте. Поможем стать самозанятым. Приложение уплатит налоги и выдаст чек заказчику.</p>
                    </div>
                </div>
            </section>
            <section className="app">
                <Portfolio type="block" className="app__portfolio" />
                <div className="container app__container">
                    <div className="app__content">
                        <h2 className="app__title">Скачай крутое <span />приложение <span />за <span className="app__title_price">0 рублей</span></h2>
                        <p className="app__description">Бесплатное приложение скачали 75 000+ исполнителей. Нет подписки и оплаты выбора заказа. За все платят заказчики.</p>
                    </div>
                    <img src="/static/worker/app/illustration.png" alt="иллюстрация" className="app__illustration"/>
                </div>
            </section>
            <section className="opinions">
                <div className="container_smail">
                    <div className="opinions__content">
                        <h2 className="opinions__title">Посмотри видео-отзывы <span>исполнителей</span> Skilla</h2>
                        <p className="opinions__description">Узнай как изенились жизни людей, благодаря <span />подработке через приложение</p>
                        <div className="opinions__buttons">
                            <button className="opinions__button opinions__prev" onClick={() => sliderRef?.current?.slickPrev()}>
                                <span className="slider-arrow icon" />
                            </button>
                            <button className="opinions__button opinions__next" onClick={() => sliderRef?.current?.slickNext()}>
                                <span className="slider-arrow icon" />
                            </button>
                        </div>
                    </div>
                </div>
                <Slider ref={sliderRef} className="opinions-slider" {...settingsSlider}>
                    <div className="opinions-video">
                        <div className="opinions-video__video">
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/9nvwp7SHID4?controls=0"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                        </div>
                        <h6 className="opinions-video__title">Я больше никогда не вернусь в офис</h6>
                        <p className="opinions-video__description">Калистрат Иванов, Москва</p>
                    </div>

                    <div className="opinions-video">
                        <div className="opinions-video__video">
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/6JZlBqRrSAQ"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                        </div>
                        <h6 className="opinions-video__title">Я больше никогда не вернусь в офис 2</h6>
                        <p className="opinions-video__description">Калистрат Иванов, Москва</p>
                    </div>

                    <div className="opinions-video">
                        <div className="opinions-video__video">
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/9nvwp7SHID4?controls=0"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                        </div>
                        <h6 className="opinions-video__title">Я больше никогда не вернусь в офис 3</h6>
                        <p className="opinions-video__description">Калистрат Иванов, Москва</p>
                    </div>

                    <div className="opinions-video">
                        <div className="opinions-video__video">
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/6JZlBqRrSAQ"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                        </div>
                        <h6 className="opinions-video__title">Я больше никогда не вернусь в офис 4</h6>
                        <p className="opinions-video__description">Калистрат Иванов, Москва</p>
                    </div>

                    <div className="opinions-video">
                        <div className="opinions-video__video">
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/9nvwp7SHID4?controls=0"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                        </div>
                        <h6 className="opinions-video__title">Я больше никогда не вернусь в офис 5</h6>
                        <p className="opinions-video__description">Калистрат Иванов, Москва</p>
                    </div>
                </Slider>
            </section>
            <Map />
            <section className="orders">
                <div className="container">
                    <img src="/static/worker/orders/illustration.png" alt="иллюстрация" className="orders__illustration"/>
                    <div className="orders__content">
                        <h2 className="orders__title">Стань себе <span className="orders__title_word">начальником</span><span /> и выбирай заказы</h2>
                        <p className="orders__description">Принцип каршеринга — не нужно ездить на собеседования</p>

                        <div className="orders-list">
                            <div className="orders-list-item">
                                <div className="orders-list-item__icon">
                                    <img src="/static/worker/orders/icons/01.png" alt="иконка"/>
                                </div>
                                <div className="orders-list-item__content">
                                    <h3 className="orders-list-item__title">Скачай приложение</h3>
                                    <p className="orders-list-item__text">Из официальных сторов</p>
                                </div>
                            </div>

                            <div className="orders-list-item">
                                <div className="orders-list-item__icon">
                                    <img src="/static/worker/orders/icons/02.png" alt="иконка"/>
                                </div>
                                <div className="orders-list-item__content">
                                    <h3 className="orders-list-item__title">Пройди проверку</h3>
                                    <p className="orders-list-item__text">Проверка данных занимает от 5 минут до 24 часов по будням</p>
                                </div>
                            </div>

                            <div className="orders-list-item">
                                <div className="orders-list-item__icon">
                                    <img src="/static/worker/orders/icons/03.png" alt="иконка"/>
                                </div>
                                <div className="orders-list-item__content">
                                    <h3 className="orders-list-item__title">Отправляйся на заказ</h3>
                                    <p className="orders-list-item__text">После звонка куратора отправляйся на первый заказ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer page="worker" />
        </StyledWorker>
    )
}

const StyledWorker = styled.div`
  background-color: #000729;
  .maps__loader {
    width: max-content;
    margin: 30px auto;
  }
  .header {
    background: url('/static/worker/header/background.png') no-repeat center top / cover;
    min-height: 100vh;
    position: relative;
    margin: auto;
    padding-top: 150px !important;
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
    color: #E3E4E8;
    font-weight: 500;
    & span {
      display: block;
    }
  }
  .header__apps {
    display: flex;
    gap: 40px;
    margin-top: 160px;
  }
  .header__button {
    cursor: pointer;
    padding: 0 24px;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.35);
    border: 0;
    font-family: inherit;
    display: flex;
    align-items: center;
    color: #fff;
    font-weight: 600;
    font-size: 20px;
    line-height: 48px;
    margin-top: 64px;
    transition: background-color .3s ease;
    &:hover {
      background-color: #8800FF;
    }
    & span {
      margin-left: 24px;
    }
  }
  .ribbons {
    max-width: 1920px;
    margin: auto;
    width: 100%;
    overflow: hidden;
    position: relative;
    z-index: 1;
    margin-top: -30px;
    & img {
      width: 100%;
    }
  }

  .work {
    color: #fff;
    margin-top: -30px;
    padding: 180px 0 110px 0;
    background: url("/static/worker/work/background.png") no-repeat center top / cover;
  }

  .work__title {
    font-weight: 800;
    font-size: 46px;
    line-height: 1.2em;
    margin-bottom: 16px;

    & span {
      display: block;
      color: #B866FF;
    }
  }

  .work__description {
    font-size: 22px;
    line-height: 1.3em;
    color: #E3E4E8;
  }

  .work__grid {
    display: grid;
    grid-gap: 24px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    margin-top: 55px;
  }

  .work-item {
    padding: 16px 0 0 0;
    border-radius: 12px;
    background-color: rgba(255, 255, 255, 0.15);
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    transition: background-color .3s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 0.25);
    }
  }

  .work-item__title {
    font-size: 16px;
    line-height: 1.3em;
    font-weight: 700;
    margin-bottom: 40px;
  }

  .work-item__icon {
    max-width: 120px;
  }

  .work-item__price {
    margin: 8px 0 16px 0;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
  }

  .work-item__link {
    color: rgba(207, 153, 255, 1);
    display: flex;
    align-items: center;
    line-height: 1.3em;
    font-size: 16px;
    font-weight: 600;
    padding: 9.5px 8px;
    justify-content: center;
    width: 100%;
    text-decoration: none;
    border-radius: 0 0 4px 4px;
    transition: background-color .3s ease, color .3s ease;

    & span {
      margin-left: 12px;
    }

    &:not(.work-item__link_more):hover {
      background-color: #B866FF;
      color: #fff;

      & span {
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M6.85964 1.95195L1.70276 7.10882L0.995657 6.40172L6.15248 1.24489L2.40989 1.24489L2.40989 0.244893L7.85964 0.244893L7.85964 5.69464H6.85964L6.85964 1.95195Z' fill='white'/%3e%3c/svg%3e ");
      }
    }
  }

  .work-item_more {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .clients {
    background: url("/static/worker/clients/background.png") no-repeat center top / cover;
    padding: 160px 0 145px 0;
    color: #fff;
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

    & span {
      color: #B866FF;
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
    right: 0;
    bottom: 0;
    max-width: 625px;
    max-height: 615px;
  }

  .profit {
    overflow: hidden;
    position: relative;
    padding: 230px 0 270px 0;
    background: url("/static/worker/profit/background.png") no-repeat center top / cover;
  }

  .profit__title {
    font-size: 46px;
    line-height: 1.2em;
    color: #B866FF;
    margin-bottom: 16px;
    position: relative;
    z-index: 1;

    & span:not(.profit__title_white) {
      display: block;
    }

    & .profit__title_white {
      color: #fff;
    }
  }

  .profit__text {
    font-size: 22px;
    line-height: 1.3em;
    color: #E3E4E8;
    font-weight: 500;
    position: relative;
    z-index: 1;
  }
  .profit__content {
    margin-left: auto;
    max-width: 570px;
    position: relative;

    &::before {
      content: "";
      width: 100vw;
      height: calc(100% + 160px);
      display: block;
      background-color: #303550;
      position: absolute;
      left: -120px;
      top: -80px;
      border-radius: 12px 0 0 12px;
    }

    &::after {
      content: url("/static/worker/profit/money.png");
      position: absolute;
      right: -200px;
      top: -210px;
    }
  }

  .profit__illustration {
    position: absolute;
    left: 0;
    bottom: 0;
  }

  .app {
    padding: 240px 0;
    position: relative;
    position: relative;
    margin: auto;
    &::before {
      content: url('/static/worker/app/ribbon-top.png');
      display: block;
      width: 100%;
      overflow: hidden;
      position: absolute;
      top: -30px;
      text-align: center;
    }
    &::after {
      content: url('/static/worker/app/ribbon-bottom.png');
      display: block;
      width: 100%;
      overflow: hidden;
      position: absolute;
      bottom: -40px;
      text-align: center;
    }
  }

  .app__content {
    padding: 80px 120px;
    border-radius: 12px;
    background-color: #303550;
    width: max-content;
  }

  .app__title {
    font-size: 46px;
    line-height: 1.2em;
    color: #fff;
    font-weight: 800;
    margin-bottom: 16px;

    & span:not(.app__title_price) {
      display: block;
    }

    & .app__title_price {
      color: #B866FF;
    }
  }

  .app__description {
    font-size: 22px;
    line-height: 1.3em;
    font-weight: 500;
    color: #E3E4E8;
    max-width: 570px;
  }

  .app__illustration {
    position: absolute;
    right: 0;
    bottom: 0;
  }

  .opinions {
    overflow: hidden;
    color: #fff;
    padding: 200px 0 160px 0;
    background: url('/static/worker/opinions/background.png') no-repeat center top / cover;
  }

  .opinions__content {
    max-width: 685px;
  }

  .opinions__title {
    font-size: 36px;
    line-height: 1.2em;
    font-weight: 800;
    margin-bottom: 16px;

    & span {
      color: #B866FF;
    }
  }

  .opinions__description {
    font-size: 22px;
    line-height: 1.3em;
    color: #E3E4E8;
    font-weight: 500;

    & span {
      display: block;
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
    & span {
      display: block;
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
      font-family: 'Inter';
      font-size: 46px;
      line-height: 1.2em;
      font-weight: 800;
      color: #8800FF;
      min-width: 100px;
      max-width: 480px;
      text-decoration: solid underline #8800FF 2px;
    }
  }
  .maps__description {
    font-weight: 500;
    font-size: 22px;
    line-height: 1.3em;
    color: #E3E4E8;
    margin-top: 16px;
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
    font-family: inherit;
    font-size: 18px;
    line-height: 1.3em;
    color: #C7C9D1;
    padding: 8.5px 24px;
    height: inherit;
    margin-top: -1px;
    cursor: pointer;
    transition: color .3s ease;
    &:hover {
      color: #fff;
    }
  }
  .maps__tab_active {
    background-color: #8800FF;
    border-radius: 4px;
    color: #fff;
    font-weight: 500;
  }
  .maps__map {
    max-width: 100%;
    margin-top: 55px;
    & img {
      width: 100%;
    }
  }

  .slick-center .opinions-video {
    width: 690px;
    max-width: 690px;
    filter: none;
    opacity: 1;
    margin-top: 0;

    & .opinions-video__video {
      height: 400px;
    }
  }

  .opinions__slider {
    width: 120vw;
    max-width: 1920px;
    margin: auto;
    margin-top: -100px;
  }

  .slick-slide {
    padding: 0 15px;
  }
  .slick-list {
    margin: 0 25px;
  }

  .opinions-video {
    filter: grayscale(100%);
    opacity: .6;
    transition: opacity .3s ease;
    max-width: 100%;
    margin-top: 188px;

    &:hover {
      opacity: 1;
    }

    & .opinions-video__video {
      height: 215px;
      background-color: #fff;
    }

    & .opinions-video__title {
      font-size: 18px;
      line-height: 1.1em;
      margin-bottom: 4px;
      font-weight: 700;
      margin: 12px 0 4px 0;
    }

    & .opinions-video__description {
      font-size: 14px;
      line-height: 1.3em;
      color: #818598;
    }
  }

  .opinions__buttons {
    position: relative;
    z-index: 1;
    margin-top: 24px;
    margin-left: auto;
    width: max-content;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
  }

  .opinions__button {
    padding: 19px;
    border-radius: 50%;
    border: 0;
    background-color: transparent;
    transition: background-color .3s ease;
    cursor: pointer;

    &:hover {
      background-color: #A033FF;

      & span {
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='8' height='12' viewBox='0 0 8 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M6.50016 0L7.91016 1.41L3.33016 6L7.91016 10.59L6.50016 12L0.500156 6L6.50016 0Z' fill='white'/%3e%3c/svg%3e ");;
      }
    }
  }

  .opinions__next span {
    transform: rotate(180deg);
  }
  .orders {
    padding: 220px 0 130px 0;
    background: url('/static/worker/orders/background.png') no-repeat center top / cover;
    position: relative;
    color: #fff;
    overflow: hidden;
  }

  .orders__content {
    margin-left: auto;
    max-width: 690px;
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
      color: #B866FF;
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
      background-color: #A033FF;
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
      background-color: #303550;
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
    background-color: #6D00CC;

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
  }
  .app__portfolio {
    margin-bottom: 460px;
  }

  @media (max-width: 1920px) {
    .profit__illustration {
      max-width: 850px;
      left: -100px;
    }
  }
  @media (max-height: 1200px) {
    .header__content {
      padding-top: 300px;
    }
  }
  @media (max-height: 900px) {
    .header {
      padding: 240px 0 100px 0;
    }
    .header__content {
      padding-top: 0;
    }
    .header__image {
      max-width: 950px;
    }
  }

  @media screen and (min-width: 1700px) {
    .opinions__buttons {
      margin-right: 130px;
    }
  }
  @media screen and (max-width: 1600px) {
    .container {
      width: 1200px;
    }

    .header__image {
      width: 900px;
    }

    .clients__image {
      max-width: 525px;
    }

    .profit__illustration {
      max-width: 700px;
    }

    .app__illustration {
      max-width: 680px;
    }

    .orders__illustration {
      max-width: 600px;
    }
    .scrollnav__links {
      gap: 25px !important;
    }
    .scrollnav__link {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 1399px) {
    .container {
      width: 315px;
    }
    & .header__content {
      padding-top: 0 !important;
    }

    & .header {
      padding: 150px 0 0 0 !important;
      min-height: auto !important;
    }
    .header__title {
      font-size: 36px;
      line-height: 1.2em;
      margin-bottom: 16px;
    }
    .header__description {
      font-size: 18px;
    }
    .header__image {
      width: 100%;
      margin: 32px auto -5px auto;
      position: static;
    }

    .header__apps {
      display: none;
    }

    .header__button {
      margin-top: 15px;
      font-size: 18px;
      padding: 0 20px;
      width: 100%;
      justify-content: center;

      & span {
        width: 16px;
        height: 16px;
        margin-top: 3px;
      }
    }
    .ribbons img {
      width: auto;
    }

    .container_smail {
      width: 315px;
    }

    .work {
      padding: 50px 0;
    }

    .work__title {
      font-size: 24px;
      margin-bottom: 12px;

      & span {
        display: inline;
        padding-left: 8px;
      }
    }

    .work__description {
      font-size: 18px;
    }

    .work__grid {
      grid-template-columns: 1fr 1fr;
      margin-top: 30px;
      grid-gap: 10px;
    }

    .work-item {
      border-radius: 5px;
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
      width: 90%;
      margin: auto;
      margin-top: 5%;
    }
    .clients__content {
      padding: 10px;
    }
    .clients__title {
      font-size: 24px;
      margin-bottom: 12px;
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
    .profit__content::after {
      display: none;
    }
    .profit__illustration {
      width: 100%;
      position: static;
    }

    .profit {
      padding: 50px 0 100px 0;
    }

    .profit__title {
      font-size: 24px;
      margin-bottom: 12px;
    }

    .profit__text {
      font-size: 16px;
    }
    .profit__content {
      margin-top: 15px;
    }
    .profit__content::before {
      left: -20px;
      height: calc(100% + 40px);
      top: -20px;
    }

    .app {
      padding: 110px 0 90px 0;
    }

    .app__portfolio {
      margin-bottom: 50px;
    }

    .app__container {
      display: flex;
      flex-direction: column-reverse;
    }

    .app__illustration {
      width: 100%;
      position: static;
    }

    .app__content {
      width: 100%;
      padding: 20px;
      border-radius: 5px;
    }

    .app__title {
      font-size: 24px;
      margin-bottom: 12px;
    }

    .app__description {
      font-size: 16px;
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

    .opinions {
      padding: 70px 0 50px 0;
    }
    .opinions__title {
      font-size: 24px;
      margin-bottom: 12px;
    }
    .opinions__text {
      font-size: 16px;
    }
    .opinions__slider {
      width: 315px;
      margin-top: 15px;
    }
    .opinions__buttons {
      margin-top: 15px;
      margin-left: 0;
    }

    .opinions-video {
      filter: none;
      margin-top: 0;
      opacity: 1;
      & .opinions-video__video {
        height: 175px;
      }
    }

    .slick-slide {
      padding: 0;
    }
    .slick-list {
      margin: 0;
    }
    .opinions__slider .slick-dots {
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
          background-color: #A033FF;
        }
        & button {
          padding: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
        }
      }
    }
    .orders {
      padding: 50px 0;
    }
    .orders__title {
      font-size: 24px;
      margin-bottom: 12px;
    }
    .orders__text {
      font-size: 16px;
    }
    .orders__illustration {
      position: static;
      width: 100%;
      margin-bottom: 30px;
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

    .orders-list {
      padding: 15px;
      margin-top: 30px;
      border-radius: 5px;

      &::before {
        left: 34px;
      }

      &::after {
        width: 100%;
        border-radius: 12px;
      }
    }
  }
`

export default WorkerPage