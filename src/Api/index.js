import axios from 'axios'

const instanceWithToken = axios.create({
    withCredentials: false,
    baseURL: `https://api.skilla.ru/`
})

instanceWithToken.interceptors.request.use(config => {
    config.headers.Authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
    return config
})

export const getCities = () => {
    return instanceWithToken.post(`skilla/getCities?`)
}

export const getMaps = (city, type) => {
    return instanceWithToken.post(`skilla/getOrdersMap?city=${city}&type=${type}`)
}

export const getClientsTabs = () => {
    return instanceWithToken.post(`articles/getCats?`)
}

export const getUserInfo = () => {
    return instanceWithToken.post(`skilla/getUserInfo?`)
}

export const getFaqCats = () => {
    return instanceWithToken.post('skilla/getFaqCats?')
}

export const getFaqSubcats = () => {
    return instanceWithToken.post(`skilla/getFaqSubcats?`)
}

export const getFaqList = () => {
    return instanceWithToken.post('skilla/getFaqList?')
}

export const getFaq = (id) => {
    return instanceWithToken.post(`skilla/getFaq?id=${id}`)
}

export const likeQuestion = (id, type) => {
    return instanceWithToken.post(`skilla/setFaqLike?id=${id}&type=${type}`)
}

export const removeLikeQuestion = (id, type) => {
    return instanceWithToken.post(`skilla/deleteFaqLike?id=${id}&type=${type}`)
}

export const getRevenueGraph = (type) => {
    return instanceWithToken.post(`skilla/getRevenueGraph?type=${type}`)
}

export const getList = (alias) => {
    return instanceWithToken.post(`articles/getList?cats_alias[]=${alias}`)
}

export const sendForm = (phone, type) => {
    return instanceWithToken.post(`https://api.skilla.ru/articles/sendRequest?phone=${phone}&type=${type}`)
}