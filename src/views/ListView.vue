<script setup>
  import { useItemsStore } from '../stores/items.js';
  const store = useItemsStore(); 
</script>
<template>
  <h1>Items</h1>
  <ul>
    <li v-for="item in store.items">
      <h2>{{ item.name }}</h2>
      <p>{{ item.description }}</p>
    </li>
  </ul>
</template>
