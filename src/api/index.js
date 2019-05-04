/**
 * Created by Sam on 2019/5/4.
 */
import { get } from './helpers'

const getSeller = get('/api/seller')
const getGoods = get('/api/goods')
const getRatings = get('/api/ratings')

export { getSeller, getGoods, getRatings }
