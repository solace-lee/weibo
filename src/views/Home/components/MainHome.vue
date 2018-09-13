<template lang="html">
  <div class="home" >
    <div class="wrapper" ref='wrapper'>
      <div>
        <div class="headIcon">
          <img src="//tvax4.sinaimg.cn/crop.0.0.512.512.180/7f9147a5ly8floqz4q2g3j20e80e8t8x.jpg" />
        </div>
        <div class="content">
          <div class="userInfo">
            <div class="name">美景游</div>
            <div class="time">2018/9/13</div>
          </div>
          <div class="weibo">
            <div class="weiboTxt">做一个有质感的女孩：读书旅游 ，早睡早起， 美丽典雅， 自强独立..... ​​​</div>
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
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'MainHome',
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
    console.log('高度' + window.innerHeight)
  }
}
</script>

<style lang="stylus" scoped>
.home
  height: 400rem
  .wrapper
    overflow: hidden
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
</style>
