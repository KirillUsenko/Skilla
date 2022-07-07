import react, {useEffect, useState} from 'react'
import styled from "styled-components";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import { Slider } from 'primereact/slider';
import RadioGroup from "./RadioGroup";

const Calculator = ({ submitForm, phone, setPhone, setRadio }) => {
    const [ startCapital, setStartCapital ] = useState(100000)
    const [ peoples, setPeoples ] = useState(3)
    const [ hourPrice, setHourPrice ] = useState(200)
    const [ hours, setHours ] = useState(2)
    const [ commission, setCommission ] = useState(30)
    const [ profit, setProfit ] = useState(peoples * hours * hourPrice * commission / 100 * 22)
    const [ year1, setYear1 ] = useState(profit * 12)
    const [ year2, setYear2 ] = useState(year1 * 2.5)
    const [ year3, setYear3 ] = useState(year1 * 4)

    useEffect(() => {
        const profit = peoples * hours * hourPrice * commission / 100 * 22
        setProfit(profit)
        setYear1(profit * 12)
        setYear2(profit * 12 * 2.5)
        setYear3(profit * 12 * 4)
    }, [peoples, hourPrice, hours, commission])

    useEffect(() => {
        if (startCapital <= 200000) {
            setPeoples(3)
            setHourPrice(200)
            setHours(2)
            setCommission(30)
        }
        if (startCapital <= 500000 && startCapital > 200000) {
            setPeoples(35)
            setHourPrice(200)
            setHours(8)
            setCommission(40)
        }
        if (startCapital > 500000 && startCapital < 1000000) {
            setPeoples(50)
            setHours(12)
            setCommission(60)
            setHourPrice(300)
        }
        if (startCapital > 1000000) {
            setPeoples(150)
            setHours(24)
            setCommission(70)
            setHourPrice(400)
        }
    }, [startCapital])

    return (
        <StyledCalculator className="calculator-block">
            <div className="calculator__content">
                <div className="calculator-data">
                    <header className="calculator-data__header">
                        <div className="calculator-slider calculator-slider_capital">
                            <h5 className="calculator-slider__title">Ваши вложения в бизнес на старте</h5>
                            <Slider step={15000} min={100000} max={1500000} value={startCapital} onChange={(e) => setStartCapital(e.value)} />
                            <p className="calculator-slider__value">{startCapital.toLocaleString('ru-RU')} <span>₽</span></p>
                        </div>
                    </header>

                    <footer className="calculator-data__footer">
                            <div className="calculator-slider calculator-slider_workers">
                                <h5 className="calculator-slider__title">Исполнителей на заказах в день</h5>
                                <Slider step={1} min={3} max={150} value={peoples} onChange={(e) => setPeoples(e.value)} />
                                <p className="calculator-slider__value">{peoples} человек</p>
                            </div>
                            <div className="calculator-slider calculator-slider_hour-price">
                                <h5 className="calculator-slider__title">Цена часа для клиента</h5>
                                <Slider step={1} min={200} max={400} value={hourPrice} onChange={(e) => setHourPrice(e.value)} />
                                <p className="calculator-slider__value">{hourPrice.toLocaleString('ru-RU')} <span>₽</span></p>
                            </div>
                            <div className="calculator-slider calculator-slider_hours">
                                <h5 className="calculator-slider__title">Длительность заказа</h5>
                                <Slider step={1} min={2} max={24} value={hours} onChange={(e) => setHours(e.value)} />
                                <p className="calculator-slider__value">{hours} часов</p>
                            </div>
                            <div className="calculator-slider calculator-slider_commission">
                                <h5 className="calculator-slider__title">Комиссия за заказ</h5>
                                <Slider min={30} max={70} value={commission} onChange={(e) => setCommission(e.value)} />
                                <p className="calculator-slider__value">{commission}%</p>
                            </div>
                    </footer>
                </div>
                <div className="calculator-result">
                    <h5 className="calculator-result__subtitle">Ваша прибыль за месяц составит:</h5>
                    <h2 className="calculator-result__title">{profit.toLocaleString('ru-RU')} ₽</h2>
                    <div className="calculator-result__years">
                        <div className="calculator-result__year">
                            Первый год
                            <span>{year1.toLocaleString('ru-RU')} ₽</span>
                        </div>
                        <div className="calculator-result__year">
                            Второй год
                            <span>{year2.toLocaleString('ru-RU')} ₽</span>
                        </div>
                        <div className="calculator-result__year">
                            Третий год
                            <span>{year3.toLocaleString('ru-RU')} ₽</span>
                        </div>
                    </div>
                    <form onSubmit={submitForm} method="GET" className="calculator-result__form">
                        <div className="header-form__flex">
                            <input value={phone} onChange={e => setPhone(e.target.value)} type="text" required placeholder="+7 (___) ___-__-__" pattern='\+?[0-9\s\-\(\)]+' className="header-form__input" style={{color: '#fff'}}/>
                            <button type="submit" className="header-form__button">
                                Получить расчет
                            </button>
                        </div>
                        <RadioGroup
                            defaultValue="telegram"
                            onChange={value => setRadio(value)} />
                    </form>
                </div>
            </div>
            <p className="calculator__legend">Средний показатель</p>
        </StyledCalculator>
    )
}

