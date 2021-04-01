<template>
  <div class="card-container">
    <g-image
      v-if="imageUrl"
      v-bind:src="url"
      alt="product-image"
      class="product-image"
    />
    <div class="box-text">
      <h1>{{ productName }}</h1>
      <p class="text-description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["productName", "imageUrl", "description"],
  data() {
    return {
      url:
        "https://gapp-catalog-blob-dev.s3.ap-southeast-1.amazonaws.com/public/" +
        this.imageUrl,
    };
  },
};
</script>

<style>
.box-text {
  @apply flex flex-col gap-4 justify-center;
}
.product-image {
  @apply rounded w-40 h-40 object-contain bg-gray-100;
}
.card-container {
  @apply rounded-md py-4 px-8 shadow bg-gray-50 text-lg font-semibold text-gray-800 my-4 flex gap-4;
}
.text-description {
  @apply text-base font-normal text-gray-500;
}
</style>
