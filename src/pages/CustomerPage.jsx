import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import Navbar from "../components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/Footer";
import Map from "../components/Map";
import Chart from "../components/Chart";
import Clients from "../components/Clients";
import Portfolio from "../components/Portfolio";

const CustomerPage = () => {
    const [ activeTab, setActiveTab ] = useState("1")
    const [ clientsTabs, setClientsTabs ] = useState([])

    const changeActiveTab = (e) => setActiveTab(e.target.getAttribute('index'))

    return (
            <StyledCustomer>
                <Navbar page="customer" />
                <header className="header">
                    <div className="container">
                        <div className="header__content">
                            <h1 className="header__title">Вы компания? Опубликуйте заказ — исполнители выезжают</h1>
                            <p className="header__description">Skilla — это Uber для бизнеса, <span />соединяем заказчиков и исполнителей с 2010 года.</p>

                            <form action="" className="header__form">
                                <input type="tel" required placeholder="+7 (___) ___-__-__" className="header__input" />
                                <button className="header__button">
                                    Разместить заказ
                                    <span className="arrow-right-big icon" />
                                </button>
                                <input type="text" placeholder="0000-000-000" className="header__input" />
                            </form>

                            <div className="header__clients">
                                <a href="#" className="header__client">
                                    <img src="/static/customer/header/links/01.png" alt="AppGallery"/>
                                </a>

                                <a href="#" className="header__client">
                                    <img src="/static/customer/header/links/02.png" alt="NASHSTORE"/>
                                </a>

                                <a href="#" className="header__client">

                                    <img src="/static/customer/header/links/03.png" alt="Google Play"/>
                                </a>

                                <a href="#" className="header__client">
                                    <img src="/static/customer/header/links/04.png" alt="App Store"/>
                                </a>
                            </div>

                            <p className="header__info">Отправляя форму, вы соглашаетесь с <a href="#">условиями</a></p>
                        </div>

                        <img src="/static/customer/header/illustration.png" alt="иллюстрация" className="header__image"/>
                    </div>
                </header>
                <section className="ribbons ribbons-header">
                    <img src="/static/customer/header/ribbons.png" alt="ленты с текстом" className="ribbons-header__image"/>
                </section>
                <Clients page="customer" />
                <section className="triggers">
                    <div className="container">
                        <div className="container_smail">
                            <h2 className="triggers__title">Сосредоточтесь на бизнесе,<span />вместо поиска сотрудников</h2>
                            <p className="triggers__text">Экономьте на привлечении персонала до 55%. Оптимизируйте налоги.</p>
                            <img src="/static/customer/triggers/illustration.png" alt="изображение" className="triggers__image"/>
                        </div>
                    </div>
                </section>
                <Portfolio />
                <section className="about-job">
                    <div className="container container_about-job">
                        <div className="about-job__content">
                            <header className="about-job__header">
                                <h2 className="about-job__title">Платите «по-белому» <span>через безопасную сделку</span></h2>
                                <p className="about-job__text">Исполнитель не получит оплату до подтверждения выполнения заказа. Налоговая не доначислит НДС. Все чеки от самозанятых - в личном кабинете.</p>
                                <div className="about-job__images">
                                    <img src="/static/customer/about-job/logo/01.png" alt="Логотип ФНС" className="about-job__logo"/>
                                    <img src="/static/customer/about-job/logo/02.png" alt="Логотип Роскомнадзора" className="about-job__logo"/>
                                </div>
                            </header>
                            <footer className="about-job__footer">
                                <p className="about-job__description">Законодательство РФ поддерживает бизнес-модель Skilla в через 422 ГК РФ, который является частью национального проекта России, инициированным президентом Путиным В.В.</p>
                            </footer>
                        </div>

                        <img src="/static/customer/about-job/illustration.png" alt="иллюстрация" className="about-job__image"/>
                    </div>
                </section>
                <Map page="customer" />
                <Chart page="customer" />
                <section className="skills">
                    <div className="container_smail">
                        <h2 className="skills__title">Контролируйте исполнителей, используя <span>крутые IT-решения</span> Skilla</h2>

                        <div className="skills__tabs">
                            <button className={activeTab === "1" ? "tabs__button tabs__button_active skills__tab" : "tabs__button skills__tab"} index="1" onClick={changeActiveTab}>GPS-местонахождение</button>
                            <button className={activeTab === "2" ? "tabs__button tabs__button_active skills__tab" : "tabs__button skills__tab"} index="2" onClick={changeActiveTab}>Отправка документов</button>
                            <button className={activeTab === "3" ? "tabs__button tabs__button_active skills__tab" : "tabs__button skills__tab"} index="3" onClick={changeActiveTab}>Чеки от самозанятых</button>
                            <button className={activeTab === "4" ? "tabs__button tabs__button_active skills__tab" : "tabs__button skills__tab"} index="4" onClick={changeActiveTab}>Личный кабинет заказчика</button>
                        </div>

                        {activeTab === "1" && <div className="skills-content">
                            <div>
                                <h4 className="skills-content__title">Контролируйте начало, конец смены и GPS-местонахождение</h4>
                                <p className="skills-content__text">Исполнители понимают, что для бизнеса важна пунктуальность и прозрачность. За нарушение качества оказанных услуг предусмотрено снижение рейтинга и ответственность.<br /><br />Через приложение передаются координаты исполнителей в момент начала, окончания работы или промежуточных точек.</p>
                            </div>
                            <img src="/static/customer/skills/01.svg" alt="иллюстрация" className="skills-content__image"/>
                        </div>}

                        {activeTab === "2" && <div className="skills-content">
                            <div>
                                <h4 className="skills-content__title">Отправка документов</h4>
                                <p className="skills-content__text">Исполнители понимают, что для бизнеса важна пунктуальность и прозрачность. За нарушение качества оказанных услуг предусмотрено снижение рейтинга и ответственность.<br /><br />Через приложение передаются координаты исполнителей в момент начала, окончания работы или промежуточных точек.</p>
                            </div>
                            <img src="/static/customer/skills/01.svg" alt="иллюстрация" className="skills-content__image"/>
                        </div>}

                        {activeTab === "3" && <div className="skills-content">
                            <div>
                                <h4 className="skills-content__title">Чеки от самозанятых</h4>
                                <p className="skills-content__text">Исполнители понимают, что для бизнеса важна пунктуальность и прозрачность. За нарушение качества оказанных услуг предусмотрено снижение рейтинга и ответственность.<br /><br />Через приложение передаются координаты исполнителей в момент начала, окончания работы или промежуточных точек.</p>
                            </div>
                            <img src="/static/customer/skills/01.svg" alt="иллюстрация" className="skills-content__image"/>
                        </div>}

                        {activeTab === "4" && <div className="skills-content">
                            <div>
                                <h4 className="skills-content__title">Личный кабинет</h4>
                                <p className="skills-content__text">Исполнители понимают, что для бизнеса важна пунктуальность и прозрачность. За нарушение качества оказанных услуг предусмотрено снижение рейтинга и ответственность.<br /><br />Через приложение передаются координаты исполнителей в момент начала, окончания работы или промежуточных точек.</p>
                            </div>
                            <img src="/static/customer/skills/01.svg" alt="иллюстрация" className="skills-content__image"/>
                        </div>}
                    </div>
                </section>
                <Footer page="customer" />
            </StyledCustomer>
    )
}

