const axios = require("axios");
const { Episod } = require("../models");

const clearCollection = async () => {
  await Episod.deleteMany({});
};

const fillCollection = async (url) => {
  try {
    const res = await axios.get(url);
    if (res.data) {
      const items = res.data.results.map(({ name, air_date, episode }) => ({
        name,
        air_date: Date(air_date),
        episode_code: episode,
      }));
      await Episod.insertMany(items);
    }
    if (res.data.info.next) {
      await fillCollection(res.data.info.next, Episod);
    }
  } catch (error) {
    console.log(error);
  }
};

const createEpisodes = async (url) => {
  await clearCollection();
  await fillCollection(url);
};

module.exports = createEpisodes;
