import React, {useState} from 'react'
import styled from "styled-components";

const Portfolio = ({ type, className }) => {
    const [ isMoreButtonClicked, setIsMoreButtonClicked ] = useState(false)

    if (type === 'block') return <StyledPortfolioBlock className={className ? `container ${className}` : "container"}>
        <h3 className="portfolio__title"><span>Изучите кейсы</span> Skilla с сетевыми компаниями-заказчиками</h3>
        <p className="portfolio__text">Skilla сотрудничает с компаниями на постоянной<span /> основе, подбирая самозанятых на заказы</p>

        <div className="portfolio__grid">
            <a href="#">
                <div className="portfolio-item">
                    <div>
                        <img src="/static/customer/portfolio/01/logo.png" alt="логотип компании" className="portfolio-item__logo"/>
                        <p className="portfolio-item__text">Пока вы спали наши сотрудники разгрузили 5 тонн козьего сыра в ночную смену за 2021 год
                            <span className="arrow-right-top-big icon"></span>
                        </p>
                    </div>

                    <div className="portfolio-item__images">
                        <img src="/static/customer/portfolio/01/01.png" alt="изображение" className="portfolio-item__image"/>
                        <img src="/static/customer/portfolio/01/02.png" alt="изображение" className="portfolio-item__image"/>
                        <img src="/static/customer/portfolio/01/03.png" alt="изображение" className="portfolio-item__image"/>
                    </div>
                </div>
            </a>

            <a href="#">
                <div className="portfolio-item">
                    <div>
                        <img src="/static/customer/portfolio/02/logo.png" alt="логотип компании" className="portfolio-item__logo"/>
                        <p className="portfolio-item__text">Блокноты и ручки – только вершина айсберга
                            <span className="arrow-right-top-big icon"></span>
                        </p>
                    </div>

                    <div className="portfolio-item__images">
                        <img src="/static/customer/portfolio/02/01.png" alt="изображение" className="portfolio-item__image"/>
                        <img src="/static/customer/portfolio/02/02.png" alt="изображение" className="portfolio-item__image"/>
                        <img src="/static/customer/portfolio/02/03.png" alt="изображение" className="portfolio-item__image"/>
                    </div>
                </div>
            </a>

            <a href="#">
                <div className="portfolio-item">
                    <div>
                        <img src="/static/customer/portfolio/03/logo.png" alt="логотип компании" className="portfolio-item__logo"/>
                        <p className="portfolio-item__text">Как оператор погрузчика сжег гипермаркет площадью 4800 кв. м
                            <span className="arrow-right-top-big icon"></span>
                        </p>
                    </div>

                    <div className="portfolio-item__images">
                        <img src="/static/customer/portfolio/03/01.png" alt="изображение" className="portfolio-item__image"/>
                        <img src="/static/customer/portfolio/03/02.png" alt="изображение" className="portfolio-item__image"/>
                        <img src="/static/customer/portfolio/03/03.png" alt="изображение" className="portfolio-item__image"/>
                    </div>
                </div>
            </a>

            <a href="#">
                <div className="portfolio-item">
                    <div>
                        <img src="/static/customer/portfolio/04/logo.png" alt="логотип компании" className="portfolio-item__logo"/>
                        <p className="portfolio-item__text">4 буквы, которые мы видим при каждой интернет-покупке, но не знаем их значения
                            <span className="arrow-right-top-big icon"></span>
                        </p>
                    </div>

                    <div className="portfolio-item__images">
                        <img src="/static/customer/portfolio/04/01.png" alt="изображение" className="portfolio-item__image"/>
                        <img src="/static/customer/portfolio/04/02.png" alt="изображение" className="portfolio-item__image"/>
                        <img src="/static/customer/portfolio/04/03.png" alt="изображение" className="portfolio-item__image"/>
                    </div>
                </div>
            </a>

            {isMoreButtonClicked && <>
                <a href="#">
                    <div className="portfolio-item">
                        <div>
                            <img src="/static/customer/portfolio/01/logo.png" alt="логотип компании" className="portfolio-item__logo"/>
                            <p className="portfolio-item__text">Пока вы спали наши сотрудники разгрузили 5 тонн козьего сыра в ночную смену за 2021 год
                                <span className="arrow-right-top-big icon"></span>
                            </p>
                        </div>

                        <div className="portfolio-item__images">
                            <img src="/static/customer/portfolio/01/01.png" alt="изображение" className="portfolio-item__image"/>
                            <img src="/static/customer/portfolio/01/02.png" alt="изображение" className="portfolio-item__image"/>
                            <img src="/static/customer/portfolio/01/03.png" alt="изображение" className="portfolio-item__image"/>
                        </div>
                    </div>
                </a>

                <a href="#">
                    <div className="portfolio-item">
                        <div>
                            <img src="/static/customer/portfolio/02/logo.png" alt="логотип компании" className="portfolio-item__logo"/>
                            <p className="portfolio-item__text">Блокноты и ручки – только вершина айсберга
                                <span className="arrow-right-top-big icon"></span>
                            </p>
                        </div>

                        <div className="portfolio-item__images">
                            <img src="/static/customer/portfolio/02/01.png" alt="изображение" className="portfolio-item__image"/>
                            <img src="/static/customer/portfolio/02/02.png" alt="изображение" className="portfolio-item__image"/>
                            <img src="/static/customer/portfolio/02/03.png" alt="изображение" className="portfolio-item__image"/>
                        </div>
                    </div>
                </a>

                <a href="#">
                    <div className="portfolio-item">
                        <div>
                            <img src="/static/customer/portfolio/03/logo.png" alt="логотип компании" className="portfolio-item__logo"/>
                            <p className="portfolio-item__text">Как оператор погрузчика сжег гипермаркет площадью 4800 кв. м
                                <span className="arrow-right-top-big icon"></span>
                            </p>
                        </div>

                        <div className="portfolio-item__images">
                            <img src="/static/customer/portfolio/03/01.png" alt="изображение" className="portfolio-item__image"/>
                            <img src="/static/customer/portfolio/03/02.png" alt="изображение" className="portfolio-item__image"/>
                            <img src="/static/customer/portfolio/03/03.png" alt="изображение" className="portfolio-item__image"/>
                        </div>
                    </div>
                </a>

                <a href="#">
                    <div className="portfolio-item">
                        <div>
                            <img src="/static/customer/portfolio/04/logo.png" alt="логотип компании" className="portfolio-item__logo"/>
                            <p className="portfolio-item__text">4 буквы, которые мы видим при каждой интернет-покупке, но не знаем их значения
                                <span className="arrow-right-top-big icon"></span>
                            </p>
                        </div>

                        <div className="portfolio-item__images">
                            <img src="/static/customer/portfolio/04/01.png" alt="изображение" className="portfolio-item__image"/>
                            <img src="/static/customer/portfolio/04/02.png" alt="изображение" className="portfolio-item__image"/>
                            <img src="/static/customer/portfolio/04/03.png" alt="изображение" className="portfolio-item__image"/>
                        </div>
                    </div>
                </a>
            </>}
        </div>
        {!isMoreButtonClicked && <button className="portfolio__more" onClick={() => setIsMoreButtonClicked(true)}>Показать еще</button>}
    </StyledPortfolioBlock>

    return <StyledPortfolio className="portfolio">
        <div className="container_smail">
            <h3 className="portfolio__title"><span>Изучите кейсы</span> Skilla с сетевыми компаниями-заказчиками</h3>
            <p className="portfolio__text">Skilla сотрудничает с компаниями на постоянной<span /> основе, подбирая самозанятых на заказы</p>

            <div className="portfolio__grid">
                <a href="#">
                    <div className="portfolio-item">
                        <div>
                            <img src="/static/customer/portfolio/01/logo.png" alt="логотип компании" className="portfolio-item__logo"/>
                            <p className="portfolio-item__text">Пока вы спали наши сотрудники разгрузили 5 тонн козьего сыра в ночную смену за 2021 год
                                <span className="arrow-right-top-big icon"></span>
                            </p>
                        </div>

                        <div className="portfolio-item__images">
                            <img src="/static/customer/portfolio/01/01.png" alt="изображение" className="portfolio-item__image"/>
                            <img src="/static/customer/portfolio/01/02.png" alt="изображение" className="portfolio-item__image"/>
                            <img src="/static/customer/portfolio/01/03.png" alt="изображение" className="portfolio-item__image"/>
                        </div>
                    </div>
                </a>

                <a href="#">
                    <div className="portfolio-item">
                        <div>
                            <img src="/static/customer/portfolio/02/logo.png" alt="логотип компании" className="portfolio-item__logo"/>
                            <p className="portfolio-item__text">Блокноты и ручки – только вершина айсберга
                                <span className="arrow-right-top-big icon"></span>
                            </p>
                        </div>

                        <div className="portfolio-item__images">
                            <img src="/static/customer/portfolio/02/01.png" alt="изображение" className="portfolio-item__image"/>
                            <img src="/static/customer/portfolio/02/02.png" alt="изображение" className="portfolio-item__image"/>
                            <img src="/static/customer/portfolio/02/03.png" alt="изображение" className="portfolio-item__image"/>
                        </div>
                    </div>
                </a>

                <a href="#">
                    <div className="portfolio-item">
                        <div>
                            <img src="/static/customer/portfolio/03/logo.png" alt="логотип компании" className="portfolio-item__logo"/>
                            <p className="portfolio-item__text">Как оператор погрузчика сжег гипермаркет площадью 4800 кв. м
                                <span className="arrow-right-top-big icon"></span>
                            </p>
                        </div>

                        <div className="portfolio-item__images">
                            <img src="/static/customer/portfolio/03/01.png" alt="изображение" className="portfolio-item__image"/>
                            <img src="/static/customer/portfolio/03/02.png" alt="изображение" className="portfolio-item__image"/>
                            <img src="/static/customer/portfolio/03/03.png" alt="изображение" className="portfolio-item__image"/>
                        </div>
                    </div>
                </a>

                <a href="#">
                    <div className="portfolio-item">
                        <div>
                            <img src="/static/customer/portfolio/04/logo.png" alt="логотип компании" className="portfolio-item__logo"/>
                            <p className="portfolio-item__text">4 буквы, которые мы видим при каждой интернет-покупке, но не знаем их значения
                                <span className="arrow-right-top-big icon"></span>
                            </p>
                        </div>

                        <div className="portfolio-item__images">
                            <img src="/static/customer/portfolio/04/01.png" alt="изображение" className="portfolio-item__image"/>
                            <img src="/static/customer/portfolio/04/02.png" alt="изображение" className="portfolio-item__image"/>
                            <img src="/static/customer/portfolio/04/03.png" alt="изображение" className="portfolio-item__image"/>
                        </div>
                    </div>
                </a>

                {isMoreButtonClicked && <>
                    <a href="#">
                        <div className="portfolio-item">
                            <div>
                                <img src="/static/customer/portfolio/01/logo.png" alt="логотип компании" className="portfolio-item__logo"/>
                                <p className="portfolio-item__text">Пока вы спали наши сотрудники разгрузили 5 тонн козьего сыра в ночную смену за 2021 год
                                    <span className="arrow-right-top-big icon"></span>
                                </p>
                            </div>

                            <div className="portfolio-item__images">
                                <img src="/static/customer/portfolio/01/01.png" alt="изображение" className="portfolio-item__image"/>
                                <img src="/static/customer/portfolio/01/02.png" alt="изображение" className="portfolio-item__image"/>
                                <img src="/static/customer/portfolio/01/03.png" alt="изображение" className="portfolio-item__image"/>
                            </div>
                        </div>
                    </a>

                    <a href="#">
                        <div className="portfolio-item">
                            <div>
                                <img src="/static/customer/portfolio/02/logo.png" alt="логотип компании" className="portfolio-item__logo"/>
                                <p className="portfolio-item__text">Блокноты и ручки – только вершина айсберга
                                    <span className="arrow-right-top-big icon"></span>
                                </p>
                            </div>

                            <div className="portfolio-item__images">
                                <img src="/static/customer/portfolio/02/01.png" alt="изображение" className="portfolio-item__image"/>
                                <img src="/static/customer/portfolio/02/02.png" alt="изображение" className="portfolio-item__image"/>
                                <img src="/static/customer/portfolio/02/03.png" alt="изображение" className="portfolio-item__image"/>
                            </div>
                        </div>
                    </a>

                    <a href="#">
                        <div className="portfolio-item">
                            <div>
                                <img src="/static/customer/portfolio/03/logo.png" alt="логотип компании" className="portfolio-item__logo"/>
                                <p className="portfolio-item__text">Как оператор погрузчика сжег гипермаркет площадью 4800 кв. м
                                    <span className="arrow-right-top-big icon"></span>
                                </p>
                            </div>

                            <div className="portfolio-item__images">
                                <img src="/static/customer/portfolio/03/01.png" alt="изображение" className="portfolio-item__image"/>
                                <img src="/static/customer/portfolio/03/02.png" alt="изображение" className="portfolio-item__image"/>
                                <img src="/static/customer/portfolio/03/03.png" alt="изображение" className="portfolio-item__image"/>
                            </div>
                        </div>
                    </a>

                    <a href="#">
                        <div className="portfolio-item">
                            <div>
                                <img src="/static/customer/portfolio/04/logo.png" alt="логотип компании" className="portfolio-item__logo"/>
                                <p className="portfolio-item__text">4 буквы, которые мы видим при каждой интернет-покупке, но не знаем их значения
                                    <span className="arrow-right-top-big icon"></span>
                                </p>
                            </div>

                            <div className="portfolio-item__images">
                                <img src="/static/customer/portfolio/04/01.png" alt="изображение" className="portfolio-item__image"/>
                                <img src="/static/customer/portfolio/04/02.png" alt="изображение" className="portfolio-item__image"/>
                                <img src="/static/customer/portfolio/04/03.png" alt="изображение" className="portfolio-item__image"/>
                            </div>
                        </div>
                    </a>
                </>}
            </div>

            {!isMoreButtonClicked && <button className="portfolio__more" onClick={() => setIsMoreButtonClicked(true)}>Показать еще</button>}
        </div>
    </StyledPortfolio>
}

