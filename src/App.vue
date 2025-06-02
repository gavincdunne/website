<script setup lang="ts">
  import { defineComponent } from 'vue'
  import Header from './components/ui/Header.vue'
</script>

<template>
  <div class="app">
    <Header />

    <main>
      <router-view v-slot="{ Component, route }">
        <transition name="slide-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style scoped lang="scss">
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    flex: 1;
    padding: 1rem;
  }
}

/* Transition when entering or leaving */
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: transform 0.5s ease, opacity 0.3s ease;
}

/* The page enters by sliding in from the right */
.slide-fade-enter {
  transform: translateX(100%);
  opacity: 0;
}

/* When the page finishes entering */
.slide-fade-enter-to {
  transform: translateX(0);
  opacity: 1;
}

/* The page leaves by sliding out to the left */
.slide-fade-leave-active {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
