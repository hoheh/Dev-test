<template>
  <div class="selector">
    <p class="selector__name">
      По умолчанию
    </p>
    <img src="~/assets/images/drop_arrow.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "Selector",

  data: () => ({
    selectorValue: {},
  }),
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/variables";

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
</style>
