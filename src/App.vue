<template>
  <div id="app">
    <div class="main-wrapper">
      <sidebar :showSidebar="showSidebar"
               :menuToggle="toggleSidebar"/>
      <div class="container">
        <a-header :menuToggle="toggleSidebar"/>
        <home></home>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import AHeader from './components/Header'
import Home from './views/Home'
import throttle from 'lodash.throttle'

export default {
  components: { Home, AHeader, Sidebar },
  data () {
    return {
      windowWidth: '',
      showSidebar: true
    }
  },
  methods: {
    checkWindowDimensions () {
      this.windowWidth =
        document.documentElement.clientWidth ||
        window.innerWidth ||
        document.body.clientWidth

      this.showSidebar = this.windowWidth > 1024
    },
    toggleSidebar () {
      this.showSidebar = !this.showSidebar
    }
  },
  beforeMount () {
    this.throttledCheckWindowWidth = throttle(this.checkWindowDimensions, 16)
    this.throttledCheckWindowWidth()
    window.addEventListener('resize', this.checkWindowDimensions, true)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.checkWindowDimensions)
  }
}
</script>

<style lang="scss">
  @import "assets/scss/main";

  .main-wrapper {
    position: relative;
  }

  .container {
    transition: transform 0.35s ease-in, opacity 0.35s ease-in;
    transform: translateX(250px);
    width: calc(100% - 250px);
  }

  @media screen and (max-width: 1024px) {
    .container {
      transform: none;
      width: 100%;
    }
  }
</style>
