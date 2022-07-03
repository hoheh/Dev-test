<template>
  <div class="sidebar-layout">
    <div class="sidebar-layout__sticky">
      <div class="sidebar-layout__wrapper">
        <slot name="form" />
      </div>
    </div>

    <div class="sidebar-layout__content">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarLayout",
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/variables";

.sidebar-layout {
  display: grid;
  align-items: start;

  gap: 16px;

  @media (min-width: 480px) {
    grid-template-columns: 332px 1fr;
  }

  @media (max-width: 480px) {
    grid-template-rows: min-content 1fr;
  }

  &__content {
    min-height: 440px;
  }

  &__wrapper {
    background-color: #fffefb;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
      0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: $border-radius;
    padding: 24px;
    display: flex;
    flex-direction: column;
    min-height: 440px;
  }

  &__sticky {
    position: sticky;
    top: 24px;

    @media (max-width: 480px) {
      display: contents;
    }
  }
}
</style>
