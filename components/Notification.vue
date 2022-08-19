<template>
  <div id="notification-group" class="notification">
    <transition-group name="fade" tag="div" id="notification-wrapper">
      <div
        v-for="notice in notices"
        @click.stop="close(notice.id)"
        :key="`${notice.id}`"
        class="notification__inner"
        :class="notice.class"
        :style="notice.style"
      >
        <svg
          version="1.1"
          viewBox="0 0 20 20"
          class="notification__icon svg-icon svg-fill"
        >
          <path
            pid="0"
            d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm-1-7L7 9l-1 2 3 3 6-6-1-2-5 5z"
          ></path>
        </svg>
        {{ notice.message }}
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
#notification-group {
  position: fixed;
  width: 300px;
  right: 0;
  bottom: 0;
}

.notification {
  &__icon {
    display: block;
    width: 20px;
    height: 20px;
    fill: #7bae73;
  }

  &__inner {
    display: flex;
    gap: 10px;
    align-items: center;
    width: 300px;
    height: 62px;
    padding: 20px;
    z-index: 10000;
    margin: 10px 0;
    font-size: 16px;
    border: 1px dotted transparent;
    border-left: 5px solid transparent;

    &--success {
      border-color: #7bae73;
      color: #7bae73;
      background-color: #f9ffea;
    }

    &--error {
      border-color: #ff8484;
      color: #ff8484;
      background-color: #f9ffea;
    }

    &.fade-enter-active,
    &.fade-leave-active {
      transition: opacity 0.5s;
    }
    &.fade-enter,
    &.fade-leave-to {
      opacity: 0;
    }
  }
}
</style>
