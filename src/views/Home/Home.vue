<template>
  <div class="home">
    <Header :activeChange="loop1"></Header>
      <div class="content">
        <div class="tab-slide-container">
          <cube-slide
            ref="slide"
            :loop="loop"
            :initial-index="initialIndex"
            :auto-play="autoPlay"
            :show-dots="showDots"
            :options="slideOptions"
            @scroll="scroll"
            @change="changePage"
          >
            <!-- 关注 -->
            <cube-slide-item>
              <main-home></main-home>
            </cube-slide-item>
            <!-- 推荐 -->
            <cube-slide-item>
              <message></message>
            </cube-slide-item>
            <!-- 热榜 -->
            <cube-slide-item>
              <hot></hot>
            </cube-slide-item>
          </cube-slide>
        </div>
        <cube-tab-bar
          v-model="selectedLabel"
          showSlider
          inline
          ref="tabNav"
          :data="tabLabels"
          @click="clickHandler"
          @change="changeHandler">
        </cube-tab-bar>
      </div>
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
      loop1: 0,
      loop: false,
      initialIndex: 0,
      autoPlay: false,
      showDots: false,
      selectedLabel: '主页',
      disabled: false,
      tabLabels: [{
        label: '主页',
        icon: 'cubeic-home'
      }, {
        label: '消息',
        icon: 'cubeic-message'
      }, {
        label: '热门',
        icon: 'cubeic-hot'
      }],
      slideOptions: {
        listenScroll: true,
        probeType: 3,
        /* lock y-direction when scrolling horizontally and  vertically at the same time */
        directionLockThreshold: 0
      }
    }
  },
  watch: {
    initialIndex () {
      // 保存最后一次切换的nav页索引到本地存储
      localStorage.setItem('index', this.initialIndex)
    }
  },
  methods: {
    clickHandler (label) {
      //  适合用来刷新
      console.log(label)
    },
    changeHandler (label) {
      console.log(label + 'change')
      switch (label) {
        case '主页':
          this.initialIndex = 0
          break
        case '消息':
          this.initialIndex = 1
          break
        case '热门':
          this.initialIndex = 2
          break
      }
      // if you clicked different tab, this methods can be emitted
    },
    changePage (current) {
      this.selectedLabel = this.tabLabels[current].label
      console.log(current)
    },
    scroll (pos) {
      const x = Math.abs(pos.x)
      const tabItemWidth = this.$refs.tabNav.$el.clientWidth
      const slideScrollerWidth = this.$refs.slide.slide.scrollerWidth
      const deltaX = x / slideScrollerWidth * tabItemWidth
      this.$refs.tabNav.setSliderTransform(deltaX)
      // console.log(deltaX + 'scroll')
    }
  },
  created () {
    //  读取最近一次切换nav的记录并在挂载后跳转到该页
    let index = localStorage.getItem('index')
    console.log(index + 'index')
    this.initialIndex = index * 1
    this.changePage(index)
  }
}
</script>
<style lang="stylus" scoped>
@import '../../../src/assets/style/varibles.styl'

.content
  position: absolute
  top: $headerHeight
  left: 0
  right: 0
  bottom: 0
  overflow: hidden
  .cube-tab-bar
    position: fixed
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .cube-tab-bar-slider
      background-color: black
  // overflow: hidden
  // .wrapper
  //   background: #fff
</style>
