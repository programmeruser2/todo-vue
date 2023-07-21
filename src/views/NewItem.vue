<script setup>
  import { ref } from 'vue';
  import { useItemsStore } from '../stores/items.js';
  import InputBox from '../components/InputBox.vue';
  import router from '../router/index.js';

  const store = useItemsStore();
  const name = ref('Name');
  const description = ref('Description');
  function nameChanged(newName) {
    name.value = newName;
  }
  function descriptionChanged(newDescription) {
    description.value = newDescription;
  }
  function createItem() {
    store.addItem(name, description);
    router.push({ path: 'list' });
  }
</script>
<template>
  <h1>New item</h1>
  <InputBox @changed="nameChanged" name="Name" default="Name"/>
  <InputBox @changed="descriptionChanged" name="Description" default="Description"/>
  <button @click="createItem">Create</button>
</template>
