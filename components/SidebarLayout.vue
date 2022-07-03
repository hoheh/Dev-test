<template>
  <div class="sidebar-layout">
    <div class="sidebar-layout__sticky">
      <div class="sidebar-layout__wrapper">
        <slot name="form" />

        <div class="sidebar-layout__actions">
          <slot name="button">
            <button disabled class="button button--positive">
              Добавить товар
            </button>
          </slot>
        </div>
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

  props: {
    fields: { type: Array, default: () => [] },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/variables";

.sidebar-layout {
  display: grid;
  grid-template-areas: "sticky content";
  grid-template-columns: 332px 1fr;
  align-items: start;

  gap: 20px 40px;

  &__content {
    grid-area: content;
    min-height: 440px;
  }

  &__wrapper {
    // grid-area: wrapper;
    background-color: #fffefb;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
      0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: $border-radius;
    padding: 24px;
    display: flex;
    flex-direction: column;
    min-height: 440px;

    // @media (max-width: 870px) {
    //   position: sticky;
    //   top: 80px;
    //   z-index: 1;

    //   background-color: #fff;
    // }
  }

  &__sticky {
    grid-area: sticky;

    position: sticky;
    top: 110px;

    > * + * {
      margin-top: 20px;
    }

    @media (max-width: 870px) {
      display: contents;

      > * + * {
        margin-top: 0;
      }
    }
  }
}
</style>
