<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  variation: {
    type: Number,
    default: 0,
  },
});

const variationFace = computed(() => {
  const variations = [
    "◠‿◠",
    "◕‿◕",
    "·ᴥ·",
    "＾○＾",
    "◡‿◡",
    "◕3◕",
    "≧◡≦",
    "∪ ◡ ∪",
    "◕ ‿ ◕",
    "◉◡◉",
    "✪｡✪",
    "⊙﹏⊙",
    "◕◞ε◟◕",
    "◕ω◕",
    "o´ω｀o",
    "^з^",
    "︶▽︶",
    "^‿^",
    "¬‿¬",
    " ͡° ͜ʖ ͡°",
    "─‿‿─",
    "◍•ᴗ•◍",
    "୨୧ ❛ᴗ❛",
    "˘･ᴗ･˘",
    "⁎◕▿◕⁎",
    "◕‿◕✿",
  ];

  return variations[props.variation % variations.length];
});
</script>

<template>
  <div class="flex size-full items-center justify-center text-xl font-normal">
    <span>{{ variationFace }}</span>
  </div>
</template>
