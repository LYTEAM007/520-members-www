<template>
  <div id="app">
    <vue-login-tool  v-if="isShowComponents" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      isShowComponents: true,
      userList: [],
    }
  },
  created() {
    if (process.env.VUE_APP_TITLE === 'PROD') {
      this.isShowComponents = false
    }
  },
  mounted() {
    // this.$store.dispatch('getActivityTime')
  },
  methods: {},
  watch: {},
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 1920px;
  min-width: 1200px;
  font-size: 18px;
  color: #fff;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}
</style>
