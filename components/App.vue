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
            <!-- <transition-group
              name="products"
              class="product-list__wrapper"
              tag="div"
            > -->
            <div class="product-list__wrapper">
              <product-card
                v-for="(product, index) in products"
                :key="index"
                :product="product"
                class="product-list__item"
                @deleted="handleDelete"
              />
            </div>
            <!-- </transition-group> -->
          </div>
          <div v-else class="product-list__out">
            <h2 class="product-list__out-title">Товары отсутствуют</h2>
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
    products(newValue, oldValue) {
      sessionStorage?.setItem("products", JSON.stringify(this.products));

      this.$notification.error({
        message: "asdasdasd",
      });
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
      const { price, ...other } = data;

      this.products = [
        ...this.products,
        {
          id: ++this.products.length,
          price: Number(price.split(" ").join("")),
          ...other,
        },
      ];
    },

    handleDelete(productId) {
      this.products = this.products.filter((product) => {
        return product.id !== productId;
      });
    },

    filterProducts(filter) {
      switch (filter.filtered) {
        case "desc":
          this.products = this.products.sort((a, b) => b.price - a.price);
          break;
        case "asc":
          this.products = this.products.sort((a, b) => a.price - b.price);
          break;
        case "byName":
          this.products = this.products.sort(
            (a, b) => b.name.charCodeAt(0) - a.name.charCodeAt(0)
          );
          break;
      }
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
