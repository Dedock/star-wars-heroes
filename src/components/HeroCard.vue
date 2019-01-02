<template>
  <div class="hero-card">
    <div class="hero-card__image"></div>
    <div class="hero-card__info">
      <p class="hero-card__name">
        {{ hero.name }}
      </p>
      <p class="hero-card__property paragraph">height: {{ hero.height }}</p>
      <p class="hero-card__property paragraph">mass: {{ hero.mass }}</p>
      <p class="hero-card__property paragraph">side: {{ hero.side }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroCard',
  props: {
    hero: {
      type: Object
    }
  }
}
</script>

<style lang="scss">
.hero-card {
  padding-bottom: 40px;

  &__image {
    width: 300px;
    height: 245.76px;
    background: #121232 url("~@/assets/images/heroImage.png") no-repeat center;
  }

  &__info {
    background: #FFFFFF;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 16px 24px 24px;
  }

  & &__name {
    font-weight: 500;
    line-height: 24px;
    font-size: 14px;
    color: #232735;
    padding-bottom: 10px;
  }

  & &__property {
    font-size: 14px;
    line-height: 24px;
    color: #505565;
  }
}
</style>
