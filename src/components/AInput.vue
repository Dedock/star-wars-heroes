<template>
  <div class="input">
    <input class="input__element"
           placeholder="Search"
           :value="value"
           @change="onChange"
           @input="updateValue"
    />
    <img class="input__icon" src="@/assets/images/search.png"/>
  </div>
</template>

<script>
export default {
  name: 'AInput',
  props: {
    value: {
      type: [String, Number]
    }
  },
  methods: {
    updateValue (e) {
      const value = e.target.value
      this.$emit('input', value)
    },
    onChange (e) {
      const value = e.target.value
      this.$emit('change', value, e)
    }
  }
}
</script>

<style lang="scss">
.input {
  position: relative;
  width: 100%;
  max-width: 448px;

  &__element {
    height: 44px;
    width: 100%;
    background: rgba(18, 18, 50, 0.05);
    border-radius: 4px;
    padding: 0 4px 0 44px;

    &::placeholder {
      color: #121232;
    }
  }

  &__icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
  }
}
</style>
