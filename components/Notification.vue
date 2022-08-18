<template>
  <div class="notification">
    <transition-group name="fade" tag="div">
      <div
        v-for="(item, idx) in notices"
        :key="item.message"
        class="notification__item"
        :style="item.style"
      >
        <span class="notification__close" @click.stop="close(idx)">
          &#10006;
        </span>
        {{ item.message }}
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Notification",

  methods: {
    close(idx) {
      this.$notification.close(idx);
    },
  },
};
</script>

<style lang="scss" scoped>
.notification {
  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 10000;
    border-radius: 4px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);

    &.fade-enter-active,
    &.fade-leave-active {
      transition: opacity 0.5s;
    }
    &.fade-enter,
    &.fade-leave-to {
      opacity: 0;
    }
  }

  &__close {
    position: absolute;
    right: -7px;
    top: -7px;
    width: 15px;
    height: 15px;
    line-height: 15px;
    text-align: center;
    border-width: 2px;
    border-style: solid;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease-in;
    &:hover {
      right: -10px;
      top: -10px;
      width: 20px;
      height: 20px;
      line-height: 20px;
    }
  }
}
</style>
