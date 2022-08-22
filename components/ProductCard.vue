<template>
  <div class="product-card">
    <div class="product-card__inner">
      <img class="product-card__image" :src="getImg" alt="" />

      <div class="product-card__content">
        <div class="product-card__name">
          <h2>{{ product.name }}</h2>
        </div>

        <div class="product-card__description">
          <p>
            {{ product.description }}
          </p>
        </div>

        <p class="product-card__price">
          {{ Number(product.price).toLocaleString() }}
          руб.
        </p>
      </div>
    </div>

    <div class="product-card__actions" @click="deleteProduct" />
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

  computed: {
    getImg() {
      return !!this.product.url.match(
        /[-a-zA-Z0-9@:%_+.~#?&/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&/=]*)?/gi
      )
        ? this.product.url
        : "https://sun9-21.userapi.com/impg/0VD7ap-CY1qymA7xeTSdaSS39KWQXe_YDCOEEA/nfMaI86Fx7Q.jpg?size=1080x1022&quality=95&sign=37a35c1ac17dc40dcc744dfc886aa5f3&type=album";
    },
  },

  methods: {
    deleteProduct() {
      this.$emit("deleted", this.product.id);
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
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
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
    font-size: 24px;
    font-weight: 600;
    line-height: 30.17px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  &__content {
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px 16px 24px;
  }

  &__description {
    font-size: 16px;
    line-height: 20.11px;
    max-width: 440px;
    word-wrap: break-word;
    overflow: auto;
    height: 100px;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
}
</style>
