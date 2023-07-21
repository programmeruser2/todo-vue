<script setup>
  import { ref, watch } from 'vue';
  const props = defineProps(['name', 'default']);
  const emit = defineEmits(['changed']);
  const text = ref(props.default);
  watch(text, async (newText, _) => {
    emit('changed', newText);
  })
</script>
<template>
  <input v-model="text" type="text" :placeholder="props.name"/>
</template>
