<script setup lang="ts">
  const props = defineProps<{
    name: string
    route: string
  }>()
</script>

<template>
  <RouterLink :to="route" class="nav-item" :class="{ active: $route.path === route }" @click="$emit('click')">
    {{ name }}
  </RouterLink>
</template>

<style scoped lang="scss">
.nav-item {
  position: relative;
  text-decoration: none;
  color: #333;
  padding: 0.25rem 0;
  transition: color 0.3s ease;

  &:hover {
    color: #0077ff;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -0.2rem;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #0077ff;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  &.active {
    font-weight: bold;
    color: #0077ff;
  }
}
</style>