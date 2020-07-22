import axios from 'axios'
import { FETCH_USER } from './types'

export const fetchUser = (payload) => {
  axios.get('/api/current_user')

  return {
    type: FETCH_USER,
    payload,
  }
}
