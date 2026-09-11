<script setup lang="ts">
defineProps({
  size: {
    type: String,
    default: "Unknown",
  },
});
</script>

<template>
  <div class="flex justify-between text-xs">
    <a href="https://github.com/sadra1f/star-sheet" target="_blank">
      https://github.com/sadra1f/star-sheet
    </a>
    <p>{{ size }}</p>
  </div>
</template>
