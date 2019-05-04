<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab-wrapper">
      <tab :tabs="tabs"></tab>
    </div>
  </div>
</template>

<script>
  import VHeader from 'components/v-header'
  import Tab from 'components/tab'
  import Seller from 'components/seller'
  import Goods from 'components/goods'
  import Ratings from 'components/ratings'
  import { getSeller } from 'api'

  export default {
    name: 'app',
    data() {
      return {
        seller: {}
      }
    },
    computed: {
      tabs() {
        return [{
          label: '商品',
          component: Goods,
          data: {
            seller: this.seller
          }
        }, {
          label: '评价',
          component: Ratings,
          data: {
            seller: this.seller
          }
        }, {
          label: '商家',
          component: Seller,
          data: {
            seller: this.seller
          }
        }]
      }
    },
    components: {
      VHeader,
      Tab
    },
    methods: {
      _getSeller() {
        getSeller()
          .then(seller => {
            this.seller = seller
          })
      }
    },
    created() {
      this._getSeller()
    }
  }
</script>
<style lang="stylus">
  #app
    .tab-wrapper
      position: fixed
      top: 136px
      left: 0
      right: 0
      bottom: 0
</style>