const StyledPortfolio = styled.section`
    margin: 135px 0 85px 0;
    color: #fff;

  .portfolio__title {
    font-size: 40px;
    line-height: 1.2em;
    font-weight: 800;
    margin-bottom: 15px;
    max-width: 925px;
  }

  .portfolio__text {
    font-size: 22px;
    line-height: 1.3em;
    color: #E3E4E8;
    max-width: 570px;
  }

  .portfolio__grid {
    margin-top: 55px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;

    & > a {
      text-decoration: none;
    }
  }

  .portfolio-item {
    cursor: pointer;
    border-radius: 12px;
    padding: 24px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #303550;
    transition: background-color .3s ease;

    &:hover {
      background-color: #4D5268;

      & .portfolio-item__text span {
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='13' height='13' viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M1.34315 0.34118V2.33522L9.24153 2.34229L0.636039 10.9478L2.05025 12.362L10.6557 3.75651L10.6628 11.6549H12.6569V0.34118H1.34315Z' fill='white'/%3e%3c/svg%3e");
      }
    }
  }

  .portfolio-item__logo {
    display: block;
    margin-bottom: 16px;
  }

  .portfolio-item__text {
    font-size: 18px;
    line-height: 1.2em;
    color: #E3E4E8;
    display: flex;
    justify-content: space-between;
  }

  .portfolio-item__images {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 8px;
    margin-top: 32px;
  }

  .portfolio__more {
    padding: 12.5px 45px;
    background-color: transparent;
    border: 1px solid #C7C9D1;
    color: #C7C9D1;
    font-size: 18px;
    line-height: 1.3em;
    font-weight: 600;
    font-family: inherit;
    cursor: pointer;
    border-radius: 4px;
    display: block;
    margin: 40px auto 0 auto;
    transition: background-color .3s ease, color .3s ease;

    &:hover {
      background-color: #fff;
      color: #000729;
    }
  }
  
  @media screen and (max-width: 1399px) {
      margin: 70px 0;

    .portfolio__title {
      font-size: 24px;
      margin-bottom: 12px;
    }

    .portfolio__text {
      font-size: 16px;
    }

    .portfolio__grid {
      grid-template-columns: 1fr;
      grid-gap: 15px;
      margin-top: 30px;
    }

    .portfolio-item  {
      width: 315px;
      padding: 10px;
      border-radius: 5px;
    }

    .portfolio-item__text {
      font-size: 14px;

      & span {
        margin-left: 5px;
      }
    }

    .portfolio-item__logo {
      margin-bottom: 12px;
      height: 20px;
    }

    .portfolio-item__images {
      margin-top: 12px;
      grid-gap: 5px;
    }

    .portfolio-item__image {
      width: 100%;
    }

    .portfolio__more {
      width: 100%;
      margin-top: 15px;
      font-size: 14px;
      padding: 10px 25px;
    }
  }
`

