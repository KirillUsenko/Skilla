import React, {useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Footer from "../components/Footer";
import RadioGroup from "../components/RadioGroup";
import {useNavigate} from "react-router-dom";
import {removeLikeQuestion, getFaq, getFaqCats, getFaqList, getFaqSubcats, likeQuestion} from "../Api";

const Faq = ({ page }) => {
    const [ activeTab, setActiveTab ] = useState({
        question: null,
        title: null,
        content: null,
        views: null,
        likes: null,
        dislikes: null,
        subcat_id: null,
        id: null
    })
    const [ isLoading, setIsLoading ] = useState(true)
    const [ faqCaregories, setFaqCategories ] = useState([])
    const [ faqSubCategories, setFaqSubCategories ] = useState([])
    const [ faqList, setFaqList ] = useState([])
    const [ isFaqListLoading, setIsFaqListLoading ] = useState(true)
    const [ radio, setRadio ] = useState('telegram')
    const [ width, setWidth ] = useState(window?.innerWidth)
    const navigate = useNavigate()

    useEffect(() => {
        const cb = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', cb)

        return () => window.removeEventListener('resize', cb)
    }, [])

    const changeTab = (content) => {
        getFaq(content.id)
            .catch(e => console.log(e))

        setActiveTab(content)
    }
    const changeActive = (e, id = activeTab.id) => {
        const type = e.target.classList.value.includes('like-btn') ? 'like' : 'dislike'
        if (e.target.classList.value.includes('faq-question-content__reaction_active')) {
            if (type === 'like') {
                //setActiveTab({...activeTab, likes: Number(activeTab.likes) - 1})
                removeLikeQuestion(id, 'like')
                    .then(response => null)
                    .catch(e => console.log(e))
            } else {
                //setActiveTab({...activeTab, dislikes: Number(activeTab.dislikes) - 1})
                removeLikeQuestion(id, 'dislike')
                    .then(response => null)
                    .catch(e => console.log(e))
            }
            e.target.classList.remove('faq-question-content__reaction_active')
        } else {
            if (e.target.classList.value.includes('icon')) {
                if (e.target.parentNode.classList.value.includes('faq-question-content__reaction_active')) {
                    if (type === 'like') {
                        //setActiveTab({...activeTab, likes: Number(activeTab.likes) - 1})
                        removeLikeQuestion(id, 'like')
                            .then(response => null)
                            .catch(e => console.log(e))
                    } else {
                        //setActiveTab({...activeTab, dislikes: Number(activeTab.dislikes) - 1})
                        removeLikeQuestion(id, 'dislike')
                            .then(response => null)
                            .catch(e => console.log(e))
                    }
                    e.target.parentNode.classList.remove('faq-question-content__reaction_active')
                } else {
                    if (type === 'like') {
                        //setActiveTab({...activeTab, likes: Number(activeTab.likes) + 1})
                        likeQuestion(id, 'like')
                            .then(response => null)
                            .catch(e => console.log(e))
                    } else {
                        //setActiveTab({...activeTab, dislikes: Number(activeTab.dislikes) + 1})
                        likeQuestion(id, 'dislike')
                            .then(response => null)
                            .catch(e => console.log(e))
                    }
                    e.target.parentNode.classList.add('faq-question-content__reaction_active')
                }
            } else {
                if (type === 'like') {
                    //setActiveTab({...activeTab, likes: Number(activeTab.likes) + 1})
                    likeQuestion(activeTab.id, 'like')
                        .then(response => null)
                        .catch(e => console.log(e))
                } else {
                    //setActiveTab({...activeTab, dislikes: Number(activeTab.dislikes) + 1})
                    likeQuestion(activeTab.id, 'dislike')
                        .then(response => null)
                        .catch(e => console.log(e))
                }
                e.target.classList.add('faq-question-content__reaction_active')
            }
        }
    }
    const getFaqCategory = () => {
        let faqCategory

        switch (page) {
            case 'customer':
                faqCategory = faqCaregories.filter(category => category.name === 'Заказчикам')[0]
                break
            case 'worker':
                faqCategory = faqCaregories.filter(category => category.name === 'Исполнителям')[0]
                break
            case 'business':
                faqCategory = faqCaregories.filter(category => category.name === 'Предпринимателям')[0]
                break
            default:
                faqCategory = faqCaregories[0]
        }

        return faqCategory
}

    const customerQuestions = [
        {
            title: 'Заказы и начало сотрудничества',
            tabs: [
            {
                question: 'Какие заказы размещаются на площадке Skilla?',
                title: 'Какие заказы размещаются на площадке Skilla? Заголовок',
                content: 'В базе площадки Skilla 76 000 заказчиков. Большинство клиентов - компании.\n' +
                    'Гипермаркеты, складские комплексы, застройщики, торгово-развлекательные центры, клининговые компании, производства, отели и рестораны, управляющие компании. Часто это крупные федеральные сети, такие как Сбербанк, Почта России, Магнит, Сдек, Комус, Ростелеком, Деловые линии, ПЭКи. \n' +
                    'Они размещают тысячи заказов в день на конкретные работы: сборка заказов на складе, выкладывание товаров на полки гипермаркетов, работа на кассе, помощь на мероприятиях, упаковка товаров и т.п. \n' +
                    'За 2021 год Skilla выполнила 950 000 заказов в России. Около 2 600 заказов в день.',
                views: '16',
                likes: '3',
                dislikes: '0'
            },
            {
                question: 'Как разместить заказ?',
                title: 'Как разместить заказ?? Заголовок',
                content: 'Контеент для вопроса',
                views: '1',
                likes: '1',
                dislikes: '0'
            }
        ]
        },
        {
            title: 'Исполнители заказов',
            tabs: [
                {
                    question: 'Кто выполняет заказы?',
                    title: 'Какие заказы размещаются на площадке Skilla?',
                    content: 'В базе площадки Skilla 76 000 заказчиков. Большинство клиентов - компании.\n' +
                        'Гипермаркеты, складские комплексы, застройщики, торгово-развлекательные центры, клининговые компании, производства, отели и рестораны, управляющие компании. Часто это крупные федеральные сети, такие как Сбербанк, Почта России, Магнит, Сдек, Комус, Ростелеком, Деловые линии, ПЭКи. \n' +
                        'Они размещают тысячи заказов в день на конкретные работы: сборка заказов на складе, выкладывание товаров на полки гипермаркетов, работа на кассе, помощь на мероприятиях, упаковка товаров и т.п. \n' +
                        'За 2021 год Skilla выполнила 950 000 заказов в России. Около 2 600 заказов в день.',
                    views: '16',
                    likes: '3',
                    dislikes: '0'
                },
                {
                    question: 'Как разместить заказ?',
                    title: 'Как разместить заказ??',
                    content: 'Контеент',
                    views: '1',
                    likes: '1',
                    dislikes: '0'
                },
                {
                    question: 'Как изменить, отменить сделанный заказ?',
                    title: 'Как изменить, отменить сделанный заказ?',
                    content: 'Контеент2',
                    views: '11',
                    likes: '0',
                    dislikes: '0'
                }
            ]
        }
    ]
    const workerQuestions = [
        {
            title: 'Заказы и начало сотрудничества',
            tabs: [
                {
                    question: 'Какие заказы размещаются на площадке Skilla?',
                    title: 'Какие заказы размещаются на площадке Skilla? Заголовок',
                    content: 'В базе площадки Skilla 76 000 заказчиков. Большинство клиентов - компании.\n' +
                        'Гипермаркеты, складские комплексы, застройщики, торгово-развлекательные центры, клининговые компании, производства, отели и рестораны, управляющие компании. Часто это крупные федеральные сети, такие как Сбербанк, Почта России, Магнит, Сдек, Комус, Ростелеком, Деловые линии, ПЭКи. \n' +
                        'Они размещают тысячи заказов в день на конкретные работы: сборка заказов на складе, выкладывание товаров на полки гипермаркетов, работа на кассе, помощь на мероприятиях, упаковка товаров и т.п. \n' +
                        'За 2021 год Skilla выполнила 950 000 заказов в России. Около 2 600 заказов в день.',
                    views: '16',
                    likes: '3',
                    dislikes: '0'
                },
                {
                    question: 'Как разместить заказ?',
                    title: 'Как разместить заказ?? Заголовок',
                    content: 'Контеент для вопроса',
                    views: '1',
                    likes: '1',
                    dislikes: '0'
                }
            ]
        },
        {
            title: 'Исполнители заказов',
            tabs: [
                {
                    question: 'Кто выполняет заказы?',
                    title: 'Какие заказы размещаются на площадке Skilla?',
                    content: 'В базе площадки Skilla 76 000 заказчиков. Большинство клиентов - компании.\n' +
                        'Гипермаркеты, складские комплексы, застройщики, торгово-развлекательные центры, клининговые компании, производства, отели и рестораны, управляющие компании. Часто это крупные федеральные сети, такие как Сбербанк, Почта России, Магнит, Сдек, Комус, Ростелеком, Деловые линии, ПЭКи. \n' +
                        'Они размещают тысячи заказов в день на конкретные работы: сборка заказов на складе, выкладывание товаров на полки гипермаркетов, работа на кассе, помощь на мероприятиях, упаковка товаров и т.п. \n' +
                        'За 2021 год Skilla выполнила 950 000 заказов в России. Около 2 600 заказов в день.',
                    views: '16',
                    likes: '3',
                    dislikes: '0'
                },
                {
                    question: 'Как разместить заказ?',
                    title: 'Как разместить заказ??',
                    content: 'Контеент',
                    views: '1',
                    likes: '1',
                    dislikes: '0'
                },
                {
                    question: 'Как изменить, отменить сделанный заказ?',
                    title: 'Как изменить, отменить сделанный заказ?',
                    content: 'Контеент2',
                    views: '11',
                    likes: '0',
                    dislikes: '0'
                }
            ]
        }
    ]
    const businessQuestions = [
        {
            title: 'Заказы и начало сотрудничества',
            tabs: [
                {
                    question: 'Какие заказы размещаются на площадке Skilla?',
                    title: 'Какие заказы размещаются на площадке Skilla? Заголовок',
                    content: 'В базе площадки Skilla 76 000 заказчиков. Большинство клиентов - компании.\n' +
                        'Гипермаркеты, складские комплексы, застройщики, торгово-развлекательные центры, клининговые компании, производства, отели и рестораны, управляющие компании. Часто это крупные федеральные сети, такие как Сбербанк, Почта России, Магнит, Сдек, Комус, Ростелеком, Деловые линии, ПЭКи. \n' +
                        'Они размещают тысячи заказов в день на конкретные работы: сборка заказов на складе, выкладывание товаров на полки гипермаркетов, работа на кассе, помощь на мероприятиях, упаковка товаров и т.п. \n' +
                        'За 2021 год Skilla выполнила 950 000 заказов в России. Около 2 600 заказов в день.',
                    views: '16',
                    likes: '3',
                    dislikes: '0'
                },
                {
                    question: 'Как разместить заказ?',
                    title: 'Как разместить заказ?? Заголовок',
                    content: 'Контеент для вопроса',
                    views: '1',
                    likes: '1',
                    dislikes: '0'
                }
            ]
        },
        {
            title: 'Исполнители заказов',
            tabs: [
                {
                    question: 'Кто выполняет заказы?',
                    title: 'Какие заказы размещаются на площадке Skilla?',
                    content: 'В базе площадки Skilla 76 000 заказчиков. Большинство клиентов - компании.\n' +
                        'Гипермаркеты, складские комплексы, застройщики, торгово-развлекательные центры, клининговые компании, производства, отели и рестораны, управляющие компании. Часто это крупные федеральные сети, такие как Сбербанк, Почта России, Магнит, Сдек, Комус, Ростелеком, Деловые линии, ПЭКи. \n' +
                        'Они размещают тысячи заказов в день на конкретные работы: сборка заказов на складе, выкладывание товаров на полки гипермаркетов, работа на кассе, помощь на мероприятиях, упаковка товаров и т.п. \n' +
                        'За 2021 год Skilla выполнила 950 000 заказов в России. Около 2 600 заказов в день.',
                    views: '16',
                    likes: '3',
                    dislikes: '0'
                },
                {
                    question: 'Как разместить заказ?',
                    title: 'Как разместить заказ??',
                    content: 'Контеент',
                    views: '1',
                    likes: '1',
                    dislikes: '0'
                },
                {
                    question: 'Как изменить, отменить сделанный заказ?',
                    title: 'Как изменить, отменить сделанный заказ?',
                    content: 'Контеент2',
                    views: '11',
                    likes: '0',
                    dislikes: '0'
                }
            ]
        }
    ]

    useEffect(() => {
        getFaqCats()
            .then(response => setFaqCategories(response.data))
            .catch(e => console.log(e))
    }, [])

    useEffect(() => {
        if (!faqCaregories.length) return

        getFaqSubcats()
            .then(res => setFaqSubCategories(res.data.filter(category => category.cat_id === getFaqCategory().id)))
            .catch(e => console.log(e))
            .finally(() => setIsLoading(false))
    }, [faqCaregories])

    useEffect(() => {
        if (!faqCaregories.length) return

        getFaqList()
            .then(response => {
                const mas = response.data.filter(question => question.cat_id === getFaqCategory().id)
                setFaqList(mas)
                setActiveTab({
                    question: mas[0].title,
                    title: mas[0].title,
                    content: mas[0].content,
                    views: mas[0].views,
                    likes: mas[0].likes,
                    dislikes: mas[0].dislikes,
                    subcat_id: getFaqCategory().id,
                    id: mas[0].id
                })
            })
            .catch(e => console.log(e))
            .finally(() => setIsFaqListLoading(false))
    }, [faqSubCategories])

    if (page === 'customer') return (
        <StyledFaq>
            <Navbar page={page} activePage="faq" />
            <header className="header">
                <div className="container">
                    <div className="header__content">
                        <h1 className="header__title">Изучите ответы на популярные вопросы</h1>
                        <p className="header__description">Не нашли ответ на вопрос? Мы поможем!</p>

                        <form action="" className="header__form">
                            <input type="tel" required placeholder="+7 (___) ___-__-__" className="header__input" />
                            <input type="text" placeholder="0000-000-000" className="header__input" />
                            <div />
                            <button className="header__button">
                                Разместить заказ
                                <span className="arrow-right-big icon" />
                            </button>
                        </form>

                        <p className="header__info">Отправляя форму, вы соглашаетесь с <a href="#">условиями</a></p>
                    </div>

                    <img src="/static/customer/faq/illustration.png" alt="иллюстрация" className="header__image"/>
                </div>
            </header>
            <section className="ribbons ribbons-header">
                <img src="/static/customer/triggers/ribbon-top.png" alt="ленты с текстом" className="ribbons-header__image"/>
            </section>
            <section className="faq">
                <div className="container">
                    {isLoading && <div className="faq__loader">
                        <div className="lds-dual-ring" />
                    </div>}
                    {!isLoading && faqSubCategories && faqSubCategories.map((fsCat, fsIndex) => <div className="faq-question" key={fsIndex}>
                        <h4 className="faq-question__subtitle">Skilla {page === 'customer' ? 'Заказчикам' : page === 'worker' ? 'Исполнителям' : 'Предпринемателям'}</h4>
                        <h4 className="faq-question__title"><span>{fsIndex + 1}.</span>{fsCat.name}</h4>

                        {width > 1399 && <div className="faq-question__inner">
                            <div className="faq-question__tabs">
                                {isFaqListLoading && <div className="faq__loader faq__loader_tab-content">
                                    <div className="lds-dual-ring" />
                                </div>}
                                {!isFaqListLoading && faqList?.length && faqList.map((tab, tabIndex) => <button className={activeTab.subcat_id === fsCat.id ? activeTab.title === tab.title ? "faq-question__tab faq-question__tab_active" : "faq-question__tab" : tabIndex === 0 ? "faq-question__tab faq-question__tab_active" : "faq-question__tab"} onClick={() => changeTab({
                                    question: tab.title,
                                    title: tab.title,
                                    content: tab.content,
                                    views: tab.views,
                                    likes: tab.likes,
                                    dislikes: tab.dislikes,
                                    subcat_id: fsCat.id,
                                    id: tab.id})}>{tab.title}</button>)}
                            </div>
                            <div className="faq-question-content">
                                {isFaqListLoading && <div className="faq__loader faq__loader_tab-content">
                                    <div className="lds-dual-ring" />
                                </div>}
                                {!isFaqListLoading && faqList?.length && activeTab.subcat_id === fsCat.id ? <>
                                    <h3 className="faq-question-content__title">{activeTab.title}</h3>
                                    <p className="faq-question-content__text">{activeTab.content}</p>
                                    <div className="faq-question-content__data">
                                        <span className="faq-question-content__views"><span className="view icon"></span>{activeTab.views}</span>
                                        <div>
                                            <p className="faq-question-content__question">Нашли, что искали?</p>
                                            <span className="faq-question-content__reaction like-btn" onClick={(e) => changeActive(e)}>{activeTab.likes}<span className="like icon" /></span>
                                            <span className="faq-question-content__reaction dislike-btn" onClick={(e) => changeActive(e)}>{activeTab.dislikes}<span className="dislike icon" /></span>
                                        </div>
                                    </div></> : <>
                                    <h3 className="faq-question-content__title">{faqList[0]?.title}</h3>
                                    <p className="faq-question-content__text">{faqList[0]?.content}</p>
                                    <div className="faq-question-content__data">
                                        <span className="faq-question-content__views"><span className="view icon"></span>{faqList[0]?.views}</span>
                                        <div>
                                            <p className="faq-question-content__question">Нашли, что искали?</p>
                                            <span className="faq-question-content__reaction like-btn" onClick={(e) => changeActive(e)}>{faqList[0]?.likes}<span className="like icon" /></span>
                                            <span className="faq-question-content__reaction dislike-btn" onClick={(e) => changeActive(e)}>{faqList[0]?.dislikes}<span className="dislike icon" /></span>
                                        </div>
                                    </div></>}
                            </div>
                        </div>}
                        {width <= 1399 && <div className="faq-question__inner">
                            <div className="faq-question__tabs">
                                {isFaqListLoading && <div className="faq__loader faq__loader_tab-content">
                                    <div className="lds-dual-ring" />
                                </div>}
                                {!isFaqListLoading && faqList?.length && faqList.map((tab, tabIndex) => <div className="faq-tab faq-tab_customer">
                                    <button className={activeTab.subcat_id === fsCat.id ? activeTab.title === tab.title ? "faq-question__tab faq-question__tab_active" : "faq-question__tab" : tabIndex === 0 ? "faq-question__tab faq-question__tab_active" : "faq-question__tab"} onClick={(e) => {
                                        if (e.target.classList.value.includes('faq-question__tab_active')) {
                                            e.target.parentNode.classList.remove('faq-question__tab_active')
                                            e.target.classList.remove('faq-question__tab_active')
                                        } else {
                                            if (e.target.parentNode.classList.value.includes('faq-question__tab_active')) {
                                                e.target.classList.remove('faq-question__tab_active')
                                                e.target.parentNode.classList.remove('faq-question__tab_active')
                                            } else {
                                                e.target.parentNode.classList.add('faq-question__tab_active')
                                                e.target.classList.add('faq-question__tab_active')
                                            }
                                        }

                                        changeTab({
                                            question: tab.title,
                                            title: tab.title,
                                            content: tab.content,
                                            views: tab.views,
                                            likes: tab.likes,
                                            dislikes: tab.dislikes,
                                            subcat_id: fsCat.id,
                                            id: tab.id
                                        })
                                    }}><span>{tab.title}</span></button>
                                    <div className="faq-question-content">
                                        {isFaqListLoading && <div className="faq__loader faq__loader_tab-content">
                                            <div className="lds-dual-ring" />
                                        </div>}
                                        {!isFaqListLoading && faqList?.length && activeTab.subcat_id === fsCat.id ? <>
                                            <div className="faq-question-text-content">
                                            <p className="faq-question-content__text">{activeTab.content}</p>
                                            <div className="faq-question-content__data">
                                                <span className="faq-question-content__views"><span className="view icon"></span>{activeTab.views}</span>
                                                <div>
                                                    <p className="faq-question-content__question">Нашли, что искали?</p>
                                                    <span className="faq-question-content__reaction like-btn" onClick={(e) => changeActive(e)}>{activeTab.likes}<span className="like icon" /></span>
                                                    <span className="faq-question-content__reaction dislike-btn" onClick={(e) => changeActive(e)}>{activeTab.dislikes}<span className="dislike icon" /></span>
                                                </div>
                                            </div>
                                            </div></>: <>
                                            <div className="faq-question-text-content">
                                            <p className="faq-question-content__text">{faqList[0]?.content}</p>
                                            <div className="faq-question-content__data">
                                                <span className="faq-question-content__views"><span className="view icon"></span>{faqList[0]?.views}</span>
                                                <div>
                                                    <p className="faq-question-content__question">Нашли, что искали?</p>
                                                    <span className="faq-question-content__reaction like-btn" onClick={(e) => changeActive(e)}>{faqList[0]?.likes}<span className="like icon" /></span>
                                                    <span className="faq-question-content__reaction dislike-btn" onClick={(e) => changeActive(e)}>{faqList[0]?.dislikes}<span className="dislike icon" /></span>
                                                </div>
                                            </div></div></>}
                                    </div>
                                </div>)}
                            </div>
                        </div>}
                    </div>)}
                    {/*{!isLoading && customerQuestions[0] && customerQuestions.map((question, questionIndex) => <div className="faq-question" key={questionIndex}>*/}
                    {/*    <h4 className="faq-question__subtitle">Skilla Заказчикам</h4>*/}
                    {/*    <h2 className="faq-question__title"><span>{questionIndex}.</span>{question.title}</h2>*/}
                    {/*    <div className="faq-question__inner">*/}
                    {/*        <div className="faq-question__tabs">*/}
                    {/*            {question.tabs.map((tab, tabIndex) => <button className={activeTab.parentTitle === question.title*/}
                    {/*                ?*/}

                    {/*                activeTab.question === tab.question ? "faq-question__tab faq-question__tab_active" : "faq-question__tab"*/}

                    {/*                :*/}

                                    {/*tabIndex === 0 ? "faq-question__tab faq-question__tab_active" : "faq-question__tab"} onClick={() => changeTab({*/}
                                    {/*question: tab.question,*/}
                                    {/*title: tab.title,*/}
                                    {/*content: tab.content,*/}
                                    {/*views: tab.views,*/}
                                    {/*likes: tab.likes,*/}
                                    {/*dislikes: tab.dislikes,*/}
                                    {/*parentTitle: question.title})}>{tab.question}</button>)}*/}
                    {/*        </div>*/}
                    {/*        <div className="faq-question-content">*/}
                    {/*            {activeTab.parentTitle === question.title ? <>*/}
                    {/*            <h3 className="faq-question-content__title">{activeTab.title}</h3>*/}
                    {/*            <p className="faq-question-content__text">{activeTab.content}</p>*/}
                    {/*            <div className="faq-question-content__data">*/}
                    {/*                <span className="faq-question-content__views">{activeTab.views}</span>*/}
                    {/*                <div>*/}
                    {/*                    <p className="faq-question-content__question">Нашли, что искали?</p>*/}
                    {/*                    <span className="faq-question-content__reaction" onClick={(e) => changeActive(e)}>{activeTab.likes}<span className="like icon" /></span>*/}
                    {/*                    <span className="faq-question-content__reaction" onClick={(e) => changeActive(e)}>{activeTab.dislikes}<span className="dislike icon" /></span>*/}
                    {/*                </div>*/}
                    {/*            </div></> : <>*/}
                    {/*                <h3 className="faq-question-content__title">{question.tabs[0].title}</h3>*/}
                    {/*                <p className="faq-question-content__text">{question.tabs[0].content}</p>*/}
                    {/*                <div className="faq-question-content__data">*/}
                    {/*                    <span className="faq-question-content__views"><span className="view icon"></span>{question.tabs[0].views}</span>*/}
                    {/*                    <div>*/}
                    {/*                        <p className="faq-question-content__question">Нашли, что искали?</p>*/}
                    {/*                        <span className="faq-question-content__reaction" onClick={(e) => changeActive(e)}>{question.tabs[0].likes}<span className="like icon" /></span>*/}
                    {/*                        <span className="faq-question-content__reaction" onClick={(e) => changeActive(e)}>{question.tabs[0].dislikes}<span className="dislike icon" /></span>*/}
                    {/*                    </div>*/}
                    {/*                </div></>}*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>)}*/}

                </div>
            </section>
            <Footer page='customer' type='faq' />
        </StyledFaq>
    )
    if (page === 'worker') return (
        <StyledFaq>
            <Navbar page={page} activePage="faq" />
            <header className="header header_worker">
                <div className="container">
                    <div className="header__content">
                        <h1 className="header__title">Узнайте больше<span />про подработку в Skilla Работа</h1>
                        <p className="header__description">Не нашли ответ на вопрос? Мы поможем!</p>
                        <button className="header__button_worker" onClick={() => navigate('/worker/download')}>
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

                    <img src="/static/worker/faq/illustration.png" alt="иллюстрация" className="header__image"/>
                </div>
            </header>
            <section className="ribbons ribbons-header">
                <img src="/static/worker/download/ribbons.png" alt="ленты с текстом" className="ribbons-header__image"/>
            </section>
            <section className="faq">
                <div className="container">
                    {isLoading && <div className="faq__loader">
                        <div className="lds-dual-ring" />
                    </div>}
                    {!isLoading && faqSubCategories && faqSubCategories.map((fsCat, fsIndex) => <div className="faq-question" key={fsIndex}>
                        <h4 className="faq-question__subtitle">Skilla {page === 'customer' ? 'Заказчикам' : page === 'worker' ? 'Исполнителям' : 'Предпринемателям'}</h4>
                        <h4 className="faq-question__title"><span>{fsIndex + 1}.</span>{fsCat.name}</h4>

                        {width > 1399 && <div className="faq-question__inner">
                            <div className="faq-question__tabs faq-question__tabs_worker">
                                {isFaqListLoading && <div className="faq__loader faq__loader_tab-content">
                                    <div className="lds-dual-ring" />
                                </div>}
                                {!isFaqListLoading && faqList?.length && faqList.map((tab, tabIndex) => <button className={activeTab.subcat_id === fsCat.id ? activeTab.title === tab.title ? "faq-question__tab faq-question__tab_active" : "faq-question__tab" : tabIndex === 0 ? "faq-question__tab faq-question__tab_active" : "faq-question__tab"} onClick={() => changeTab({
                                    question: tab.title,
                                    title: tab.title,
                                    content: tab.content,
                                    views: tab.views,
                                    likes: tab.likes,
                                    dislikes: tab.dislikes,
                                    subcat_id: fsCat.id,
                                    id: tab.id})}>{tab.title}</button>)}
                            </div>
                            <div className="faq-question-content">
                                {isFaqListLoading && <div className="faq__loader faq__loader_tab-content">
                                    <div className="lds-dual-ring" />
                                </div>}
                                {!isFaqListLoading && faqList?.length && activeTab.subcat_id === fsCat.id ? <>
                                    <h3 className="faq-question-content__title">{activeTab.title}</h3>
                                    <p className="faq-question-content__text">{activeTab.content}</p>
                                    <div className="faq-question-content__data">
                                        <span className="faq-question-content__views"><span className="view icon"></span>{activeTab.views}</span>
                                        <div>
                                            <p className="faq-question-content__question">Нашли, что искали?</p>
                                            <span className="faq-question-content__reaction faq-question-content__reaction_worker like-btn" onClick={(e) => changeActive(e)}>{activeTab.likes}<span className="like icon" /></span>
                                            <span className="faq-question-content__reaction faq-question-content__reaction_worker dislike-btn" onClick={(e) => changeActive(e)}>{activeTab.dislikes}<span className="dislike icon" /></span>
                                        </div>
                                    </div></> : <>
                                    <h3 className="faq-question-content__title">{faqList[0]?.title}</h3>
                                    <p className="faq-question-content__text">{faqList[0]?.content}</p>
                                    <div className="faq-question-content__data">
                                        <span className="faq-question-content__views"><span className="view icon"></span>{faqList[0]?.views}</span>
                                        <div>
                                            <p className="faq-question-content__question">Нашли, что искали?</p>
                                            <span className="faq-question-content__reaction faq-question-content__reaction_worker like-btn" onClick={(e) => changeActive(e)}>{faqList[0]?.likes}<span className="like icon" /></span>
                                            <span className="faq-question-content__reaction faq-question-content__reaction_worker dislike-btn" onClick={(e) => changeActive(e)}>{faqList[0]?.dislikes}<span className="dislike icon" /></span>
                                        </div>
                                    </div></>}
                            </div>
                        </div>}
                        {width <= 1399 && <div className="faq-question__inner">
                            <div className="faq-question__tabs">
                                {isFaqListLoading && <div className="faq__loader faq__loader_tab-content">
                                    <div className="lds-dual-ring" />
                                </div>}
                                {!isFaqListLoading && faqList?.length && faqList.map((tab, tabIndex) => <div className="faq-tab">
                                    <button className={activeTab.subcat_id === fsCat.id ? activeTab.title === tab.title ? "faq-question__tab faq-question__tab_active" : "faq-question__tab" : tabIndex === 0 ? "faq-question__tab faq-question__tab_active" : "faq-question__tab"} onClick={(e) => {
                                        if (e.target.classList.value.includes('faq-question__tab_active')) {
                                            e.target.parentNode.classList.remove('faq-question__tab_active')
                                            e.target.classList.remove('faq-question__tab_active')
                                        } else {
                                            if (e.target.parentNode.classList.value.includes('faq-question__tab_active')) {
                                                e.target.classList.remove('faq-question__tab_active')
                                                e.target.parentNode.classList.remove('faq-question__tab_active')
                                            } else {
                                                e.target.parentNode.classList.add('faq-question__tab_active')
                                                e.target.classList.add('faq-question__tab_active')
                                            }
                                        }

                                        changeTab({
                                            question: tab.title,
                                            title: tab.title,
                                            content: tab.content,
                                            views: tab.views,
                                            likes: tab.likes,
                                            dislikes: tab.dislikes,
                                            subcat_id: fsCat.id,
                                            id: tab.id
                                        })
                                    }}><span>{tab.title}</span></button>
                                    <div className="faq-question-content">
                                        {isFaqListLoading && <div className="faq__loader faq__loader_tab-content">
                                            <div className="lds-dual-ring" />
                                        </div>}
                                        {!isFaqListLoading && faqList?.length && activeTab.subcat_id === fsCat.id ? <>
                                            <div className="faq-question-text-content">
                                                <p className="faq-question-content__text">{activeTab.content}</p>
                                                <div className="faq-question-content__data">
                                                    <span className="faq-question-content__views"><span className="view icon"></span>{activeTab.views}</span>
                                                    <div>
                                                        <p className="faq-question-content__question">Нашли, что искали?</p>
                                                        <span className="faq-question-content__reaction faq-question-content__reaction_worker like-btn" onClick={(e) => changeActive(e)}>{activeTab.likes}<span className="like icon" /></span>
                                                        <span className="faq-question-content__reaction  faq-question-content__reaction_worker dislike-btn" onClick={(e) => changeActive(e)}>{activeTab.dislikes}<span className="dislike icon" /></span>
                                                    </div>
                                                </div>
                                            </div></>: <>
                                            <div className="faq-question-text-content">
                                                <p className="faq-question-content__text">{faqList[0]?.content}</p>
                                                <div className="faq-question-content__data">
                                                    <span className="faq-question-content__views"><span className="view icon"></span>{faqList[0]?.views}</span>
                                                    <div>
                                                        <p className="faq-question-content__question">Нашли, что искали?</p>
                                                        <span className="faq-question-content__reaction faq-question-content__reaction_worker like-btn" onClick={(e) => changeActive(e)}>{faqList[0]?.likes}<span className="like icon" /></span>
                                                        <span className="faq-question-content__reaction faq-question-content__reaction_worker dislike-btn" onClick={(e) => changeActive(e)}>{faqList[0]?.dislikes}<span className="dislike icon" /></span>
                                                    </div>
                                                </div></div></>}
                                    </div>
                                </div>)}
                            </div>
                        </div>}
                    </div>)}
                    {/*{!isLoading && customerQuestions[0] && customerQuestions.map((question, questionIndex) => <div className="faq-question" key={questionIndex}>*/}
                    {/*    <h4 className="faq-question__subtitle">Skilla Заказчикам</h4>*/}
                    {/*    <h2 className="faq-question__title"><span>{questionIndex}.</span>{question.title}</h2>*/}
                    {/*    <div className="faq-question__inner">*/}
                    {/*        <div className="faq-question__tabs">*/}
                    {/*            {question.tabs.map((tab, tabIndex) => <button className={activeTab.parentTitle === question.title*/}
                    {/*                ?*/}

                    {/*                activeTab.question === tab.question ? "faq-question__tab faq-question__tab_active" : "faq-question__tab"*/}

                    {/*                :*/}

                    {/*tabIndex === 0 ? "faq-question__tab faq-question__tab_active" : "faq-question__tab"} onClick={() => changeTab({*/}
                    {/*question: tab.question,*/}
                    {/*title: tab.title,*/}
                    {/*content: tab.content,*/}
                    {/*views: tab.views,*/}
                    {/*likes: tab.likes,*/}
                    {/*dislikes: tab.dislikes,*/}
                    {/*parentTitle: question.title})}>{tab.question}</button>)}*/}
                    {/*        </div>*/}
                    {/*        <div className="faq-question-content">*/}
                    {/*            {activeTab.parentTitle === question.title ? <>*/}
                    {/*            <h3 className="faq-question-content__title">{activeTab.title}</h3>*/}
                    {/*            <p className="faq-question-content__text">{activeTab.content}</p>*/}
                    {/*            <div className="faq-question-content__data">*/}
                    {/*                <span className="faq-question-content__views">{activeTab.views}</span>*/}
                    {/*                <div>*/}
                    {/*                    <p className="faq-question-content__question">Нашли, что искали?</p>*/}
                    {/*                    <span className="faq-question-content__reaction" onClick={(e) => changeActive(e)}>{activeTab.likes}<span className="like icon" /></span>*/}
                    {/*                    <span className="faq-question-content__reaction" onClick={(e) => changeActive(e)}>{activeTab.dislikes}<span className="dislike icon" /></span>*/}
                    {/*                </div>*/}
                    {/*            </div></> : <>*/}
                    {/*                <h3 className="faq-question-content__title">{question.tabs[0].title}</h3>*/}
                    {/*                <p className="faq-question-content__text">{question.tabs[0].content}</p>*/}
                    {/*                <div className="faq-question-content__data">*/}
                    {/*                    <span className="faq-question-content__views"><span className="view icon"></span>{question.tabs[0].views}</span>*/}
                    {/*                    <div>*/}
                    {/*                        <p className="faq-question-content__question">Нашли, что искали?</p>*/}
                    {/*                        <span className="faq-question-content__reaction" onClick={(e) => changeActive(e)}>{question.tabs[0].likes}<span className="like icon" /></span>*/}
                    {/*                        <span className="faq-question-content__reaction" onClick={(e) => changeActive(e)}>{question.tabs[0].dislikes}<span className="dislike icon" /></span>*/}
                    {/*                    </div>*/}
                    {/*                </div></>}*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>)}*/}

                </div>
            </section>
            <Footer page='worker' type='faq' />
        </StyledFaq>
    )
    if (page === 'business') return (
        <StyledFaq>
            <Navbar page={page} activePage="faq" />
            <header className="header header_business">
                <div className="container">
                    <div className="header__content header__content_business">
                        <h1 className="header__title">Предприниматели спрашивают - мы отвечаем</h1>
                        <p className="header__description">Не нашли ответ на вопрос? Мы поможем!</p>

                        <form action="" className="header-form">
                            <div className="header-form__flex">
                                <input type="tel" required placeholder="+7 (___) ___-__-__" className="header-form__input"/>
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
                                <img src="/static/business/faq/icons/01.png" alt="ФНС"/>
                            </a>
                            <a href="#" className="header__link">
                                <img src="/static/business/faq/icons/02.png" alt="Минкомсвязь России"/>
                            </a>
                            <a href="#" className="header__link">
                                <img src="/static/business/faq/icons/03.png" alt="Роспатент"/>
                            </a>
                        </div>

                        <p className="header__info header__info_business">Отправляя форму, вы соглашаетесь с <a href="#">условиями</a></p>
                    </div>

                    <img src="/static/business/faq/illustration.png" alt="иллюстрация" className="header__image"/>
                </div>
            </header>
            <section className="ribbons ribbons-header">
                <img src="/static/business/faq/ribbons.png" alt="ленты с текстом" className="ribbons-header__image"/>
            </section>
            <section className="faq">
                <div className="container">
                    {isLoading && <div className="faq__loader">
                        <div className="lds-dual-ring" />
                    </div>}
                    {!isLoading && faqSubCategories && faqSubCategories.map((fsCat, fsIndex) => <div className="faq-question" key={fsIndex}>
                        <h4 className="faq-question__subtitle">Skilla {page === 'customer' ? 'Заказчикам' : page === 'worker' ? 'Исполнителям' : 'Предпринемателям'}</h4>
                        <h4 className="faq-question__title"><span>{fsIndex + 1}.</span>{fsCat.name}</h4>

                        {width > 1399 && <div className="faq-question__inner">
                            <div className="faq-question__tabs faq-question__tabs_business">
                                {isFaqListLoading && <div className="faq__loader faq__loader_tab-content">
                                    <div className="lds-dual-ring" />
                                </div>}
                                {!isFaqListLoading && faqList?.length && faqList.map((tab, tabIndex) => <button className={activeTab.subcat_id === fsCat.id ? activeTab.title === tab.title ? "faq-question__tab faq-question__tab_active" : "faq-question__tab" : tabIndex === 0 ? "faq-question__tab faq-question__tab_active" : "faq-question__tab"} onClick={() => changeTab({
                                    question: tab.title,
                                    title: tab.title,
                                    content: tab.content,
                                    views: tab.views,
                                    likes: tab.likes,
                                    dislikes: tab.dislikes,
                                    subcat_id: fsCat.id,
                                    id: tab.id})}>{tab.title}</button>)}
                            </div>
                            <div className="faq-question-content">
                                {isFaqListLoading && <div className="faq__loader faq__loader_tab-content">
                                    <div className="lds-dual-ring" />
                                </div>}
                                {!isFaqListLoading && faqList?.length && activeTab.subcat_id === fsCat.id ? <>
                                    <h3 className="faq-question-content__title">{activeTab.title}</h3>
                                    <p className="faq-question-content__text">{activeTab.content}</p>
                                    <div className="faq-question-content__data">
                                        <span className="faq-question-content__views"><span className="view icon"></span>{activeTab.views}</span>
                                        <div>
                                            <p className="faq-question-content__question">Нашли, что искали?</p>
                                            <span className="faq-question-content__reaction faq-question-content__reaction_business like-btn" onClick={(e) => changeActive(e)}>{activeTab.likes}<span className="like icon" /></span>
                                            <span className="faq-question-content__reaction faq-question-content__reaction_business dislike-btn" onClick={(e) => changeActive(e)}>{activeTab.dislikes}<span className="dislike icon" /></span>
                                        </div>
                                    </div></> : <>
                                    <h3 className="faq-question-content__title">{faqList[0]?.title}</h3>
                                    <p className="faq-question-content__text">{faqList[0]?.content}</p>
                                    <div className="faq-question-content__data">
                                        <span className="faq-question-content__views"><span className="view icon"></span>{faqList[0]?.views}</span>
                                        <div>
                                            <p className="faq-question-content__question">Нашли, что искали?</p>
                                            <span className="faq-question-content__reaction faq-question-content__reaction_business like-btn" onClick={(e) => changeActive(e)}>{faqList[0]?.likes}<span className="like icon" /></span>
                                            <span className="faq-question-content__reaction faq-question-content__reaction_business dislike-btn" onClick={(e) => changeActive(e)}>{faqList[0]?.dislikes}<span className="dislike icon" /></span>
                                        </div>
                                    </div></>}
                            </div>
                        </div>}
                        {width <= 1399 && <div className="faq-question__inner">
                            <div className="faq-question__tabs">
                                {isFaqListLoading && <div className="faq__loader faq__loader_tab-content">
                                    <div className="lds-dual-ring" />
                                </div>}
                                {!isFaqListLoading && faqList?.length && faqList.map((tab, tabIndex) => <div className="faq-tab faq-tab_business">
                                    <button className={activeTab.subcat_id === fsCat.id ? activeTab.title === tab.title ? "faq-question__tab faq-question__tab_active" : "faq-question__tab" : tabIndex === 0 ? "faq-question__tab faq-question__tab_active" : "faq-question__tab"} onClick={(e) => {
                                        if (e.target.classList.value.includes('faq-question__tab_active')) {
                                            e.target.parentNode.classList.remove('faq-question__tab_active')
                                            e.target.classList.remove('faq-question__tab_active')
                                        } else {
                                            if (e.target.parentNode.classList.value.includes('faq-question__tab_active')) {
                                                e.target.classList.remove('faq-question__tab_active')
                                                e.target.parentNode.classList.remove('faq-question__tab_active')
                                            } else {
                                                e.target.parentNode.classList.add('faq-question__tab_active')
                                                e.target.classList.add('faq-question__tab_active')
                                            }
                                        }

                                        changeTab({
                                            question: tab.title,
                                            title: tab.title,
                                            content: tab.content,
                                            views: tab.views,
                                            likes: tab.likes,
                                            dislikes: tab.dislikes,
                                            subcat_id: fsCat.id,
                                            id: tab.id
                                        })
                                    }}><span>{tab.title}</span></button>
                                    <div className="faq-question-content">
                                        {isFaqListLoading && <div className="faq__loader faq__loader_tab-content">
                                            <div className="lds-dual-ring" />
                                        </div>}
                                        {!isFaqListLoading && faqList?.length && activeTab.subcat_id === fsCat.id ? <>
                                            <div className="faq-question-text-content">
                                                <p className="faq-question-content__text">{activeTab.content}</p>
                                                <div className="faq-question-content__data">
                                                    <span className="faq-question-content__views"><span className="view icon"></span>{activeTab.views}</span>
                                                    <div>
                                                        <p className="faq-question-content__question">Нашли, что искали?</p>
                                                        <span className="faq-question-content__reaction faq-question-content__reaction_business like-btn" onClick={(e) => changeActive(e)}>{activeTab.likes}<span className="like icon" /></span>
                                                        <span className="faq-question-content__reaction faq-question-content__reaction_business dislike-btn" onClick={(e) => changeActive(e)}>{activeTab.dislikes}<span className="dislike icon" /></span>
                                                    </div>
                                                </div>
                                            </div></>: <>
                                            <div className="faq-question-text-content">
                                                <p className="faq-question-content__text">{faqList[0]?.content}</p>
                                                <div className="faq-question-content__data">
                                                    <span className="faq-question-content__views"><span className="view icon"></span>{faqList[0]?.views}</span>
                                                    <div>
                                                        <p className="faq-question-content__question">Нашли, что искали?</p>
                                                        <span className="faq-question-content__reaction faq-question-content__reaction_business like-btn" onClick={(e) => changeActive(e)}>{faqList[0]?.likes}<span className="like icon" /></span>
                                                        <span className="faq-question-content__reaction faq-question-content__reaction_business dislike-btn" onClick={(e) => changeActive(e)}>{faqList[0]?.dislikes}<span className="dislike icon" /></span>
                                                    </div>
                                                </div></div></>}
                                    </div>
                                </div>)}
                            </div>
                        </div>}
                    </div>)}
                    {/*{!isLoading && customerQuestions[0] && customerQuestions.map((question, questionIndex) => <div className="faq-question" key={questionIndex}>*/}
                    {/*    <h4 className="faq-question__subtitle">Skilla Заказчикам</h4>*/}
                    {/*    <h2 className="faq-question__title"><span>{questionIndex}.</span>{question.title}</h2>*/}
                    {/*    <div className="faq-question__inner">*/}
                    {/*        <div className="faq-question__tabs">*/}
                    {/*            {question.tabs.map((tab, tabIndex) => <button className={activeTab.parentTitle === question.title*/}
                    {/*                ?*/}

                    {/*                activeTab.question === tab.question ? "faq-question__tab faq-question__tab_active" : "faq-question__tab"*/}

                    {/*                :*/}

                    {/*tabIndex === 0 ? "faq-question__tab faq-question__tab_active" : "faq-question__tab"} onClick={() => changeTab({*/}
                    {/*question: tab.question,*/}
                    {/*title: tab.title,*/}
                    {/*content: tab.content,*/}
                    {/*views: tab.views,*/}
                    {/*likes: tab.likes,*/}
                    {/*dislikes: tab.dislikes,*/}
                    {/*parentTitle: question.title})}>{tab.question}</button>)}*/}
                    {/*        </div>*/}
                    {/*        <div className="faq-question-content">*/}
                    {/*            {activeTab.parentTitle === question.title ? <>*/}
                    {/*            <h3 className="faq-question-content__title">{activeTab.title}</h3>*/}
                    {/*            <p className="faq-question-content__text">{activeTab.content}</p>*/}
                    {/*            <div className="faq-question-content__data">*/}
                    {/*                <span className="faq-question-content__views">{activeTab.views}</span>*/}
                    {/*                <div>*/}
                    {/*                    <p className="faq-question-content__question">Нашли, что искали?</p>*/}
                    {/*                    <span className="faq-question-content__reaction" onClick={(e) => changeActive(e)}>{activeTab.likes}<span className="like icon" /></span>*/}
                    {/*                    <span className="faq-question-content__reaction" onClick={(e) => changeActive(e)}>{activeTab.dislikes}<span className="dislike icon" /></span>*/}
                    {/*                </div>*/}
                    {/*            </div></> : <>*/}
                    {/*                <h3 className="faq-question-content__title">{question.tabs[0].title}</h3>*/}
                    {/*                <p className="faq-question-content__text">{question.tabs[0].content}</p>*/}
                    {/*                <div className="faq-question-content__data">*/}
                    {/*                    <span className="faq-question-content__views"><span className="view icon"></span>{question.tabs[0].views}</span>*/}
                    {/*                    <div>*/}
                    {/*                        <p className="faq-question-content__question">Нашли, что искали?</p>*/}
                    {/*                        <span className="faq-question-content__reaction" onClick={(e) => changeActive(e)}>{question.tabs[0].likes}<span className="like icon" /></span>*/}
                    {/*                        <span className="faq-question-content__reaction" onClick={(e) => changeActive(e)}>{question.tabs[0].dislikes}<span className="dislike icon" /></span>*/}
                    {/*                    </div>*/}
                    {/*                </div></>}*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>)}*/}

                </div>
            </section>
            <Footer page={page} type='faq' />
        </StyledFaq>
    )
}

export default Faq

const StyledFaq = styled.div`
  background-color: #fff;
  .header {
    background: url('/static/customer/header/background.png') no-repeat center top / cover;
    min-height: 100vh;
    position: relative;
    margin: auto;
  }

  .header_worker {
    background: url('/static/worker/header/background.png') no-repeat center top / cover;
  }
  
  .header_business {
    background: url('/static/business/faq/background.png') no-repeat center top / cover;
  }

  .header__image {
    position: absolute;
    right: 10vw;
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

  .header__button_worker {
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
  
  .header__form {
    width: min-content;
    border-radius: 12px;
    background-color: rgba(0, 7, 41, 0.5);
    padding: 25px;
    margin: 42px 0 110px 0;
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
  
  .header__content_business {
    max-width: 805px;
  }
  
  .header-form {
    padding: 24px;
    background-color: rgba(0, 7, 41, 0.5);
    border-radius: 12px;
    width: max-content;
    margin: 60px 0 35px 0;
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
    width: 339px;
    
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
    gap: 87px;
  }
  
  .header__info {
    font-size: 14px;
    color: rgba(255, 255, 255, .6);
    padding: 35px 0 60px 0;

    & a {
      color: inherit;
      transition: color .3s ease;
      text-decoration: underline;

      &:hover {
        color: #97A8FF;
      }
    }
  }
  
  .header__info_business {
    padding: 52px 0 0 0;
  }

  .ribbons {
    max-width: 1920px;
    margin: auto;
    width: 100%;
    margin-top: -30px;
    overflow: hidden;
    z-index: 1;
    position: relative;

    & img {
      width: 100%;
    }
  }
  
  .faq__loader {
    margin: 100px auto;
    text-align: center;
  }
  
  .faq__loader_tab-content {
    margin: 30px 0 30px 0;
  }
  
  .faq {
    //background-color: #fff;
    margin-top: 90px;
    margin-bottom: 135px;
  }
  
  .faq-question {
    &:not(:last-child) {
      margin-bottom: 110px;
    }
  }
  
  .faq-question__subtitle {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #C7C9D1;
    margin-bottom: 12px;
  }
  
  .faq-question__title {
    font-size: 46px;
    line-height: 56px;
    color: #303550;
    font-weight: 800;
    
    & span {
      color: #C7C9D1;
      font-family: 'Arial';
      padding-right: 24px;
    }
  }
  
  .faq-question__inner {
    margin-top: 48px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  
  .faq-question__tabs {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .faq-question__tab {
    transition: background-color .3s ease, color .3s ease;
    width: max-content;
    display: flex;
    align-items: center;
    font-family: inherit;
    padding: 0 16px;
    position: relative;
    height: 56px;
    border-radius: 4px 0 0 4px;
    font-size: 18px;
    line-height: 24px;
    color: #303550;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    
    &:hover {
      color: #3357FF;
    }
    
    &::after {
      content: "";
      display: block;
      position: absolute;
      right: -23px;
      top: 0;
      height: 56px;
      width: 24px;
      opacity: 0;
      transition: opacity .3s ease;
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='24' height='56' viewBox='0 0 24 56' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M0.980074 0C2.22155 0 3.39266 0.57645 4.14988 1.56026L22.6222 25.5603C23.7291 26.9984 23.7291 29.0016 22.6222 30.4397L4.14988 54.4397C3.39266 55.4235 2.22155 56 0.980073 56H0.5V0H0.980074Z' fill='%233357FF'/%3e%3c/svg%3e ");
    }
    
    &.faq-question__tab_active {
      color: #fff;
      background-color: #3357FF;
      &::after {
        opacity: 1;
      }
    }
  }

  .faq-question__tabs_worker {
    & .faq-question__tab::after {
      width: 23px;
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='23' height='56' viewBox='0 0 23 56' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M0.480074 0C1.72155 0 2.89266 0.57645 3.64988 1.56026L22.1222 25.5603C23.2291 26.9984 23.2291 29.0016 22.1222 30.4397L3.64988 54.4397C2.89266 55.4235 1.72155 56 0.480073 56H0V0H0.480074Z' fill='%23A033FF'/%3e%3c/svg%3e ");
    }
    
    & .faq-question__tab_active {
      background-color: #A033FF;
    }
  }

  .faq-question__tabs_business {
    & .faq-question__tab:not(.faq-question__tab_active):hover {
      color: #00CC6E;
    }
    
    & .faq-question__tab::after {
      width: 23px;
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='23' height='56' viewBox='0 0 23 56' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M0.480074 0C1.72155 0 2.89266 0.57645 3.64988 1.56026L22.1222 25.5603C23.2291 26.9984 23.2291 29.0016 22.1222 30.4397L3.64988 54.4397C2.89266 55.4235 1.72155 56 0.480073 56H0V0H0.480074Z' fill='%2300CC6E'/%3e%3c/svg%3e ");
    }

    & .faq-question__tab_active {
      background-color: #00CC6E;
    }
  }
  
  .faq-question-content__title {
    font-size: 22px;
    line-height: 29px;
    margin-bottom: 24px;
    font-weight: 600;
    color: #000729;
  }
  
  .faq-question-content__text {
    font-size: 20px;
    line-height: 30px;
    color: #000729;
  }
  
  .faq-question-content__data {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
    
    & div {
      display: flex;
      align-items: center;
    }
  }
  
  .faq-question-content__views {
    display: flex;
    align-items: center;
    font-family: Arial;
    font-size: 14px;
    line-height: 18px;
    font-weight: 500;
    color: #ABADBA;
    
    & span {
      margin-right: 6px;
    }
  }

  .faq-question-content__reaction {
    display: flex;
    align-items: center;
    padding: 8px;
    font-family: Arial;
    font-size: 14px;
    line-height: 17px;
    color: #ABADBA;
    border-radius: 4px;
    background-color: #E3E4E8;
    border: 1px solid #E3E4E8;
    cursor: pointer;
    transition: background-color .3s ease, color .3s ease, border .3s ease;
    
    &:nth-child(2) {
      margin-right: 4px;
    }
    
    & span {
      margin-left: 5px;
    }
    
    &:hover {
      background-color: transparent;
      border: 1px solid #3357FF;
      color: #3357FF;
      
      &:nth-child(2) span {
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='15' height='14' viewBox='0 0 15 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M9.19098 2.75738C9.6347 1.86698 9.32036 0.783922 8.46957 0.27174C7.58703 -0.259558 6.44328 0.011349 5.89072 0.882561L3.3 4.96732V11.6589C3.3 12.9518 4.34467 14 5.63333 14H10.3C11.0344 14 11.726 13.6531 12.1667 13.0635L14.5 9.94202V6.97658C14.5 5.6836 13.4553 4.63544 12.1667 4.63544H8.25508L9.19098 2.75738Z' fill='%233357FF'/%3e%3cpath d='M0.5 4.63544V14H2.5V4.63544H0.5Z' fill='%233357FF'/%3e%3c/svg%3e ");
      }
      
      &:nth-child(3) span {
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='15' height='14' viewBox='0 0 15 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M2.5 9.36456V0H0.5V9.36456H2.5Z' fill='%233357FF'/%3e%3cpath d='M5.63333 0C4.34467 0 3.3 1.04816 3.3 2.34114V9.03268L5.89072 13.1174C6.44328 13.9887 7.58703 14.2596 8.46957 13.7283C9.32036 13.2161 9.6347 12.133 9.19098 11.2426L8.25508 9.36456H12.1667C13.4553 9.36456 14.5 8.3164 14.5 7.02342V4.05798L12.1667 0.936456C11.726 0.346944 11.0344 0 10.3 0H5.63333Z' fill='%233357FF'/%3e%3c/svg%3e ");
      }
    }

    &.faq-question-content__reaction_active {
      background-color: #3357FF;
      color: #fff;
      border-color: #3357FF;

      &:nth-child(2) span {
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='15' height='14' viewBox='0 0 15 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M9.19098 2.75738C9.6347 1.86698 9.32036 0.783922 8.46957 0.27174C7.58703 -0.259558 6.44328 0.011349 5.89072 0.882561L3.3 4.96732V11.6589C3.3 12.9518 4.34467 14 5.63333 14H10.3C11.0344 14 11.726 13.6531 12.1667 13.0635L14.5 9.94202V6.97658C14.5 5.6836 13.4553 4.63544 12.1667 4.63544H8.25508L9.19098 2.75738Z' fill='white'/%3e%3cpath d='M0.5 4.63544V14H2.5V4.63544H0.5Z' fill='white'/%3e%3c/svg%3e ");
      }

      &:nth-child(3) span {
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='15' height='14' viewBox='0 0 15 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M2.5 9.36456V0H0.5V9.36456H2.5Z' fill='%23FFFFFF'/%3e%3cpath d='M5.63333 0C4.34467 0 3.3 1.04816 3.3 2.34114V9.03268L5.89072 13.1174C6.44328 13.9887 7.58703 14.2596 8.46957 13.7283C9.32036 13.2161 9.6347 12.133 9.19098 11.2426L8.25508 9.36456H12.1667C13.4553 9.36456 14.5 8.3164 14.5 7.02342V4.05798L12.1667 0.936456C11.726 0.346944 11.0344 0 10.3 0H5.63333Z' fill='%23fff'/%3e%3c/svg%3e ");
      }
    }
  }
  
  .faq-question-content__reaction_worker {
    &:hover {
      background-color: transparent;
      border: 1px solid #A033FF;
      color: #A033FF;

      &:nth-child(2) span {
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M8.69098 2.75738C9.1347 1.86698 8.82036 0.783922 7.96957 0.27174C7.08703 -0.259558 5.94328 0.011349 5.39072 0.882561L2.8 4.96732V11.6589C2.8 12.9518 3.84467 14 5.13333 14H9.8C10.5344 14 11.226 13.6531 11.6667 13.0635L14 9.94202V6.97658C14 5.6836 12.9553 4.63544 11.6667 4.63544H7.75508L8.69098 2.75738Z' fill='%23A033FF'/%3e%3cpath d='M0 4.63544V14H2V4.63544H0Z' fill='%23A033FF'/%3e%3c/svg%3e ");
      }

      &:nth-child(3) span {
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M2 9.36456V0H0V9.36456H2Z' fill='%23A033FF'/%3e%3cpath d='M5.13333 0C3.84467 0 2.8 1.04816 2.8 2.34114V9.03268L5.39072 13.1174C5.94328 13.9887 7.08703 14.2596 7.96957 13.7283C8.82036 13.2161 9.1347 12.133 8.69098 11.2426L7.75508 9.36456H11.6667C12.9553 9.36456 14 8.3164 14 7.02342V4.05798L11.6667 0.936456C11.226 0.346944 10.5344 0 9.8 0H5.13333Z' fill='%23A033FF'/%3e%3c/svg%3e ");
      }
    }

    &.faq-question-content__reaction_active {
      background-color: #A033FF;
      color: #fff;
      border-color: #A033FF;

      &:nth-child(2) span {
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M8.69098 2.75738C9.1347 1.86698 8.82036 0.783922 7.96957 0.27174C7.08703 -0.259558 5.94328 0.011349 5.39072 0.882561L2.8 4.96732V11.6589C2.8 12.9518 3.84467 14 5.13333 14H9.8C10.5344 14 11.226 13.6531 11.6667 13.0635L14 9.94202V6.97658C14 5.6836 12.9553 4.63544 11.6667 4.63544H7.75508L8.69098 2.75738Z' fill='white'/%3e%3cpath d='M0 4.63544V14H2V4.63544H0Z' fill='white'/%3e%3c/svg%3e ");
      }

      &:nth-child(3) span {
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M2 9.36456V0H0V9.36456H2Z' fill='white'/%3e%3cpath d='M5.13333 0C3.84467 0 2.8 1.04816 2.8 2.34114V9.03268L5.39072 13.1174C5.94328 13.9887 7.08703 14.2596 7.96957 13.7283C8.82036 13.2161 9.1347 12.133 8.69098 11.2426L7.75508 9.36456H11.6667C12.9553 9.36456 14 8.3164 14 7.02342V4.05798L11.6667 0.936456C11.226 0.346944 10.5344 0 9.8 0H5.13333Z' fill='white'/%3e%3c/svg%3e ");
      }
    }
  }

  .faq-question-content__reaction_business {
    &:hover {
      background-color: transparent;
      border: 1px solid #00CC6E;
      color: #00CC6E;

      &:nth-child(2) span {
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M8.69098 2.75738C9.1347 1.86698 8.82036 0.783922 7.96957 0.27174C7.08703 -0.259558 5.94328 0.011349 5.39072 0.882561L2.8 4.96732V11.6589C2.8 12.9518 3.84467 14 5.13333 14H9.8C10.5344 14 11.226 13.6531 11.6667 13.0635L14 9.94202V6.97658C14 5.6836 12.9553 4.63544 11.6667 4.63544H7.75508L8.69098 2.75738Z' fill='%2300CC6E'/%3e%3cpath d='M0 4.63544V14H2V4.63544H0Z' fill='%2300CC6E'/%3e%3c/svg%3e ");
      }

      &:nth-child(3) span {
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M2 9.36456V0H0V9.36456H2Z' fill='%2300CC6E'/%3e%3cpath d='M5.13333 0C3.84467 0 2.8 1.04816 2.8 2.34114V9.03268L5.39072 13.1174C5.94328 13.9887 7.08703 14.2596 7.96957 13.7283C8.82036 13.2161 9.1347 12.133 8.69098 11.2426L7.75508 9.36456H11.6667C12.9553 9.36456 14 8.3164 14 7.02342V4.05798L11.6667 0.936456C11.226 0.346944 10.5344 0 9.8 0H5.13333Z' fill='%2300CC6E'/%3e%3c/svg%3e ");
      }
    }

    &.faq-question-content__reaction_active {
      background-color: #00CC6E;
      color: #fff;
      border-color: #00CC6E;

      &:nth-child(2) span {
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M8.69098 2.75738C9.1347 1.86698 8.82036 0.783922 7.96957 0.27174C7.08703 -0.259558 5.94328 0.011349 5.39072 0.882561L2.8 4.96732V11.6589C2.8 12.9518 3.84467 14 5.13333 14H9.8C10.5344 14 11.226 13.6531 11.6667 13.0635L14 9.94202V6.97658C14 5.6836 12.9553 4.63544 11.6667 4.63544H7.75508L8.69098 2.75738Z' fill='white'/%3e%3cpath d='M0 4.63544V14H2V4.63544H0Z' fill='white'/%3e%3c/svg%3e ");
      }

      &:nth-child(3) span {
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M2 9.36456V0H0V9.36456H2Z' fill='white'/%3e%3cpath d='M5.13333 0C3.84467 0 2.8 1.04816 2.8 2.34114V9.03268L5.39072 13.1174C5.94328 13.9887 7.08703 14.2596 7.96957 13.7283C8.82036 13.2161 9.1347 12.133 8.69098 11.2426L7.75508 9.36456H11.6667C12.9553 9.36456 14 8.3164 14 7.02342V4.05798L11.6667 0.936456C11.226 0.346944 10.5344 0 9.8 0H5.13333Z' fill='white'/%3e%3c/svg%3e ");
      }
    }
  }
  
  .faq-question-content__question {
    margin-right: 16px;
    color: #ABADBA;
    font-size: 16px;
    line-height: 19px;
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
    
    .header_business {
      padding: 187px 0 50px 0;
    }
    
    .header__content {
      padding-top: 0;
    }
    .header__image {
      right: 0;
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
      right: 0;
    }
    
    .faq-question__inner {
      grid-template-columns: 60% 40%; 
    }

    .faq-question__tab {
      max-width: 95%;
      text-align: left;
    }
  }

  @media screen and (max-width: 1399px) {
    .container {
      width: 315px;
    }
    
    .header {
      padding: 150px 0 0 0 !important;
      min-height: auto;
    }

    .header__content {
      padding-top: 0 !important;
    }
    
    .header__content_business .header__title {
      font-size: 34px;
    }
    
    .header__title {
      font-size: 36px;
      line-height: 1.2em;
      margin-bottom: 16px;
    }
    
    .header__description {
      font-size: 18px;
    }

    .header__button_worker,
    .header__apps {
      display: none;
    }

    .header__image {
      width: 100%;
      margin: 32px auto 0 auto;
      position: static;
    }
    
    .ribbons {
      & img {
        width: auto;
      }
    }

    .faq-question__subtitle {
      font-size: 14px;
      margin-bottom: 8px;
    }

    .faq-question__title {
      font-size: 25px;
      line-height: 1.2em;
      
      & span {
        padding-right: 10px;
      }
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
      margin-top: 0;
      margin-bottom: 18px;
      grid-template-columns: 1fr 1fr;
    }
    
    .header__links {
      display: none;
    }
    
    .header__info {
      font-size: 13px;
    }
    
    .header__info_business {
      padding-top: 0;
    }
    
    .header__form {
      margin: 30px 0;
      width: 100%;
      padding: 20px;
      border-radius: 5px;
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 20px;
      
      & > div:nth-child(3) {
        display: none;
      }
    }
    
    .header__input,
    .header__button {
      width: 100%;
    }
    
    .header__info {
      padding: 0;
    }
    
    .faq {
      margin: 50px 0;
      overflow: hidden;
    }

    .faq-question__inner {
      display: block;
      margin-top: 30px;
    }
    
    .faq-tab {
      width: 100%;
      
      & .faq-question-content {
        display: none;
      }
      
      &.faq-tab_active {}
    }

    .faq-question__tabs {
      display: block;
      width: 100%;
    }

    .faq-question__tab {
      width: 100%;
      max-width: 100%;
      padding: 12px 0;
      background-color: transparent;
      color: #303550;
      font-weight: 400;
      font-size: 14px;
      line-height: 1.2em;

      position: relative;

      &.faq-question__tab_active ~ .faq-question-content {
        display: block;
      }

      &::before {
        content: "";
        display: block;
        width: 300vw;
        margin-left: -100vw;
        background-color: transparent;
        height: inherit;
        position: absolute;
        transition: background-color .3s ease;
      }
      
      & span {
        width: 100%;
        position: relative;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        &::after {
          content: url("data:image/svg+xml;charset=UTF-8,%3csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M10.59 0.589844L6 5.16984L1.41 0.589844L0 1.99984L6 7.99984L12 1.99984L10.59 0.589844Z' fill='%23C7C9D1'/%3e%3c/svg%3e ");
        }
      }
      
      &::after {
        display: none;
      }
      
      &.faq-question__tab_active {
        border-radius: 0;
        background-color: transparent;
        font-weight: 600;
        
        &::before {
          background-color: #A033FF;
        }
        
        & span::after {
          content: url("data:image/svg+xml;charset=UTF-8,%3csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M1.41 7.41016L6 2.83016L10.59 7.41016L12 6.00016L6 0.000156403L0 6.00016L1.41 7.41016Z' fill='%23CF99FF'/%3e%3c/svg%3e ");
        }
      }
      
      &:hover:not(.faq-question__tab_active) {
        color: #303550;
      }
    }
    
    .faq-question-content__text {
      font-size: 16px;
      margin-bottom: 0;
      margin-top: 16px;
    }
    
    .faq-question-content__question {
      display: none;
    }

    .faq-question-content__data {
      margin-top: 24px;
      margin-bottom: 10px;
    }

    .faq-question:not(:last-child) {
      margin-bottom: 50px;
    }
    
    .faq-tab_business .faq-question__tab.faq-question__tab_active::before {
      background-color: #00FF88;
    }

    .faq-tab_customer .faq-question__tab.faq-question__tab_active::before {
      background-color: #3357FF;
    }

    .faq-tab_business .faq-question__tab.faq-question__tab_active {
      color: #000729;
      
      & span::after {
        content: url("data:image/svg+xml;charset=UTF-8,%3csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M1.41 7.41016L6 2.83016L10.59 7.41016L12 6.00016L6 0.000156403L0 6.00016L1.41 7.41016Z' fill='%23000729'/%3e%3c/svg%3e ");
      }
    }
  }
`