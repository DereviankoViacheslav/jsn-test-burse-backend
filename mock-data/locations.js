const axios = require("axios");
const { Location } = require("../models");

const clearCollection = async () => {
  await Location.deleteMany({});
};

const fillCollection = async (url) => {
  try {
    const res = await axios.get(url);
    if (res.data) {
      const items = res.data.results.map(({ name }) => ({ name }));
      await Location.insertMany(items);
    }
    if (res.data.info.next) {
      await fillCollection(res.data.info.next, Location);
    }
  } catch (error) {
    console.log(error);
  }
};

const createLocations = async (url) => {
  await clearCollection();
  await fillCollection(url);
};

module.exports = createLocations;
