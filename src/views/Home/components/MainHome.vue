<template lang="html">
  <div class="mainhome">
    <cube-scroll :options="scrollOptions">
      <div class="list-wrapper">
        <div class="border-bottom">
          <div class="head-icon">
            <img class="head-img" :src="weibo.headSrc" />
          </div>
          <div class="content">
            <div class="user-info">
              <div class="name">{{weibo.name}}</div>
              <div class="time">{{weibo.time}}</div>
            </div>
            <div class="weibo">
              <p class="weiboTxt">​​​{{weibo.content}}</p>
              <div class="weiboMedia">
                <div class="imgs">
                  <div class="weiboImg" v-if="weibo.imgs" v-for="(item, index) of weibo.imgs" :key="index">
                    <img class="txt-img" :src="item.src" />
                  </div>
                </div>
                <div class="weiboVideo" v-if="weibo.video">{{weibo.video}}</div>
              </div>
            </div>
            <div class="border-bottom"></div>
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
      },
      weibo: {
        headSrc: '//tvax4.sinaimg.cn/crop.0.0.512.512.180/7f9147a5ly8floqz4q2g3j20e80e8t8x.jpg',
        name: '美景游',
        time: '2018/9/13',
        content: '做一个有质感的女孩：读书旅游,早睡早起，美丽典雅，自强独立.....做一个有质感的女孩：读书旅游,早睡早起，美丽典雅，自强独立.....做一个有质感的女孩：读书旅游,早睡早起，美丽典雅，自强独立.....做一个有质感的女孩：读书旅游,早睡早起，美丽典雅，自强独立.....做一个有质感的女孩：读书旅游,早睡早起，美丽典雅，自强独立.....做一个有质感的女孩：读书旅游,早睡早起，美丽典雅，自强独立.....做一个有质感的女孩：读书旅游,早睡早起，美丽典雅，自强独立.....做一个有质感的女孩：读书旅游,早睡早起，美丽典雅，自强独立.....做一个有质感的女孩：读书旅游,早睡早起，美丽典雅，自强独立.....做一个有质感的女孩：读书旅游,早睡早起，美丽典雅，自强独立.....',
        imgs: [{
          src: 'https://wx3.sinaimg.cn/orj360/c1ca487bly1fq0tg7g6lbj20c80c8jt9.jpg'
        }, {
          src: 'https://wx2.sinaimg.cn/orj360/c1ca487bly1fq0tg7fymnj20c80c83zt.jpg'
        }, {
          src: 'https://wx1.sinaimg.cn/orj360/c1ca487bly1fq0tg7g161j20c80ic0u9.jpg'
        }, {
          src: 'https://wx1.sinaimg.cn/orj360/c1ca487bly1fq0tg7g8jmj20b408cwez.jpg'
        }, {
          src: 'https://wx4.sinaimg.cn/orj360/c1ca487bly1fq0tg7jw4cj20c8095q3t.jpg'
        }, {
          src: 'https://wx4.sinaimg.cn/orj360/c1ca487bly1fq0tg7gjvpj20c80c8761.jpg'
        }, {
          src: 'https://wx1.sinaimg.cn/orj360/c1ca487bly1fq0tg7gqffj20c8085my6.jpg'
        }, {
          src: 'https://wx3.sinaimg.cn/orj360/c1ca487bly1fq0tg7gy2qj20c80c8tbg.jpg'
        }, {
          src: 'https://wx2.sinaimg.cn/orj360/c1ca487bly1fq0tg7v1beg207s07a7wi.gif'
        }],
        video: ''
      }
    }
  },
  mounted () {
    // this.scroll = new Bscroll(this.$refs.wrapper)
    console.log('高度' + window.innerHeight)
    let mainhome = document.getElementsByClassName('mainhome')[0]
    mainhome.style.height = window.innerHeight + 'px'
    let imgs = document.getElementsByClassName('imgs')[0]
    let width = window.innerWidth * 0.85
    imgs.style.width = width + 'px'
    imgs.style.height = width + 'px'
    console.log('宽度' + imgs.style.width)
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../../src/assets/style/varibles.styl'
@import '../../../../src/assets/style/mixins.styl'
.mainhome
  box-sizing: border-box
  .list-wrapper
    box-sizing: border-box
    margin: 10px
    color: #333
    overflow: hidden
    .head-icon
      float: left
      height: 12%
      width: 12%
      margin-right: 6px
      .head-img
        height: 100%
        width: 100%
        border-radius: 50%
    .content
      display: block
      width: 85%
      float: right
      box-sizing: border-box
      .border-bottom
        margin-top: 20px
      .user-info
        height: 12%
        .name
          margin: 6px
          font-size: 16px
          font-weight: bold
        .time
          margin: 8px
          font-size: 10px
          color: #ccc
      .weibo
        overflow: hidden
        .weiboTxt
          font-size: 16px
          line-height: 20px
          width: 100%
          ellipsis()
        .imgs
          .weiboImg
            float: left
            width: 31%
            height: 31%
            box-sizing: border-box
            overflow: hidden
            border-right: 1px solid #fff;
            border-top: 1px solid #fff;
            .txt-img
              width: 100%
              height: 100%
        .weiboMedia
          overflow: hidden
</style>
