<template>
  <Layout id="index">
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <input
      type="text"
      v-model="message"
      class="mt-4 rounded-md text-lg border-2 border-green-400 p-2"
    />
    <h1 class="text-green-400 text-3xl">{{ message }}</h1>
    <CardProduct
      v-for="product in dataFromAPI"
      :key="product.createdAt"
      v-bind:product-name="product.productName"
      v-bind:description="product.productShortDescription"
      v-bind:image-url="product.productImagesUrl[0].url"
    />
  </Layout>
</template>

<script>
import axios from "axios";
import CardProduct from "../components/CardProduct";

export default {
  data() {
    return { message: "Thilosurin", dataFromAPI: [] };
  },
  metaInfo: {
    title: "Products",
    meta: [
      { charset: "utf-8" },
      { name: "author", content: "Thilosurin" },
      {
        name: "description",
        content:
          "This is a test for create website with gridsome in the first time",
      },
      { name: "keywords", content: "Websit Gridsome" },
    ],
  },
  components: {
    CardProduct,
  },
  methods: {
    fetchProduct: async () => {
      try {
        const __API_PATH__ =
          "https://yf2b41ezjb.execute-api.ap-southeast-1.amazonaws.com/dev/catalog/product/?categoryId=MC01-eoytjqfdsmfkmq9p0lk";
        const api = await axios.get(__API_PATH__);
        return api.data.data;
      } catch (error) {
        console.error("__ERROR__ : ", error);
      }
    },
  },
  mounted() {
    this.fetchProduct().then((products) => (this.dataFromAPI = products));
  },
};
</script>
