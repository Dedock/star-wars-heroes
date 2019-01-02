<template>
  <div class="sidebar"
       :class="{'sidebar--opened': showSidebar}">
    <p class="sidebar__heading">
      Navigation
    </p>
    <div class="sidebar__close" @click="menuToggle">
      ✕
    </div>
    <ul class="sidebar__list">
      <li class="sidebar__item"
          v-for="(item, index) in sidebarList"
          :key="index"
      >
        {{ item }} {{ index + 1 }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    showSidebar: {
      type: Boolean
    },
    menuToggle: {
      type: Function
    }
  },
  data () {
    return {
      sidebarList: new Array(6).fill('Item')
    }
  }
}
</script>

<style lang="scss">
.sidebar {
  position: absolute;
  top: 0;
  left: -250px;
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #DCDCE0;
  transition: transform 0.35s ease-in, opacity 0.35s ease-in;

  &--opened {
    transform: translateX(250px);
    z-index: 2;
  }

  &__close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    display: none;
  }
  @media screen and (max-width: 1024px) {
    &__close {
      display: block;
    }
  }

  &__heading {
    padding: 31px 0;
  }

  &__list {
    list-style: none;
    padding-top: 58px;
  }

  &__item {
    padding-bottom: 32px;
  }
}
</style>
