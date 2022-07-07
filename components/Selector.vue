<template>
  <div class="selector">
    <input type="checkbox" id="selector-open-button" />
    <div class="selector__container">
      <label for="selector-open-button"></label>
      <div class="selector__wrapper">
        <p class="selector__selected-filter">{{ selector }}</p>
        <img src="~/assets/images/drop_arrow.svg" alt="" />
      </div>
      <div class="selector__options">
        <div
          @click="filterProduct(filter)"
          v-for="(filter, index) in selectorFilters"
          class="selector__option"
          :key="`${filter.id}_${index}`"
        >
          <label for="selector-open-button"></label>
          <div class="selector__title">{{ filter.name }}</div>
        </div>
      </div>
    </div>
    <label for="selector-open-button" class="selector__active-modal"></label>
  </div>
</template>

<script>
export default {
  name: "Selector",

  data: () => ({
    showFitlers: false,

    selector: "По умолчанию",

    selectorFilters: [
      {
        id: 1,
        name: "По убыванию цены",
        filtered: "desc",
      },

      {
        id: 2,
        name: "По возврастанию цены",
        filtered: "asc",
      },

      {
        id: 3,
        name: "По наименованию",
        filtered: "byName",
      },
    ],
  }),

  methods: {
    filterProduct(filter) {
      this.selector = filter.name;

      this.$emit("filter", filter);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/variables";

.selector {
  label {
    cursor: pointer;
  }

  input {
    display: none;
  }

  input[type="checkbox"]:checked ~ &__active-modal {
    display: block;
  }

  input[type="checkbox"]:checked ~ &__container &__options {
    opacity: 1;
    visibility: visible;
  }

  input[type="checkbox"]:checked ~ &__container &__options > &__option {
    pointer-events: visible;
  }

  input[type="checkbox"]:checked ~ &__container &__wrapper {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    @media (max-width: 480px) {
      border-bottom-left-radius: $border-radius;
    }
  }

  &__container {
    position: relative;
    display: block;
    font-size: 12px;
    color: #b4b4b4;
    width: 150px;

    @media (max-width: 480px) {
      width: 100%;
    }
  }

  &__container > label:first-child,
  &__options label {
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
    left: 0;
    top: 0;
  }

  &__active-modal {
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 21;
    cursor: pointer;
  }

  &__wrapper {
    display: flex;
    gap: 5px;
    justify-content: space-between;
    align-items: baseline;
    padding: 14px 17px;
    font-size: 12px;
    color: #b4b4b4;
    background-color: #fffefb;
    box-shadow: 0px 2px 5px $color-shadow;
    border-radius: $border-radius;
  }

  &__options {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    width: 100%;

    border-width: 1px;
    border-radius: $border-radius;
    box-shadow: 0px 2px 5px $color-shadow;
    background-color: #fffefb;
    margin-top: 2px;
    z-index: 22;
    color: #b4b4b4;

    transition: 0.6s;
    max-height: 350px;
    overflow: auto;
    border-top-left-radius: 0;
    border-top-right-radius: 0;

    &::-webkit-scrollbar {
      display: none;
    }

    @media (max-width: 480px) {
      width: 50%;
      position: absolute;
      right: 0;
      border-top-left-radius: 4px;
    }
  }

  &__option {
    padding: 14px 17px;
    z-index: 23;
    transition: 0.2s;
    position: relative;
    pointer-events: none;
    color: #b4b4b4 !important;

    &:hover {
      background-color: #eeeeee;
    }
  }

  &__selected-filter {
    margin: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #b4b4b4 !important;
  }

  &__title {
    font-size: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #b4b4b4 !important;
  }
}
</style>
