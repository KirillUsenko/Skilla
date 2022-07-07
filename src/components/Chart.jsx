import React, {useEffect, useState} from "react";
import {XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area, AreaChart, Line, LineChart} from "recharts";
import {getRevenueGraph} from "../Api";

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="chart-tooltip">
                <p className="chart-tooltip__title">{label}</p>
                <p className="chart-tooltip__revenue">Выручка: {payload[0].payload.revenue.toLocaleString('ru-RU')} ₽</p>
                <p className="chart-tooltip__orders">Заказов: {(payload[0].payload.orders / 2000).toLocaleString('ru-RU')}</p>
            </div>
        );
    }

    return null
}

const Chart = ({ page }) => {
    const isCustomer = page === 'customer' ? true : false
    const [ isLoading, setIsLoading ] = useState(true)
    const  [ chartData, setChartData ] = useState([])
    const [ searchCityType, setSearchCityType ] = useState('year')
    const [ width, setWidth ] = useState(window?.innerWidth)

    const changeSearchCityType = (type) => setSearchCityType(type)

    useEffect(() => {
        setIsLoading(true)
        getRevenueGraph(searchCityType)
            .then(response => {
                let mas = []

                response.data.forEach(item => {
                    const date = new Date(item.date)

                    const monthMas = [
                        'Янв',
                        'Фев',
                        'Март',
                        'Апр',
                        'Май',
                        'Июнь',
                        'Июль',
                        'Авг',
                        'Сент',
                        'Окт',
                        'Нояб',
                        'Дек'
                    ]

                    mas.push({...item, orders: item.orders * 2000, date: `${monthMas[date.getMonth()]} ${date.getFullYear()}`})
                })
                setChartData(mas)
                setIsLoading(false)
            })
            .catch(e => console.log(e))
    }, [searchCityType])

    useEffect(() => {
        const cb = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', cb)

        return () => window.removeEventListener('resize', cb)
    }, [])

    return (
        <section className="chart">
            <div className="container container_maps">
                <div className="maps__text">
                    {isCustomer ? <>
                    <h2 className="maps__title" style={{color: "#fff"}}>Количество заказов — <span />показатель надежности Skilla</h2>
                    <p className="maps__description">60 городов, 250+ офисов партнеров, 10 часовых поясов</p>
                    </> : <>
                        <h2 className="maps__title" style={{color: "#fff"}}><span>2,5 млрд руб в год</span> — станьте частью бизнес-масштаба Skilla</h2>
                        <p className="maps__description">60 городов, 250+ офисов партнеров, 10 часовых поясов</p>

                    </>}
                </div>
                <div className="maps__tabs">
                    <button className={searchCityType === "year" ? "maps__tab maps__tab_active" : "maps__tab"} onClick={() => changeSearchCityType('year')}>Год</button>
                    <button className={searchCityType === "2year" ? "maps__tab maps__tab_active" : "maps__tab"} onClick={() => changeSearchCityType('2year')}>Два года</button>
                    <button className={searchCityType === "3year" ? "maps__tab maps__tab_active" : "maps__tab"} onClick={() => changeSearchCityType('3year')}>Три года</button>
                </div>
            </div>
            <div className="container">
                <div className="chart__chart">
                    {isLoading && <div className="chart__loader">
                        <div className="lds-dual-ring white"></div>
                    </div>}
                    {!isLoading && isCustomer && <AreaChart width={width > 1600 ? 1400 : width <= 1399 ? 315 : 1200} height={345} data={chartData}>
                        <CartesianGrid />
                        <XAxis dataKey="date" />
                        <Tooltip content={<CustomTooltip />} />
                        <Area strokeWidth={2} type="linear" dataKey="orders" fill="rgba(0, 82, 204, 0.5)" stroke="#3357FF" activeDot={{stroke: '#647FFF', strokeWidth: '3px'}} dot={{fill: '#647FFF', strokeWidth: '0'}} />
                    </AreaChart>}
                    {!isLoading && !isCustomer && <LineChart width={width > 1600 ? 1400 : width <= 1399 ? 315 : 1200} height={345} data={chartData}>
                        <CartesianGrid />
                        <XAxis dataKey="date" />
                        <Tooltip content={<CustomTooltip />} />
                        <Line strokeWidth={2} type="linear" dataKey="orders" stroke="#FFD500" activeDot={{
                            stroke: '#FFE666',
                            fill: '#FFD500',
                            strokeWidth: '3px'
                        }} dot={{
                            stroke: '#FFD500',
                            fill: '#FFD500',
                            strokeWidth: '0'
                        }} />
                        <Line strokeWidth={2} type="linear" fill="rgba(0, 82, 204, 0.5)" dataKey="revenue" stroke="rgba(0, 204, 110, 1)" activeDot={{
                            stroke: '#00FF88',
                            fill: '#00CC6E',
                            strokeWidth: '3px'
                        }} dot={{
                            fill: '#00CC6E',
                            stroke: '#00FF88',
                            strokeWidth: '0px'
                        }} />
                    </LineChart>}
                    {!isLoading && !isCustomer && <div className="chart__info">
                        <div className="chart-legend">
                            <span className="chart-legend__revenue">Выручка</span>
                            <span className="chart-legend__orders">Заказы</span>
                        </div>
                        <a href="#" className="chart__link">Данные взяты из <img src="/static/customer/chart/icon.png" alt="Skilla"/><span className="icon arrow-chart"></span></a>
                    </div>}
                    {!isLoading && isCustomer && <a href="#" className="chart__link">Данные взяты из <img src="/static/customer/chart/icon.png" alt="Skilla"/><span className="icon arrow-chart"></span></a>}
                </div>
            </div>
        </section>
    )
}

export default Chart