/**
 * Created by Sam on 2019/5/4.
 */
import { createAPI } from 'cube-ui'
import Vue from 'vue'
import HeaderDetail from 'components/header-detail'
import Food from 'components/food'
import ShopCartList from 'components/shop-cart-list'
import ShopCartSticky from 'components/shop-cart-sticky'

createAPI(Vue, HeaderDetail)
createAPI(Vue, Food)
createAPI(Vue, ShopCartList)
createAPI(Vue, ShopCartSticky)
