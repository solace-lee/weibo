<template lang="html">
  <div class="mainhome">
    <cube-scroll :options="scrollOptions">
      <div class="list-wrapper">
        <div class="head-icon">
          <img class="head-img" src="//tvax4.sinaimg.cn/crop.0.0.512.512.180/7f9147a5ly8floqz4q2g3j20e80e8t8x.jpg" />
        </div>
        <div class="content">
          <div class="user-info">
            <div class="name">美景游</div>
            <div class="time">2018/9/13</div>
          </div>
          <div class="weibo">
            <p class="weiboTxt">做一个有质感的女孩：读书旅游,早睡早起，美丽典雅，自强独立.....​​​</p>
            <div class="weiboMedia">
              <div class="weiboImg">
                <img src="https://wx3.sinaimg.cn/orj360/c1ca487bly1fq0tg7g6lbj20c80c8jt9.jpg" />
                <img src="https://wx2.sinaimg.cn/orj360/c1ca487bly1fq0tg7fymnj20c80c83zt.jpg" />
                <img src="https://wx1.sinaimg.cn/orj360/c1ca487bly1fq0tg7g161j20c80ic0u9.jpg" />
                <img src="https://wx1.sinaimg.cn/orj360/c1ca487bly1fq0tg7g8jmj20b408cwez.jpg" />
                <img src="https://wx4.sinaimg.cn/orj360/c1ca487bly1fq0tg7jw4cj20c8095q3t.jpg" />
                <img src="https://wx4.sinaimg.cn/orj360/c1ca487bly1fq0tg7gjvpj20c80c8761.jpg" />
                <img src="https://wx1.sinaimg.cn/orj360/c1ca487bly1fq0tg7gqffj20c8085my6.jpg" />
                <img src="https://wx3.sinaimg.cn/orj360/c1ca487bly1fq0tg7gy2qj20c80c8tbg.jpg" />
                <img src="https://wx2.sinaimg.cn/orj360/c1ca487bly1fq0tg7v1beg207s07a7wi.gif" />
              </div>
              <div class="weiboVideo">2018/9/13</div>
            </div>
          </div>
        </div>
      </div>
    </cube-scroll>
  </div>
</template>

<script>
export default {
  name: 'MainHome',
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
    var mainhome = document.getElementsByClassName('mainhome')[0]
    mainhome.style.height = window.innerHeight + 'px'
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../../src/assets/style/varibles.styl'

.mainhome
  width: 411px
  overflow: hidden
  .list-wrapper
    width: 411px
    // margin: 10px
    // display: flex
    color: #666
    overflow: hidden
    .head-icon
      // float: left
      // flex: 1
      height: 48px
      width: 48px
      .head-img
        height: 36px
        width: 36px
        border-radius: 24px
    .content
      // flex: .5
      // margin-left: 15px
      // float: right
      .user-info
        height: 48px
        font-size: 20px
      .weibo
        width: auto
        .weiboTxt
          font-size: 20px
          width: 100%
          word-wrap: break-word
        .weiboMedia
          overflow: hidden
          // display: flex
          .weiboImg
            width: 33%
            // display: flex
            // flex-wrap: wrap
            .img
              width: 30%

</style>
