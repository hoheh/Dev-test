<template>
  <div class="form-constructor">
    <form class="form-constructor__inner" @submit.prevent="formSubmit">
      <field-container
        :title="'Наименование товара'"
        class="form-constructor__field"
        :is-required="true"
      >
        <field-input
          v-model="formData.productName"
          :type="'text'"
          placeholder="Наименование товара"
        />
      </field-container>

      <field-container
        :title="'Описание товара'"
        class="form-constructor__field"
      >
        <field-textarea
          v-model="formData.productDesc"
          :type="'text'"
          placeholder="Введите описание товара"
        />
      </field-container>

      <field-container
        :title="'Ссылка на изображение товара'"
        class="form-constructor__field"
        :is-required="true"
      >
        <field-input
          v-model="formData.productUrl"
          :type="'url'"
          placeholder="Введите ссылку"
        />
      </field-container>

      <field-container
        :title="'Цена товара'"
        class="form-constructor__field"
        :is-required="true"
      >
        <field-input
          v-model="formData.productPrice"
          :type="'text'"
          placeholder="Введите цену"
        />
      </field-container>
    </form>

    <div class="form-constructor__actions">
      <button class="button button--positive">
        Добавить товар
      </button>
    </div>
  </div>
</template>

<script>
import FieldContainer from "~/components/FieldContainer.vue";
import FieldInput from "~/components/FieldInput.vue";
import FieldTextarea from "~/components/FieldTextarea.vue";

export default {
  name: "FormConstructor",

  components: { FieldContainer, FieldInput, FieldTextarea },

  data: () => ({
    formData: {
      productName: "",
      productDesc: "",
      productUrl: "",
      productPrice: "",
    },
  }),

  methods: {
    formSubmit(target) {},

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

  &__actions {
    padding-top: 24px;
  }

  &__field:not(:last-child) {
    padding-bottom: 16px;
  }
}
</style>
