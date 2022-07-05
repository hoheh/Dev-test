<template>
  <div class="header">
    <div class="header__title">
      <h1 class="">Добавление товара</h1>
    </div>
    <div class="header__filter">
      <selector class="header__selector" v-on="$listeners"/>
    </div>
  </div>
</template>

<script>
import Selector from "~/components/Selector.vue";

export default {
  name: "AppHeader",

  components: { Selector },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__title > * {
    font-size: 28px;
    font-weight: 600;
    line-height: 35.2px;
  }

  @media (max-width: 480px) {
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .header__title > * {
      text-align: center;
      font-size: 24px;
    }

    .header__filter,
    & > * {
      width: 100%;
    }
  }
}
</style>
