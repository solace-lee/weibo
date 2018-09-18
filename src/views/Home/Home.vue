<template>
  <div class="home">
    <Header :activeChange="initialIndex"></Header>
      <div class="content">
        <div class="tab-slide-container">
          <cube-slide
            ref="slide"
            :loop="loop"
            :initial-index="initialIndex"
            :auto-play="autoPlay"
            :show-dots="showDots"
            :options="slideOptions"
            @change="changePage"
          >
            <!-- 主页 -->
            <cube-slide-item>
              <main-home></main-home>
            </cube-slide-item>
            <!-- 消息 -->
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
          v-model="selectedLabelSlotsOnly"
          @click="clickHandler"
          @change="changeHandler">
          <cube-tab v-for="(item, index) in tabs" :label="item.label" :key="item.label">
            <i slot="icon" :class="item.icon"></i>
            <!-- use en empty tag to replace default slot -->
            <span></span>
          </cube-tab>
        </cube-tab-bar>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../../components/Header'
import MainHome from './components/MainHome'
import Message from './components/Message'
import Hot from './components/Hot'

export default {
  name: 'home',
  components: {
    Header,
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
      selectedLabelSlotsOnly: '主页',
      tabs: [{
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
      this.initialIndex = current * 1
      this.selectedLabelSlotsOnly = this.tabs[current].label
      // console.log(this.tabs[current].label + 111)
    }
  },
  created () {
    //  读取最近一次切换nav的记录并在挂载后跳转到该页
    let index = localStorage.getItem('index')
    this.initialIndex = index * 1
    this.changePage(index)
  }
}
</script>
<style lang="stylus" scoped>
@import '../../../src/assets/style/varibles.styl'
.cube-slide >>> .cube-slide-group
  white-space: inherit
.content
  position: absolute
  top: $headerHeight
  left: 0
  right: 0
  bottom: 0
  overflow: hidden
  .tab-slide-container
    position: fixed
    top: $headerHeight
    left: 0
    right: 0
    bottom: 0
  .cube-tab-bar
    position: fixed
    left: 0
    right: 0
    bottom: 0
    background: #eee
    height: $footerHeight
    line-height: 24px
    font-size: 24px
</style>
