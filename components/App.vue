<template>
  <div class="app">
    <div class="app__inner">
      <div class="app__header">
        <app-header />
      </div>

      <sidebar-layout class="app__main">
        <template #form>
          <form-constructor @form:submit="submitForm" />
        </template>
        <template #content>
          <div class="product-list">
            <div class="product-list__wrapper">
              <product-card
                v-for="product in products"
                :key="product.id"
                :product="product"
                class="product-list__item"
              />
            </div>
          </div>
        </template>
      </sidebar-layout>
    </div>
  </div>
</template>

<script>
import SidebarLayout from "~/components/SidebarLayout.vue";
import AppHeader from "~/components/AppHeader.vue";

export default {
  name: "App",

  components: { SidebarLayout, AppHeader },

  data: () => ({
    products: [
      {
        id: 1,
        name: "Наименование товара",
        description:
          "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
        price: 10000,
        url: "https://sun9-21.userapi.com/impg/0VD7ap-CY1qymA7xeTSdaSS39KWQXe_YDCOEEA/nfMaI86Fx7Q.jpg?size=1080x1022&quality=95&sign=37a35c1ac17dc40dcc744dfc886aa5f3&type=album",
      },
      {
        id: 2,
        name: "Наименование товара",
        description:
          "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
        price: 10000,
        url: "https://sun9-21.userapi.com/impg/0VD7ap-CY1qymA7xeTSdaSS39KWQXe_YDCOEEA/nfMaI86Fx7Q.jpg?size=1080x1022&quality=95&sign=37a35c1ac17dc40dcc744dfc886aa5f3&type=album",
      },
      {
        id: 3,
        name: "Наименование товара",
        description:
          "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
        price: 10000,
        url: "https://sun9-21.userapi.com/impg/0VD7ap-CY1qymA7xeTSdaSS39KWQXe_YDCOEEA/nfMaI86Fx7Q.jpg?size=1080x1022&quality=95&sign=37a35c1ac17dc40dcc744dfc886aa5f3&type=album",
      },

      {
        id: 4,
        name: "Наименование товара",
        description:
          "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
        price: 10000,
        url: "https://sun9-21.userapi.com/impg/0VD7ap-CY1qymA7xeTSdaSS39KWQXe_YDCOEEA/nfMaI86Fx7Q.jpg?size=1080x1022&quality=95&sign=37a35c1ac17dc40dcc744dfc886aa5f3&type=album",
      },

      {
        id: 5,
        name: "Наименование товара",
        description:
          "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
        price: 10000,
        url: "https://sun9-21.userapi.com/impg/0VD7ap-CY1qymA7xeTSdaSS39KWQXe_YDCOEEA/nfMaI86Fx7Q.jpg?size=1080x1022&quality=95&sign=37a35c1ac17dc40dcc744dfc886aa5f3&type=album",
      },
    ],
  }),

  methods: {
    submitForm(target) {
      console.log("Submitting form", target);
    },
  },
};
</script>

<style lang="scss" scoped>
.app {
  &__inner {
    padding: 32px;
  }

  &__main {
    margin-top: 16px;
  }

  .product-list {
    &__wrapper {
      display: grid;
      gap: 16px;

      @media (min-width: 480px) {
        grid-template-columns: repeat(auto-fit, minmax(335px, 1fr));
      }
    }
  }
}
</style>
