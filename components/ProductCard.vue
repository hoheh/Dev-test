<template>
  <div class="product-card">
    <div class="product-card__inner">
      <div class="product-card__image">
        <img
          src="https://sun9-21.userapi.com/impg/0VD7ap-CY1qymA7xeTSdaSS39KWQXe_YDCOEEA/nfMaI86Fx7Q.jpg?size=1080x1022&quality=95&sign=37a35c1ac17dc40dcc744dfc886aa5f3&type=album"
          alt=""
        />
      </div>

      <div class="product-card__content">
        <div class="product-card__name">
          <h2>Наименование товара</h2>
        </div>

        <div class="product-card__description">
          <p>
            Довольно-таки интересное описание товара в несколько строк.
            Довольно-таки интересное описание товара в несколько строк
          </p>
        </div>

        <div class="product-card__price">12000 руб.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
};
</script>

<style lang="scss" scoped>
.product-card {
  &__inner {
    overflow: hidden;
    background-color: #fffefb;
    height: 423px;
    width: 332px;
    border-radius: 4px;
  }

  &__name {
    h2 {
      font-size: 20px;
      line-height: 25.14px;
      font-weight: 600;
    }
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
    padding: 16px;
  }

  &__description {
    font-size: 16px;
    line-height: 20.11px;
  }

  &__image {
    img {
      max-height: 200px;
      width: 100%;
    }
  }
}
</style>
