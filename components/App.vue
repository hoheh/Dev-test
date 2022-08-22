<template>
  <div class="app">
    <div class="app__inner">
      <div class="app__header">
        <app-header @filter="filterProducts" />
      </div>

      <sidebar-layout class="app__main">
        <template #form>
          <form-constructor @form:submit="submitForm" />
        </template>
        <template #content>
          <div v-if="!!products.length" class="product-list">
            <transition-group
              name="product-list"
              class="product-list__wrapper"
              tag="div"
            >
              <product-card
                v-for="product in products"
                :key="product.id"
                :product="product"
                class="product-list__item"
                @deleted="handleDelete"
              />
            </transition-group>
          </div>
          <div v-else class="product-list__out">
            <h2 class="product-list__out-title">
              Товары отсутствуют
            </h2>
          </div>
        </template>
      </sidebar-layout>
    </div>
  </div>
</template>

<script>
import SidebarLayout from "~/components/SidebarLayout.vue";
import AppHeader from "~/components/AppHeader.vue";
import FormConstructor from "~/components/FormConstructor.vue";
import ProductCard from "~/components/ProductCard.vue";

export default {
  name: "App",

  components: { SidebarLayout, AppHeader, FormConstructor, ProductCard },

  data: () => ({
    products: [],
  }),

  watch: {
    products() {
      sessionStorage.setItem("products", JSON.stringify(this.products));
    },
  },

  created() {
    if (typeof window !== "undefined") {
      const productsData = sessionStorage.getItem("products");

      if (!!productsData) {
        this.products = JSON.parse(productsData);
      }
    }
  },

  methods: {
    submitForm(data) {
      this.products.push({
        id: Date.now(),
        ...data,
      });

      this.$notification.success({
        message: "Товар добавлен",
      });
    },

    handleDelete(productId) {
      this.products = this.products.filter((product) => {
        return product.id !== productId;
      });
    },

    filterProducts(filter) {
      this.products = this.products.sort(filter.handler);
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

  .product-list-enter-active,
  .product-list-leave-active {
    transition: all 2s;
  }
  .product-list-enter,
  .product-list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
  .product-list-move {
    transition: transform 2s;
  }

  .product-list {
    &__wrapper {
      display: grid;
      gap: 16px;

      @media (max-width: 480px) {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      }

      @media (min-width: 480px) {
        grid-template-columns: repeat(auto-fill, minmax(355px, 1fr));
      }
    }

    &__out-title {
      color: #aeaeae;
      font-size: 26px;
      line-height: 30px;
      font-weight: 600;
      text-align: center;
    }
  }
}
</style>
