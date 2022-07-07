import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DownloadPage = () => {
    const [ width, setWidth ] = useState(window?.innerWidth)

    useEffect(() => {
        const cb = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', cb)

        return () => window.removeEventListener('resize', cb)
    }, [])

    return (
        <StyledDownload>
            <Navbar page="worker" />
            <header className="header">
                <div className="container">
                    <div className="header__content">
                        <img src={width <= 1399 ? "/static/worker/download/icon_mobile.png" : "/static/worker/download/icon.png"} alt="Skilla Работа" className="header__icon"/>
                        <h1 className="header__title">Скачайте сегодня<a href="#">бесплатное приложение</a>и отправляйтесь на заказ</h1>
                        {width <= 1399 && <button className="header__button">
                            Загрузить приложение
                            <span className="icon download-big"></span>
                        </button>}
                        <img src="/static/worker/download/qr-code.png" alt="qr-code" className="header__qr-code"/>
                        
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

                    <img src="/static/worker/download/illustration.png" alt="иллюстрация" className="header__image"/>
                </div>
            </header>
            <section className="ribbons">
                <img src="/static/worker/download/ribbons.png" alt="ленты с текстом" className="ribbons__image"/>
            </section>
            <section className="margin-section" />
            <Footer page="worker" type="faq" />
        </StyledDownload>
    )
}

const StyledDownload = styled.div`
    background-color: #000729;
  
  .header {
    width: 100%;
    min-height: 100vh;
    color: #fff;
    background: url('/static/worker/header/background.png') no-repeat center top / cover;
    position: relative;
  }
  
  .header__content {
    padding-top: calc(50vh - 350px);
  }
  
  .header__title {
    font-size: 45px;
    line-height: 1.1em;
    font-weight: 800;
    margin: 40px 0 50px 0;
    
    & a {
      display: block;
      text-decoration: none;
      color: #FED402;
    }
  }
  
  .header__apps {
    display: flex;
    gap: 40px;
    margin-top: 50px;
  }
  
  .header__image {
    position: absolute;
    right: 0;
    bottom: 0;
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
  
  .margin-section {
    margin-top: -45px;
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
  }
  
  @media screen and (max-width: 1399px) {
    .header {
      padding: 150px 0 0 0;
      overflow: hidden;
    }
    
    .header__title {
      font-size: 36px;
      line-height: 1.2em;
      text-align: center;
    }
    
    .header__qr-code {
      display: none;
    }
    
    .header__apps {
      display: none;
    }
    
    .header__image {
      position: relative;
    }
    
    .header__button {
      display: block;
      border: 0;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 16px 24px;
      border-radius: 4px;
      background-color: rgba(231, 204, 255, 0.25);
      font-family: inherit;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      color: #fff;
      transition: background-color .3s ease;
      
      & span {
        margin-left: 20px;
      }
      
      &:hover {
        background-color: #8800FF;
      }
    }
    
    .container {
      width: 315px;
    }
    
    .header__icon {
      margin: auto;
      display: block;
      margin-bottom: 40px;
    }
    
    .header__image {
      margin-top: 65px;
      margin-left: -15px;
    }
    
    .ribbons {
      background: url("/static/worker/download/ribbons.png") no-repeat center top / cover;
      height: 90px;
      
      & img {
        display: none;
      }
    }
  }
`

export default DownloadPage