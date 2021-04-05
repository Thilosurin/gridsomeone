const axios = require("axios");
const __API_PATH__ =
  "https://yf2b41ezjb.execute-api.ap-southeast-1.amazonaws.com/dev/catalog/product/?categoryId=MC01-eoytjqfdsmfkmq9p0lk";

module.exports = function(api) {
  api.loadSource(async ({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    const {
      data: { data },
    } = await axios.get(__API_PATH__);

    const collection = addCollection("ProductList");

    data.forEach((item) => collection.addNode(item));
  });
};
