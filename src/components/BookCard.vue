<script setup lang="ts">
const props = defineProps<{
  book: {
    book_image: string;
    book_details: Array<{
      title: string;
      contributor: string;
      description: string;
    }>;
    amazon_product_url: string;
  };
  hideAction?: boolean;
}>();
</script>
<template>
  <div class="flex flex-col items-start bg-white shadow-lg rounded-lg p-4">
    <img
      src="https://m.media-amazon.com/images/I/71j25Ib5FSL._AC_UF1000,1000_QL80_.jpg"
      alt="Book Cover"
      class="w-full h-48 object-cover mb-4 rounded"
    />
    <h3 class="text-xl font-semibold mb-2">
      {{ book.book_details[0].title }}
    </h3>
    <p class="text-gray-600 mb-2">{{ book.book_details[0].contributor }}</p>
    <p class="text-gray-800 mb-4">{{ book.book_details[0].description }}</p>
    <a
      :href="book.amazon_product_url"
      class="text-blue-500 underline mb-4"
      target="_blank"
    >
      View on Amazon
    </a>
    <button
      v-if="!hideAction"
      @click="$emit('add-to-library', book)"
      class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Add to Library
    </button>
  </div>
</template>
