<template>
  <div class="header">
    <div class="menu">
      <div class="iconfont home-icon">&#xe654;</div>
    </div>
    <div class="title">
    {{this.title}}
    </div>
    <div class="search">
      <div class="iconfont search-icon">&#xe632;</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      title: '全部微博'
    }
  },
  props: {
    msg: String
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
    width: 1rem
  .title
    flex: 1
    color: $headerColor
    line-height: $headerHeight
  .search
    float: right
    text-align: center
    width: 1rem
.iconfont
  font-size: .48rem
  color: $headerColor
</style>
