<template>
  <div class="home">
    <Header></Header>
      <div class="content">
        <div class="wrapper">
         <swiper :options="swiperOption" @slideChange="changeSwiperIndex" ref="mySwiper">
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
    <Footer :activeChange="loop"></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MainHome from './components/MainHome'
import Message from './components/Message'
import Hot from './components/Hot'

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
      loop: 0,
      swiperOption: {
        pagination: '.swiper-pagination',
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        on: {
          slideChange: function () {
            localStorage.setItem('index', this.activeIndex)
          }
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  watch: {
  },
  methods: {
    changeSwiperIndex () {
      this.loop = this.swiper.activeIndex
      console.log(this.loop + "loop")
    }
  },
  mounted () {
    //console.log('this is current swiper instance object', this.swiper)
    let index = localStorage.getItem('index')
    this.swiper.slideTo(index, 1000, false)
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
