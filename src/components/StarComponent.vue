<script setup lang="ts">
import { StarIcon } from "@heroicons/vue/24/solid";
import { computed } from "vue";
import FaceComponent from "./FaceComponent.vue";

const props = defineProps({
  variation: {
    type: Number,
    default: 0,
  },
  faceVariation: {
    type: Number,
    default: 0,
  },
});

const variationClass = computed(() => {
  const variations = [
    "text-red-200",
    "text-orange-200",
    "text-amber-200",
    "text-yellow-200",
    "text-lime-200",
    "text-green-200",
    "text-emerald-200",
    "text-teal-200",
    "text-cyan-200",
    "text-sky-200",
    "text-blue-200",
    "text-indigo-200",
    "text-violet-200",
    "text-purple-200",
    "text-fuchsia-200",
    "text-pink-200",
    "text-rose-200",

    "text-red-300",
    "text-orange-300",
    "text-amber-300",
    "text-yellow-300",
    "text-lime-300",
    "text-green-300",
    "text-emerald-300",
    "text-teal-300",
    "text-cyan-300",
    "text-sky-300",
    "text-blue-300",
    "text-indigo-300",
    "text-violet-300",
    "text-purple-300",
    "text-fuchsia-300",
    "text-pink-300",
    "text-rose-300",
  ];

  return variations[props.variation % variations.length];
});
</script>

<template>
  <div :class="['relative size-full', variationClass].join(' ')">
    <StarIcon class="" />
    <FaceComponent class="absolute top-0 left-0 text-slate-800" :variation="faceVariation" />
  </div>
</template>
