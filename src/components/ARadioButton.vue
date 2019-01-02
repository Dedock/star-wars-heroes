<template>
  <div class="radio-button" @click="check">
    <div class="radio-button__circle"
         :class="{'radio-button__circle--selected': value === initialValue}"></div>
    <p class="radio-button__title">
      {{ title }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ARadioButton',
  props: {
    value: {
      type: String
    },
    initialValue: {
      type: String
    },
    title: {
      type: String
    }
  },
  methods: {
    check () {
      this.$emit('input', this.initialValue)
    }
  }
}
</script>

<style lang="scss">
.radio-button {
  display: flex;
  align-items: center;
  padding-right: 30px;

  &__circle {
    width: 16px;
    height: 16px;
    left: 425px;
    border: 1px solid #000000;
    border-radius: 50%;
    box-sizing: border-box;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);

    &--selected {
      background-color: #000000;
    }
  }

  &__title {
    padding-left: 10px;
    line-height: 24px;
    font-size: 14px;
    color: #121232;
  }
}
</style>
