const axios = require("axios");
const { Species } = require("../models");

const clearCollection = async () => {
  await Species.deleteMany({});
};

const getSpecies = async (url, result = []) => {
  try {
    const res = await axios.get(url);
    if (res.data) {
      const items = res.data.results.map(({ species }) => species);
      result = result.concat(items);
    }
    if (res.data.info.next) {
      result = [...(await getSpecies(res.data.info.next, result))];
    } else {
      result = [...new Set(result)];
      result = result.map((species) => ({ name: species }));
    }
    return result;
  } catch (error) {
    console.log(error);
  }
};

const fillCollection = async (url) => {
  try {
    const species = await getSpecies(url);
    await Species.insertMany(species);
  } catch (error) {
    console.log(error);
  }
};

const createSpecies = async (url) => {
  await clearCollection();
  await fillCollection(url);
};

module.exports = createSpecies;
