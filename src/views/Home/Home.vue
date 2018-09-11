<template>
  <div class="home">
    <Header></Header>
      <div class="content">
        <div class="wrapper">
         <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
          <swiper-slide>
            <main-home></main-home>
          </swiper-slide>
          <swiper-slide>
            <message></message>
          </swiper-slide>
          <swiper-slide>
            <hot></hot>
          </swiper-slide>
            <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
         </swiper>
        </div>
      </div>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MainHome from './components/MainHome'
import Message from './components/Message'
import Hot from './components/Hot'
import Swiper from 'swiper/dist/js/swiper.min.js'

export default {
  name: 'home',
  components: {
    Header,
    Footer,
    MainHome,
    Message,
    Hot
  },
  data () {
    return {
      loop: 3,
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        watchSlidesProgress : true
      },
    }
  },
  computed: {
  },
  watch: {
    progress () {
      console.log(progress)
    }
  },
  mounted () {
    // var mySwiper = new Swiper('.swiper-container',{
    //   onInit: function(swiper){
      //Swiper初始化了
      let swiper = this.$refs.mySwiper.swiper;
      this.activeIndex = swiper.progress;
      alert(swiper.progress)
    // }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../../src/assets/style/varibles.styl'

.wrapper >>> .swiper-pagination-bullet-active
  background: #000
.content
  position: absolute
  top: $headerHeight
  left: 0
  right: 0
  bottom: $footerHeight
  .wrapper
    overflow: hidden
    width: 100%
    height: 100%
    background: #eee
</style>