const StyledCustomer = styled.div`
    background-color: #000729;
  
  .tabs__content_flex {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 25px;
  }

  .maps__loader {
    width: max-content;
    margin: 30px auto;
  }
  
  .slick-arrow {
    width: 48px;
    height: 48px;
    border-radius: 24px;
    font-size: 0;
    color: transparent;
    display: flex !important;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: background-color .3s ease;
    
    &:hover {
      background-color: #3357FF;
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
  
    .header {
      background: url('/static/customer/header/background.png') no-repeat center top / cover;
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
      padding-top: calc(50vh - 330px);
    }
  
    .header__title {
      font-size: 54px;
      max-width: 690px;
      line-height: 1.1em;
      font-weight: 800;
      color: #fff;
      margin-bottom: 25px;
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
  
  .header__form {
    width: min-content;
    border-radius: 12px;
    background-color: rgba(0, 7, 41, 0.5);
    padding: 25px;
    margin: 70px 0 90px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px 24px;
  }
  
  .header__input {
    background-color: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    font-size: 18px;
    font-family: inherit;
    font-weight: 500;
    color: #ABADBA;
    padding: 13px;
    width: 310px;
    
    &:focus {
      border: 1px solid #fff;
      color: #fff;
      
      &::placeholder {
        color: #fff;
      }
    }
  }
  
  .header__button {
    cursor: pointer;
    width: 310px;
    display: flex;
    justify-content: center;
    font-family: inherit;
    color: #fff;
    font-weight: 600;
    font-size: 18px;
    align-items: center;
    border: 0;
    background-color: #002CFB;
    border-radius: 4px;
    padding: 16px;
    transition: background-color .3s ease, color .3s ease;
    
    & span {
      margin-left: 16px;
    }
    
    &:hover {
      background-color: #fff;
      color: #002CFB;
      
      & span {
        background: url("data:image/svg+xml;charset=UTF-8,%3csvg width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M8.5 0L7.09 1.41L12.67 7H0.5V9H12.67L7.09 14.59L8.5 16L16.5 8L8.5 0Z' fill='%23002CFB'/%3e%3c/svg%3e")
      }
    }
  }
  
  .header__clients {
    display: flex;
  }
  
  .header__client {
    display: block;
  }
  
  .header__info {
    font-size: 14px;
    color: rgba(255, 255, 255, .6);
    padding: 35px 0;
    
    & a {
      color: inherit;
      transition: color .3s ease;
      text-decoration: underline;
      
      &:hover {
        color: #97A8FF;
      }
    }
  }
  
  .ribbons {
    max-width: 1920px;
    margin: auto;
    width: 100%;
    overflow: hidden;
    
    & img {
      width: 100%;
    }
  }
  
  .clients {
    margin: 90px 0 84px 0;
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
      color: #3357FF;
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
      background-color: #3357FF;
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
  
  .triggers {
    background: url('/static/customer/triggers/background.png') no-repeat center top / cover;
    padding: 170px 0 148px 0;
    color: #fff;
    position: relative;
    margin: auto;
    
    &::before {
      content: url('/static/customer/triggers/ribbon-top.png');
      display: block;
      width: 100%;
      overflow: hidden;
      position: absolute;
      top: -35px;
      text-align: center;
    }

    &::after {
      content: url('/static/customer/triggers/ribbon-bottom.png');
      display: block;
      width: 100%;
      overflow: hidden;
      position: absolute;
      bottom: -40px;
      text-align: center;
    }
  }
  
  .triggers__title {
    font-size: 46px;
    line-height: 1.2em;
    margin-bottom: 16px;
    
    & span {
      display: block;
    }
  }
  
  .triggers__text {
    font-size: 22px;
    line-height: 1.3em;
    color: #E3E4E8;
  }
  
  .triggers__image {
    width: 100%;
    margin-top: 80px;
  }
  
  .portfolio__title {
    & span {
      color: #3357FF;
    }
  }
  
  .about-job {
    padding: 190px 0 155px 0;
    color: #fff;
    background: url('/static/customer/about-job/background.png') no-repeat center top / cover;
    margin: auto;
    position: relative;

    &::before {
      content: url('/static/customer/about-job/ribbon-top.png');
      display: block;
      width: 100%;
      overflow: hidden;
      position: absolute;
      text-align: center;
      top: -45px;
    }

    &::after {
      content: url('/static/customer/about-job/ribbon-bottom.png');
      display: block;
      width: 100%;
      overflow: hidden;
      position: absolute;
      text-align: center;
      bottom: -55px;
    }
  }
  
  .container_about-job {
    display: flex;
    justify-content: space-between;
  }
  
  .about-job__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .about-job__title {
    font-size: 46px;
    line-height: 1.2em;
    font-weight: 800;
    margin-bottom: 16px;
    margin-top: 45px;
    margin-bottom: 16px;
    
    & span {
      display: block;
      color: #FFD500;
    }
  }
  
  .about-job__text {
    font-size: 22px;
    line-height: 1.3em;
    font-weight: 500;
    max-width: 570px;
  }
  
  .about-job__images {
    display: flex;
    align-items: center;
    margin-top: 50px;
  }
  
  .about-job__logo {
    display: block;
    
    &:not(:last-child) {
      margin-right: 65px;
    }
  }
  
  .about-job__description {
    font-size: 18px;
    line-height: 1.3em;
    color: #E3E4E8;
    max-width: 570px;
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
  
  .chart .maps__tabs {
    border-color: rgba(255, 255, 255, 0.2);
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
    background-color: #3357FF;
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
  
  .chart {
    background: url('/static/customer/chart/background.png') no-repeat center top / cover;
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

  .chart__loader {
    width: min-content;
    margin: auto;
  }

  .recharts-legend-wrapper {
    display: none;
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
  
  .skills {
    padding: 180px 0;
    position: relative;
    margin: auto;

    &::before {
      content: url('/static/customer/skills/ribbon-top.png');
      display: block;
      width: 100%;
      overflow: hidden;
      position: absolute;
      top: -20px;
      text-align: center;
    }

    &::after {
      content: url('/static/customer/skills/ribbon-bottom.png');
      display: block;
      width: 100%;
      overflow: hidden;
      position: absolute;
      z-index: 1;
      bottom: -40px;
      text-align: center;
    }
  }
  .skills__title {
    font-size: 46px;
    line-height: 1.2em;
    font-weight: 800;
    color: #fff;
    max-width: 940px;
    margin-bottom: 70px;
    
    & span {
      color: #3357FF;
    }
  }
  .skills__tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: space-between;
    margin-bottom: 30px;
  }
  .skills__tab {
    font-weight: 600;
  }
  
  .skills-content {
    display: flex;
    justify-content: space-between;
    color: #fff;
  }
  
  .skills-content__title {
    font-size: 28px;
    line-height: 1.3em;
    margin-bottom: 16px;
  }
  
  .skills-content__text {
    font-size: 18px;
    line-height: 1.3em;
    font-weight: 500;
    max-width: 570px;
  }
  
  .skills-content__image {
    border-radius: 12px;
  }
  
  @media (max-width: 1905px) {
    .header__image {
      width: 50vw;
    }
  }

  @media (max-height: 1020px) {
    .header__content {
      padding-top: 200px;
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
    
    .header__image {
      width: 650px;
    }
    
    .about-job__image {
      width: 560px;
    }
    
    .footer-header__image {
      position: absolute;
      right: 20px;
      bottom: 70px;
      width: 530px;
    }
  }

  @media screen and (max-width: 1399px) {
    .container {
      width: 315px;
    }
    
    .header {
      padding-top: 150px;
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

    .header__form {
      margin: 30px 0;
      width: 100%;
      padding: 20px;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      gap: 20px;

      & > div:nth-child(3) {
        display: none;
      }
    }

    .header__input,
    .header__button {
      width: 100%;
    }
    
    .header__button {
      order: 1;
    }
    
    .header__clients {
      display: none;
    }

    .header__info {
      padding: 0;
      font-size: 13px;
    }
    
    .ribbons img {
      width: auto;
    }
    
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
    
    .triggers {
      padding: 90px 0 100px 0;
      
      & .container_smail {
        display: flex;
        flex-direction: column;
      }
    }

    .triggers__title {
      font-size: 24px;
      margin-bottom: 12px;
    }
    
    .triggers__text {
      font-size: 16px;
    }

    .triggers__image {
      margin-bottom: 30px;
      order: -1;
      margin-top: 0;
    }
    
    .container_about-job {
      flex-direction: column-reverse;
    }
    
    .about-job__image {
      width: 100%;
    }

    .about-job__title {
      font-size: 24px;
      margin-bottom: 12px;
      margin-top: 30px;
    }

    .about-job__text {
      font-size: 16px;
    }

    .about-job__images {
      display: none;
    }
    
    .about-job__description {
      font-size: 14px;
    }
    
    .about-job {
      padding: 150px 0 110px 0;
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
      padding: 50px 0;
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
    
    .skills {
      padding: 150px 0 130px 0;
      overflow: hidden;
    }
    
    .skills__title {
      font-size: 24px;
      margin-bottom: 30px;
    }
    
    .skills__tabs {
      display: flex;
      width: 100vw;
      flex-wrap: nowrap;
      gap: 10px;
      overflow: auto;
    }
    
    .skills-content {
      flex-direction: column-reverse;
    }

    .skills-content__image {
      border-radius: 5px;
    }
    
    .skills-content__title {
      font-size: 18px;
      margin-bottom: 10px;
      margin-top: 15px;
    }
    
    .skills-content__text {
      font-size: 14px;
    }
    
    & .footer-header__title {
      margin-bottom: 30px;
    }
    
    & .footer-header__image {
      width: 100%;
      position: static;
      margin-left: 0;
    }
  }
`

export default CustomerPage