<template>
  <div class="field-input">
    <input
      v-bind="$attrs"
      :type="type"
      :value="value"
      :class="modifiers"
      class="input field-input__input"
      v-on="listeners"
    />
  </div>
</template>

<script>
export default {
  name: "FieldInput",

  props: {
    type: {
      type: String,
      default: "text",
    },
    value: { type: [Number, String], default: "" },
    isError: { type: Boolean, default: false },
  },

  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: (event) => {
          this.$emit("input", event.target.value);
        },
      };
    },

    modifiers() {
      return {
        "field-input__input--error": this.isError,
      };
    },
  },
};
</script>

<style scoped lang="scss">
@import "~/assets/styles/variables";

.field-input {
  &__input {
    margin-bottom: 14px;

    &--error {
      border: 1px solid $color-negative;
    }
  }
}
</style>
