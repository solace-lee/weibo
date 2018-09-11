<template>
  <div class="footer">
    <div class="nav">
      <div class="home">
        <div class="iconfont home-icon">&#xe630;</div>
      </div>
      <div class="message">
        <div class="iconfont message-icon">&#xe631;</div>
      </div>
      <div class="hot">
        <div class="iconfont hot-icon">&#xe6b6;</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import "../assets/style/varibles.styl"

.footer
  position: fixed
  left: 0
  right: 0
  bottom: 0
  height: $footerHeight
  line-height: $footerHeight
  background: #eee
  .nav
    display: flex
    height: $footerHeight
    text-align: center
    .home
      flex: 1
    .message
      flex: 1
    .hot
      flex: 1
.iconfont
  font-size: .48rem
  color: $bgColor
</style>
