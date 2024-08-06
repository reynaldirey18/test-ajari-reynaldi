<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { Book } from "@/store/modules/books";
import { useRouter } from "vue-router";
import BookCard from "@/components/BookCard.vue";

const store = useStore();
const router = useRouter();
const books = computed(() => store.getters["books/books"]);

const fetchBooks = async () => {
  await store.dispatch("books/fetchBooks");
};

const addToLibrary = (book: Book) => {
  store.dispatch("books/addToLibrary", book);
  router.push("/library");
};

onMounted(() => {
  fetchBooks();
});
</script>
<template>
  <h1>Home</h1>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
  >
    <BookCard
      v-for="book in books"
      :key="book.list_name"
      :book="book"
      @add-to-library="addToLibrary"
    />
  </div>
</template>
