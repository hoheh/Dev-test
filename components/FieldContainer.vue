<template>
  <div class="field-container">
    <div
      class="field-container__inner"
      :class="{ 'field-container__inner--required': isRequired }"
    >
      <div v-if="title || $slots.title" class="field-container__title">
        <slot name="title">
          <div class="field-container__title-content" v-text="title" />
        </slot>
      </div>

      <div class="field-container__content">
        <slot />
      </div>

      <div v-show="errors && errors.length" class="field-container__errors">
        <div
          v-for="error in errors"
          :key="error"
          class="field-container__error"
          v-text="error"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FieldContainer",

  props: {
    isRequired: { type: Boolean, default: false },
    errors: { type: Array, default: null },
    title: { type: String, default: null },
  },
};
</script>

<style scoped lang="scss">
@import "~/assets/styles/variables";

.field-container {
  &__inner {
    position: relative;
    > * + * {
      margin-top: 4px;
    }
  }

  &__title {
    font-size: 10px;
    line-height: 12.57px;
    letter-spacing: -2%;
    display: flex;
    color: #49485e;

    > * + * {
      margin-left: 10px;
    }
  }

  &__errors {
    margin-top: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  &__error {
    font-size: 8px;
    line-height: 10.06px;
    color: $color-negative;
  }

  &__inner--required &__title-content::after {
    content: "";
    position: absolute;
    width: 5px;
    margin-left: 2px;
    border-radius: 50%;
    height: 5px;
    background-color: $color-negative;
  }
}
</style>
