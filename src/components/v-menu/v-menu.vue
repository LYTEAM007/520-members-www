<template>
  <div class="menu" :style="styleObj">
    <div v-for="item in list" :key="item.title">
      <router-link v-if="item.is_open" :to="{ path: item.path }" class="item">
        <p class="badge-arrow">
          <img src="./img/badge-arrow.png" alt="" />
        </p>
        <p class="logo">
          <img src="./img/kata-logo.png" alt="" />
        </p>
        <div class="text">
          <h3>{{ item.title }}</h3>
          <h4>活动时间：</h4>
          <p>{{ getTime(item) }}</p>
        </div>
        <span class="arrow">&gt;&gt;</span>
      </router-link>
      <a
        v-else
        href="javascript:;"
        :to="{ path: item.path }"
        :class="{ waiting: !item.is_open }"
        class="item"
      >
        <p class="badge-arrow">
          <img src="./img/badge-arrow.png" alt="" />
        </p>
        <p class="logo">
          <img v-if="!item.is_open" src="./img/waiting.png" alt="" />
          <img v-else src="./img/kata-logo.png" alt="" />
        </p>
        <div class="text">
          <h3>{{ item.title }}</h3>
          <h4>活动时间：</h4>
          <p>{{ getTime(item) }}</p>
        </div>
        <span class="arrow">&gt;&gt;</span>
      </a>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { _debounce,dateFormat } from '@/common/js/util'
export default {
  data() {
    return {
      top:100,
      scrollStatus:1
    }
  },
  computed: {
    ...mapGetters([
      'voteActivityTime',
      'guessingActivityTime',
      'doubleActivityTime',
      'giftActivityTime',
    ]),
    list() {
      return [
        {
          path: '/vote',
          title: '奔赴卡塔尔',
          start_time: this.voteActivityTime.start_time,
          end_time: this.voteActivityTime.end_time,
          is_open: this.voteActivityTime.is_open === 1,
        },
        {
          path: '/guessing',
          title: '世界杯竞猜',
          start_time: this.guessingActivityTime.start_time,
          end_time: this.guessingActivityTime.end_time,
          is_open: this.guessingActivityTime.is_open === 1,
        },
        {
          path: '/gift',
          title: '世界杯礼遇挚献',
          start_time: this.giftActivityTime.start_time,
          end_time: this.giftActivityTime.end_time,
          is_open: this.giftActivityTime.is_open === 1,
        },
        {
          path: '/doulbeEggs',
          title: '双旦福利来袭',
          start_time: this.doubleActivityTime.start_time,
          end_time: this.doubleActivityTime.end_time,
          is_open: this.doubleActivityTime.is_open === 1,
        },
      ]
    },
    styleObj() {
      return {
        top: `${this.top}px`,
        position: this.scrollStatus == 1 ? 'fixed' : 'absolute',
      }
    },
  },
  mounted(){
    // this.receiveIframe()
  },
  methods: {
    dateFormat,
    getTime(item) {
      const { start_time, end_time } = item
      return `${this.removeTime(start_time)}至${this.removeTime(end_time)}`
    },
    removeTime(timeStr) {
      if (timeStr) {
        timeStr = dateFormat('YYYY年mm月dd日', timeStr)
        timeStr = timeStr.split(' ')[0]
      }
      return timeStr
    },

    receiveIframe() {
      let _ = this
      window.addEventListener(
        'message',
        function (e) {
          _.getTop(e)
        },
        false
      )
    },
    getTop: _debounce(function (e) {
      if (e.data && e.data.type === 'scroll') {
        this.top = Number(e.data.scrollTop) + 30
        this.scrollStatus = 2
      } else {
        this.scrollStatus = 1
      }
    }, 500),
  },
}
</script>
<style lang="stylus" src="./v-menu.styl" scoped></style>