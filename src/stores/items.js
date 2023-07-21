import { defineStore } from 'pinia';
import { reactive } from 'vue';
export const useItemsStore = defineStore('items', () => {
  let defaultVal = [{name: 'title', description: 'description'}];
  const stored = localStorage.getItem('items');
  if (stored) {
    const parsed = JSON.parse(stored);
    if (Array.isArray(parsed)) {
      defaultVal = parsed;
    }
  }
  const items = reactive(defaultVal);
  const addItem = (name, description) => { 
    items.push({name, description});
    localStorage.setItem('items', JSON.stringify(items));
  };
  return { items, addItem };
})
