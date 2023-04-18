<template>
  <div class="dialog-wrap">
    <div class="dialog-cover" v-if="dialogVisible" @click="close"></div>

    <transition name="opacity">
      <div :style="styleObj" class="dialog-content" v-show="dialogVisible">
        <p v-if="isShowCloseBtn" class="dialog-close" @click="close"><b>&times;</b></p>
        <slot>empty</slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false,
    },
    isShowCloseBtn: {
      type: Boolean,
      default: true,
    },
    scrollStatus: {
      type: Number,
      default: 1,
    },
    width: {
      type: Number,
      default: 906,
    },
    height: {
      type: Number,
      default: 686,
    },
    top: {
      type: Number,
      default: 100,
    },
  },
  data() {
    return {}
  },
  created() {},
  computed: {
    styleObj() {
      return {
        top: `${this.top}px`,
        position: this.scrollStatus == 1 ? 'fixed' : 'absolute',
      }
    },
  },
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="stylus" src="./dialog.styl" scoped></style>
