/**
 * Created by Sam on 2019/5/4.
 */
import axios from 'axios'

const ERR_OK = 0

export function get(url) {
  return function (params) {
    return axios.get(url, {
      params
    }).then(({ data: { errno, data } }) => {
      if (errno === ERR_OK) {
        return data
      }
    }).catch(() => {
    })
  }
}