const StyledCalculator = styled.div`
  .calculator__content {
    margin-top: 85px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
  }
  
  .calculator-data {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  
  .calculator-data__header {
    padding: 32px;
    border-radius: 12px;
    background-color: #303550;
  }
  
  .calculator-slider__title {
    font-size: 22px;
    line-height: 1.3em;
    font-weight: 500;
    margin-bottom: 30px;
  }
  
  .calculator-slider__value {
    margin-top: 10px;
    font-weight: 700;
    font-size: 22px;
    line-height: 1.3em;
    
    & span {
      color: #ABADBA;
    }
  }
  
  .calculator-data__footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px 45px;
    padding: 32px;
    border-radius: 12px;
    background-color: #303550;
    
    & .calculator-slider__title {
      font-size: 18px;
      margin-bottom: 15px;
    }
  }
  
  .calculator-result {
    background-color: #222538;
    padding: 32px;
    border-radius: 12px;
  }
  
  .calculator-result__subtitle {
    font-size: 22px;
    line-height: 1.3em;
    font-weight: 500;
    margin-bottom: 8px;
  }
  
  .calculator-result__title {
    font-weight: 800;
    font-size: 46px;
    line-height: 1.3em;
    color: #00FF88;
  }
  
  .calculator-result__years {
    margin: 34px 0 64px 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  
  .calculator-result__year {
    color: #ABADBA;
    font-size: 20px;
    line-height: 1.3em;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    
    & span {
      font-weight: 700;
      font-size: 22px;
      line-height: 1.2em;
      color: #fff;
    }
  }
  
  .calculator-result__form {
    & .header-form__checkbox::before {
      background-color: #222538;
    }

    & .header-form__checkbox:checked::before {
      background-color: #222538;
    }
  }

  .calculator-result__form .header-form__flex {
    justify-content: space-between;
  }

  .calculator-result__form .header-form__input {
    width: 326px;
  }
  
  .calculator__legend {
    margin-top: 15px;
    font-size: 18px;
    line-height: 1.3em;
    font-weight: 500;
    color: #ABADBA;
    display: flex;
    align-items: center;
    
    &::before {
      content: "";
      display: block;
      width: 44px;
      height: 6px;
      border-radius: 3px;
      background-color: #00CC6E;
      margin-right: 16px;
    }
  }
  
  .calculator-slider_capital .p-slider::after {
    width: 160px;
    left: 135px;
  }
  
  .calculator-slider_workers .p-slider::after {
    left: 48px;
    width: 40px;
  }

  .calculator-slider_hours .p-slider::after {
    left: 67px;
    width: 50px;
  }
  
  .calculator-slider_commission .p-slider::after {
    left: 60px;
    width: 160px;
  }
  
  .calculator-slider_hour-price .p-slider::after {
    left: 0;
    width: 146px;
  }
  
  .p-slider {
    position: relative;
    
    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 4px;
      background-color: #00CC6E;
    }
  }

  .p-slider .p-slider-range {
    background: rgba(48, 53, 80, .5);
  }

  .p-slider-handle {
    border: 3px solid #ABADBA;
    
    &:hover {
      box-shadow: none !important;
      background: #ABADBA !important;
      border-color: #ABADBA !important;
    }
  }
  
  @media screen and (max-width: 1399px) {
    .calculator__title {
      font-size: 24px;
      margin-bottom: 12px;
    }

    .calculator__description {
      font-size: 16px;
      margin-bottom: 30px;
    }
  }
`

export default Calculator