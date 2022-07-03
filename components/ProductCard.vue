<template>
  <div class="product-card">
    <div class="product-card__inner">
      <img class="product-card__image" :src="product.url" alt="" />

      <div class="product-card__content">
        <div class="product-card__name">
          <h2>{{ product.name }}</h2>
        </div>

        <div class="product-card__description">
          <p>
            {{ product.description }}
          </p>
        </div>

        <div class="product-card__price">
          {{ new Intl.NumberFormat().format(product.price) }} руб.
        </div>
      </div>
    </div>

    <div class="product-card__actions" />
  </div>
</template>

<script>
export default {
  name: "ProductCard",

  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  position: relative;

  &__inner {
    overflow: hidden;
    background-color: #fffefb;
    width: 100%;
    border-radius: 4px;
  }

  &__button {
    width: 32px;
    height: 32px;

    * {
      padding: 8px 9px;
    }
  }

  &__name > * {
    font-size: 20px;
    line-height: 25.14px;
    font-weight: 600;
  }

  &:hover {
    .product-card__actions {
      transition: 0.2s;
      opacity: 1;
      visibility: visible;
    }
  }

  &__actions {
    transition: 0.2s;
    opacity: 0;
    visibility: hidden;
    content: "";
    position: absolute;
    cursor: pointer;
    width: 32px;
    height: 32px;
    transform: translateX(50%) translateY(-50%);
    right: 7px;
    top: 7px;
    background-color: #ff8484;
    background-image: url("~/assets/images/delete.svg");
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;
  }

  &__price {
    padding-top: 16px;
    font-size: 24px;
    font-weight: 600;
    line-height: 30.17px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px 16px 24px;
  }

  &__description {
    font-size: 16px;
    line-height: 20.11px;
    margin-bottom: 32px;
  }

  &__image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
}
</style>
