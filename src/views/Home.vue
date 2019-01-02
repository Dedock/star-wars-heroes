<template>
  <div class="wrapper">
    <a-input v-model="searchValue"/>
    <div class="types-wrapper">
      <a-radio-button v-for="(type, index) in sideTypes"
                      v-model="currentSideType"
                      :title="type.title"
                      :initialValue="type.value"
                      :key="index"
      />
    </div>
    <div class="loader" v-if="loading">
      <img src="@/assets/images/loader.gif"/>
    </div>
    <div class="cards-wrapper" v-else-if="heroes.length">
      <hero-card v-for="hero in heroes"
                 :hero="hero"
                 :key="hero.name"
      />
    </div>
    <div class="no-result-placeholder" v-else>
      <img class="no-result-placeholder__image" src="@/assets/images/placeholderImage.png"/>
      <p class="paragraph no-result-placeholder__text">
        Sorry, no results. Try another search
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import AInput from '../components/AInput'
import ARadioButton from '../components/ARadioButton'
import HeroCard from '../components/HeroCard'
import { mapActions, mapState } from 'vuex'
import debounce from 'lodash.debounce'

export default {
  name: 'home',
  components: { HeroCard, ARadioButton, AInput },
  data () {
    return {
      loading: false,
      currentSideType: '',
      searchValue: '',
      sideTypes: {
        all: {
          value: '',
          title: 'All'
        },
        dark: {
          value: 'dark',
          title: 'Dark'
        },
        light: {
          value: 'light',
          title: 'Light'
        }
      }
    }
  },
  computed: {
    ...mapState({
      heroes: state => state.heroes.heroes
    })
  },
  methods: {
    ...mapActions({
      getHeroes: 'heroes/getHeroes'
    })
  },
  watch: {
    async currentSideType (nextValue) {
      this.loading = true
      await this.getHeroes({ side: nextValue, search: this.searchValue })
      this.loading = false
    },
    searchValue: debounce(async function (nextValue) {
      this.loading = true
      await this.getHeroes({
        side: this.currentSideType, search: nextValue
      })
      this.loading = false
    }, 250)
  },
  async mounted () {
    this.loading = true
    await this.getHeroes({ side: this.currentSideType, search: this.searchValue })
    this.loading = false
  }
}
</script>

<style lang="scss">
  .wrapper {
    padding: 45px 110px 135px 100px;
  }

  .types-wrapper {
    display: flex;
    padding: 30px 0;
  }

  .loader {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cards-wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .no-result-placeholder {
    padding: 75px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(243, 243, 245, 0.5);

    &__text {
      padding-top: 73px;
      font-size: 14px;
    }
  }
</style>