const StyledPortfolioBlock = styled.div`
    color: #fff;

  .portfolio__title {
    font-size: 40px;
    line-height: 1.2em;
    font-weight: 800;
    margin-bottom: 15px;
    max-width: 925px;
  }

  .portfolio__text {
    font-size: 22px;
    line-height: 1.3em;
    color: #E3E4E8;
    max-width: 570px;
  }

  .portfolio__grid {
    margin-top: 55px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;

    & > a {
      text-decoration: none;
    }
  }

  .portfolio-item {
    cursor: pointer;
    border-radius: 12px;
    padding: 24px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #303550;
    transition: background-color .3s ease;

    &:hover {
      background-color: #4D5268;

      & .portfolio-item__text span {
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='13' height='13' viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M1.34315 0.34118V2.33522L9.24153 2.34229L0.636039 10.9478L2.05025 12.362L10.6557 3.75651L10.6628 11.6549H12.6569V0.34118H1.34315Z' fill='white'/%3e%3c/svg%3e");
      }
    }
  }

  .portfolio-item__logo {
    display: block;
    margin-bottom: 16px;
  }

  .portfolio-item__text {
    font-size: 18px;
    line-height: 1.2em;
    color: #E3E4E8;
    display: flex;
    justify-content: space-between;
  }

  .portfolio-item__images {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 8px;
    margin-top: 32px;
  }

  .portfolio__more {
    padding: 12.5px 45px;
    background-color: transparent;
    border: 1px solid #C7C9D1;
    color: #C7C9D1;
    font-size: 18px;
    line-height: 1.3em;
    font-weight: 600;
    font-family: inherit;
    cursor: pointer;
    border-radius: 4px;
    display: block;
    margin: 40px auto 0 auto;
    transition: background-color .3s ease, color .3s ease;

    &:hover {
      background-color: #fff;
      color: #000729;
    }
  }
  
  @media screen and (max-width: 1399px) {
    .portfolio__title {
      font-size: 24px;
      margin-bottom: 12px;
    }

    .portfolio__text {
      font-size: 16px;
    }

    .portfolio__grid {
      grid-template-columns: 1fr;
      grid-gap: 15px;
      margin-top: 30px;
    }

    .portfolio-item  {
      width: 315px;
      padding: 10px;
      border-radius: 5px;
    }

    .portfolio-item__text {
      font-size: 14px;

      & span {
        margin-left: 5px;
      }
    }

    .portfolio-item__logo {
      margin-bottom: 12px;
      height: 20px;
    }

    .portfolio-item__images {
      margin-top: 12px;
      grid-gap: 5px;
    }

    .portfolio-item__image {
      width: 100%;
    }

    .portfolio__more {
      width: 100%;
      margin-top: 15px;
      font-size: 14px;
      padding: 10px 25px;
    }
  }
`

export default Portfolio