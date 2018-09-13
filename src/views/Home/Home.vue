<template>
  <div class="home">
    <Header :activeChange="loop"></Header>
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
          <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
         </swiper>
        </div>
      </div>
    <Footer :activeChange="loop" @handleNavClick="navClick"></Footer>
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
        resistanceRatio: 0.5,
        touchRatio: 0.9,
        shortSwipes: false,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        on: {
          slideChange: function () {
            //  保存最后一次切换的nav页索引到本地存储
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
      //  监听当前滑动到的页面索引并赋值到loop
      //  console.log(this.loop + 'loop')
    },
    navClick (mes) {
      //  监听footer中的nav栏点击事件并跳转到该页
      this.swiper.slideTo(mes, 500, false)
    }
  },
  mounted () {
    //  console.log('this is current swiper instance object', this.swiper)
    //  读取最近一次切换nav的记录并在挂载后跳转到该页
    let index = localStorage.getItem('index')
    this.swiper.slideTo(index, 200, false)
  }
}
</script>
<style lang="stylus" scoped>
@import '../../../src/assets/style/varibles.styl'

.wrapper >>> .swiper-container
  overflow: inherit
.content
  position: absolute
  top: $headerHeight
  left: 0
  right: 0
  bottom: $footerHeight
  overflow: hidden
  .wrapper
    background: #fff
</style>
