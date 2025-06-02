<script setup lang="ts">
  import { ref } from 'vue'
  import NavItem from './NavItem.vue'

  const navItems = [
    { route: '/', name: 'Home' }, 
    { route: '/tech', name: 'Tech' }, 
    { route: '/coaching', name: 'Coaching' }
  ]

  const menuOpen = ref(false)

  function toggleMenu() {
    menuOpen.value = !menuOpen.value
  }

  // Function to close the menu when a link is clicked
  function closeMenu() {
    menuOpen.value = false
  }
</script>

<template>
  <nav class="nav">
    <div class="logo"></div>

    <button class="hamburger" @click="toggleMenu" :class="{ open: menuOpen }">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <div class="nav-links" :class="{ open: menuOpen }">
      <NavItem
        v-for="item in navItems"
        :key="item.route"
        :name="item.name"
        :route="item.route"
        @click="closeMenu"
      />
    </div>
  </nav>
</template>

<style scoped lang="scss">
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: clamp(1rem, 3vw, 2rem);
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  background-color: white;
  border-bottom: 1px solid #eee;
  position: relative;

  .logo {
    font-weight: bold;
    font-size: clamp(1.25rem, 2vw, 1.8rem);
  }

  .hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  position: relative;
  z-index: 100;

  span {
    position: absolute;
    height: 2px;
    width: 24px;
    background: #333;
    border-radius: 1px;
    transition: all 0.3s ease;
  }

  span:nth-child(1) {
    top: 8px;
  }

  span:nth-child(2) {
    top: 15px;
  }

  span:nth-child(3) {
    top: 22px;
  }

  &.open span:nth-child(1) {
    transform: rotate(45deg);
    top: 15px;
  }

  &.open span:nth-child(2) {
    opacity: 0;
  }

  &.open span:nth-child(3) {
    transform: rotate(-45deg);
    top: 15px;
  }
}

  .nav-links {
    display: flex;
    gap: clamp(1rem, 2vw, 2rem);
    transition: max-height 0.3s ease;

    @media (max-width: 600px) {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      flex-direction: column;
      background: white;
      overflow: hidden;
      max-height: 0;
      padding: 0 clamp(1rem, 3vw, 2rem);
      border-bottom: 1px solid #eee;

      &.open {
        max-height: 500px;
        padding-bottom: 1rem;
      }
    }
  }

  @media (max-width: 600px) {
    .hamburger {
      display: flex;
    }
  }
}
</style>