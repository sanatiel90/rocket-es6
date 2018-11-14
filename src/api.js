import axios from 'axios'

//instancia da classe Axios q já vai possuir uma base url quando for acessar a api
const api = axios.create({
    baseURL: 'https://api.github.com/'
})

export default api;