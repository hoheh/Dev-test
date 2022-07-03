<template>
  <div class="form-constructor">
    <form class="form-constructor__inner" @submit.prevent="formSubmit">
      <field-container
        class="form-constructor__field"
        v-for="field in fields"
        :key="field.id"
        :is-required="field.required"
      >
        <component
          v-bind="getFieldAttrs(field)"
          @input="setFieldValue(field, $event)"
          :type="field.type"
          :placeholder="field.placeholder"
          :is="getFieldComponent(field.field_type)"
        />
      </field-container>
    </form>
  </div>
</template>

<script>
import FieldContainer from "~/components/FieldContainer.vue";
import FieldInput from "~/components/FieldInput.vue";
import FieldTextarea from "~/components/FieldTextarea.vue";

export default {
  name: "FormConstructor",

  components: { FieldContainer, FieldInput, FieldTextarea },

  props: {
    fields: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    formSubmit() {
      console.log("Submitting form");
    },

    getFieldComponent(type) {
      return {
        input: "FieldInput",
        textarea: "FieldTextarea",
      }[type];
    },
  },
};
</script>

<style lang="scss" scoped>
.form-constructor {
  &__inner {
    width: 100%;
  }
}
</style>
