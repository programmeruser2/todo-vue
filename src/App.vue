<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/new">New item</router-link>
        <router-link to="/list">List</router-link>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
