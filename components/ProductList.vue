<template>
  <div class="product-list">
    <div class="product-list__inner">
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
};
</script>

<style lang="scss" scoped>
.product-list {
  display: grid;
  // grid-template-areas: "sticky content";
  grid-template-columns: repeat(3, 1fr);
  align-items: start;

  grid-gap: 16px;
}
</style>
