<template lang="html">
  <div class="message">
    <cube-scroll :options="scrollOptions">
      <div class="list-wrapper">
        <ul>
          <li>
            <div class="list">
              <div class="iconfont">&#xe63f;</div>
              <p class="txt border-bottom">@我的人</p>
            </div>
          </li>
          <li>
            <div class="list">
              <div class="iconfont">&#xe645;</div>
              <p class="txt border-bottom">评论我的消息</p>
            </div>
          </li>
          <li>
            <div class="list">
              <div class="iconfont">&#xe652;</div>
              <p class="txt border-bottom">赞我的微博</p>
            </div>
          </li>
          <li>
            <div class="list">
              <div class="iconfont">&#xe64c;</div>
              <p class="txt border-bottom">私信</p>
            </div>
          </li>
        </ul>
      </div>
    </cube-scroll>
  </div>
</template>

<script>
export default {
  name: 'message',
  data () {
    return {
      scrollOptions: {
        /* lock x-direction when scrolling horizontally and  vertically at the same time */
        directionLockThreshold: 0
      }
    }
  },
  mounted () {
    // this.scroll = new Bscroll(this.$refs.wrapper)
    console.log('高度' + window.innerHeight)
    var message = document.getElementsByClassName('message')[0]
    message.style.height = window.innerHeight + 'px'
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../../src/assets/style/varibles.styl'

.message
  .list-wrapper
    color: #666
    overflow: hidden
    .list
      height: 50px
      display: flex
      line-height: 50px
      .iconfont
        height: 50px
        width: 50px
        font-size: 28px
        margin-left: 20px
        color: $bgColor
      .txt
        flex: 1
        font-size: 16px
</style>
