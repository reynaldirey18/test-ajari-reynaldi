<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import BookCard from "@/components/BookCard.vue";

const store = useStore();
const library = computed(() => store.getters["books/library"]);
</script>

<template>
  <div>
    <h1>Library</h1>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <BookCard v-for="book in library" :key="book.list_name" :book="book" />
    </div>
  </div>
</template>
