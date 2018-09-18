<template>
  <div class="header">
    <div class="menu" @click="menuBar">
      <div class="iconfont home-icon">&#xe654;</div>
    </div>
    <div class="title">
      {{this.title}}
      <span class="iconfont titleMore" v-show="this.more">&#xe62e;</span>
    </div>
    <div class="search" @click="searchBtn">
      <div class="iconfont search-icon">&#xe632;</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    activeChange: Number
  },
  data () {
    return {
      title: '',
      more: false
    }
  },
  watch: {
    activeChange () {
      this.changeNav(this.activeChange)
      //  监听home.vue中传递过来的活动页索引值
    }
  },
  methods: {
    changeNav (e) {
      console.log('修改header的title值到索引' + e)
      //  判断当前处于什么页面，修改header的title值
      switch (e) {
        case 0:
          this.title = '全部微博'
          this.more = true
          break
        case 1:
          this.title = '消息'
          this.more = false
          break
        case 2:
          this.title = '热门'
          this.more = false
          break
      }
    },
    menuBar () {
      console.log('点击了菜单键')
    },
    searchBtn () {
      console.log('点击了搜索键')
    }
  },
  mounted () {
    //  网页加载完毕对header的title值经行渲染
    this.changeNav(this.activeChange)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '../assets/style/varibles.styl'
.header
  position: fixed
  display: flex
  left: 0
  right: 0
  top: 0
  height: $headerHeight
  line-height: $headerHeight
  background: $bgColor
  min-width: 0
  .menu
    float: left
    text-align: center
    width: 60px
  .title
    flex: 1
    font-size: 16px
    color: $headerColor
    line-height: $headerHeight
  .search
    float: right
    text-align: center
    width: 60px
.iconfont
  font-size: 20px
  color: $headerColor
.titleMore
  font-size: 12px
  color: $headerColor
</style>
