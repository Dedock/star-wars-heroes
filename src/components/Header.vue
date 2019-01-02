<template>
  <div class="header">
    <img class="header__toggle" src="@/assets/images/menuIcon.png" @click="menuToggle"/>
    <p class="header__heading">Header</p>
  </div>
</template>

<script>
export default {
  name: 'AHeader',
  props: {
    menuToggle: {
      type: Function
    }
  }
}
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0 100px;
  width: 100%;
  height: 85px;
  left: 250px;
  background: rgba(18, 18, 50, 0.2);

  &__heading {

  }
  &__toggle {
    display: none;
    cursor: pointer;
    padding-right: 10px;
  }
  @media screen and (max-width: 1024px) {
    &__toggle {
      display: block;
    }
  }
}
</style>
