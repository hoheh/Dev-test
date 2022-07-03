<template>
  <div class="app">
    <div class="app__inner">
      <div class="app__header">
        <div class="app__header-title">
          <h1 class="">Добавление товара</h1>
        </div>
        <div class="app__header-filter">
          <div class="selector">
            <p class="selector__name">По умолчанию</p>
            <img src="~/assets/images/drop_arrow.svg" alt="" />
          </div>
        </div>
      </div>

      <sidebar-layout class="app__main">
        <template #form> </template>
        <template #content>
          <ProductList />
        </template>
      </sidebar-layout>
    </div>
  </div>
</template>

<script>
import SidebarLayout from "~/components/SidebarLayout.vue";

export default {
  name: "App",

  components: { SidebarLayout },
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/variables";

.app {
  &__inner {
    padding: 32px;
  }

  &__main {
    margin-top: 16px;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-title > * {
      font-size: 28px;
      font-weight: 600;
      line-height: 35.2px;
    }

    &-filter {
      .selector {
        display: flex;
        align-items: baseline;
        gap: 5px;
        border-radius: $border-radius;
        font-size: 12px;
        padding: 14px 17px;
        background-color: #fffefb;
        box-shadow: 0px 2px 5px $color-shadow;

        &__name {
          color: #b4b4b4;
        }
      }
    }
  }
}
</style>
