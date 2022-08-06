import apiUrl from '../apiConfig'
import axios from 'axios'

// INDEX
export const getAllBooks = () => {
    return axios(`${apiUrl}/books`)
}