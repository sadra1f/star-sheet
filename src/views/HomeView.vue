<script setup lang="ts">
import StarComponent from "@/components/StarComponent.vue";
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/16/solid";

const star = [
  Math.floor(Math.random() * 1000) + 1, //
  Math.floor(Math.random() * 1000) + 1,
];
</script>

<template>
  <div class="flex min-h-dvh min-w-dvw items-center justify-center p-2 text-center md:p-8">
    <div
      class="flex max-w-full flex-col items-center justify-center gap-4 rounded-2xl bg-white/80 p-4 md:max-w-xl md:min-w-xl"
    >
      <div class="relative size-48">
        <StarComponent :variation="star[0]" :faceVariation="star[1]" />
      </div>

      <h1 class="text-4xl font-bold">Star Sheet</h1>

      <p>
        Generate a printable sheet filled with beautiful stars in seconds. Choose your preferred
        paper size and create a ready-to-print sheet for stickers, crafts, decorations, planners,
        scrapbooks, or anything you can imagine.
      </p>

      <p class="font-bold">Choose a size:</p>

      <div class="grid w-full grid-cols-3 gap-2">
        <a
          v-for="item in [
            { title: 'A3', href: 'print-a3' },
            { title: 'A4', href: 'print-a4' },
            { title: 'A5', href: 'print-a5' },
          ]"
          :key="item.href"
          :href="item.href"
          target="_blank"
          class="rounded-xl bg-blue-100 p-4 transition-colors hover:bg-blue-200"
        >
          {{ item.title }}
        </a>
      </div>

      <hr class="w-full border-blue-50" />

      <a
        class="text-xs transition hover:text-blue-900 hover:underline"
        href="https://github.com/sadra1f/star-sheet"
        target="_blank"
      >
        <span>View project on GitHub</span>{{ " " }}
        <ArrowTopRightOnSquareIcon class="inline-block size-3" />
      </a>
    </div>
  </div>
</template>
