import axios from 'axios'
import { fromCodePoint } from 'core-js/core/string'

import Constants from '../plugins/Constants'

const instance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/" ? Vue.Constants.DEBUG : "https://prodUrl.com",
    withCredentials: true,
    headers: {
        accept: "application/json"
    }
})

export default instance