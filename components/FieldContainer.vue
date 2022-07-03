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

      <div v-if="errors && errors.length" class="field-container__errors">
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
  // margin-bottom: 16px;

  &__inner {
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
    > * + * {
      margin-top: 7px;
    }
  }

  &__error {
    font-size: 12px;
    line-height: 15px;
    color: $color-negative;
  }

  &__inner--required &__title-content::after {
    content: "";
    position: absolute;
    width: 4px;
    margin-left: 2px;
    border-radius: 50%;
    height: 4px;
    background-color: $color-negative;
  }
}
</style>
