// src/components/YourComponent.vue

<template>
  <div>
    <h1>Data from Backend:</h1>
    <p>{{ data }}</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const data = ref(null);

    onMounted(async () => {
      const response = await fetch('/api/data');
      const result = await response.json();
      data.value = result.data;
    });

    return { data };
  }
}
</script>
