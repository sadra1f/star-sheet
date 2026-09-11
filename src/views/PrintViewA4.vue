<script setup lang="ts">
import HeaderText from "@/components/HeaderText.vue";
import StarComponent from "@/components/StarComponent.vue";
import { usePrintAndClose } from "@/composables/usePrintAndClose";

usePrintAndClose();

const generateStars = () =>
  Array.from({ length: 35 }).map(() => [
    Math.floor(Math.random() * 1000) + 1,
    Math.floor(Math.random() * 1000) + 1,
  ]);
</script>

<template>
  <div class="flex justify-center">
    <div class="h-[297mm] w-[210mm] space-y-2 bg-white p-4">
      <HeaderText size="A4" />
      <div class="grid grid-cols-5 gap-2">
        <div v-for="(item, index) in generateStars()" :key="index" class="aspect-square w-full">
          <StarComponent :variation="item[0]" :faceVariation="item[1]" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css">
@page {
  size: A4;
  margin: 0;
}

@media print {
  html,
  body {
    width: 210mm;
    height: 297mm;
  }
}
</style>
