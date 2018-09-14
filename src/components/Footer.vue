<template>
  <div class="footer">
    <div class="nav">
      <div class="home" @click="handleClick('0')">
        <div class="iconfont foot active">&#xe630;</div>
      </div>
      <div class="message" @click="handleClick('1')">
        <div class="iconfont foot">&#xe631;</div>
      </div>
      <div class="hot" @click="handleClick('2')">
        <div class="iconfont foot">&#xe6b6;</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
    }
  },
  watch: {
    activeChange () {
      this.changeNav(this.activeChange)
      //  监听home.vue传递过来的loop值
    }
  },
  methods: {
    changeNav (i) {
      let act = document.getElementsByClassName('active')[0]
      act.classList.remove('active')
      let ad = document.getElementsByClassName('foot')
      ad[i].classList.add('active')
      //  根据loop值设置nav栏的显示状态
    },
    handleClick (mes) {
      //  console.log(mes)
      //  向父级传递nav栏点击事件
    }
  },
  mounted () {
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
  color: #ccc
.active
  color: $bgColor
</style>
