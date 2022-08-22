<template>
  <div class="form-constructor">
    <form class="form-constructor__inner" @submit.prevent="formSubmit">
      <field-container
        :title="'Наименование товара'"
        :errors="getErrors(formData.name)"
        class="form-constructor__field"
        :is-required="true"
      >
        <field-input
          v-model="formData.name"
          :is-error="!!getErrors(formData.name).length"
          :type="'text'"
          :placeholder="'Введите наименование товара'"
        />
      </field-container>

      <field-container
        :title="'Описание товара'"
        class="form-constructor__field"
        :is-required="false"
      >
        <field-textarea
          v-model="formData.description"
          :type="'text'"
          :placeholder="'Введите описание товара'"
        />
      </field-container>

      <field-container
        :title="'Ссылка на изображение товара'"
        class="form-constructor__field"
        :errors="getErrors(formData.url)"
        :is-required="true"
      >
        <field-input
          v-model="formData.url"
          :is-error="!!getErrors(formData.url).length"
          :type="'text'"
          :placeholder="'Введите ссылку'"
        />
      </field-container>

      <field-container
        :title="'Цена товара'"
        class="form-constructor__field"
        :errors="getErrors(formData.price)"
        :is-required="true"
      >
        <field-input
          v-model="modelPrice"
          :type="changePrice ? 'number' : 'text'"
          :is-error="!!getErrors(formData.price).length"
          placeholder="Введите цену"
          @blur="changePrice = false"
          @focus="changePrice = true"
        />
      </field-container>

      <div class="form-constructor__actions">
        <input
          type="submit"
          :disabled="disabledStatus"
          class="button button--positive"
          value="Добавить товар"
        />
      </div>
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

  data: () => ({
    formData: {
      name: null,
      description: null,
      url: null,
      price: null,
    },

    changePrice: false,
  }),

  computed: {
    disabledStatus() {
      return !Object.keys(this.formData)
        .filter((key) => {
          return ["url", "name", "price"].includes(key);
        })
        .every((field) => {
          return this.formData[field] !== null && this.formData[field] !== "";
        });
    },

    modelPrice: {
      get() {
        return this.changePrice
          ? this.formData.price
          : this.formData.price
              ?.replace(/[^\d]/g, "")
              .replace(/\B(?=(?:\d{3})+(?!\d))/g, " ");
      },

      set(value) {
        this.formData.price = value.replace(/\s/g, "");
      },
    },
  },

  methods: {
    formSubmit() {
      this.$emit("form:submit", this.formData);

      this.formData = {
        name: null,
        description: null,
        url: null,
        price: null,
      };
    },

    getErrors(value) {
      return value === "" ? ["Поле является обязательным"] : [];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/variables";

.form-constructor {
  &__inner {
    width: 100%;
  }

  &__actions {
    padding-top: 10px;
  }

  &__field:not(:nth-last-child(2)) {
    padding-bottom: 2px;
  }
}
</style>
