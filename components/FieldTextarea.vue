<template>
  <div class="field-textarea">
    <div :class="modifiers" class="field-textarea__inner">
      <textarea
        v-bind="$attrs"
        :value="value"
        class="textarea field-textarea__textarea"
        v-on="listeners"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "FieldTextarea",

  props: {
    value: {
      type: String,
      default: "",
    },
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
        "field-textarea__inner--error": this.isError,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/variables";

.field-textarea {
  &__textarea {
    &:focus,
    &:hover {
      border-color: $color-positive;
    }

    &--error {
      border-color: 1px solid $color-negative;
    }
  }
}
</style>
