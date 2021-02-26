const axios = require("axios");
const { Card, Species, Location, Episod } = require("../models");

const clearCollection = async () => {
  await Card.deleteMany({});
};

const getEpisodesFromRickAndMortyApi = async (
  url = "https://rickandmortyapi.com/api/episode",
  result = []
) => {
  try {
    const res = await axios.get(url);
    if (res.data) {
      const items = res.data.results.map(({ name, url }) => ({ name, url }));
      result = result.concat(items);
    }
    if (res.data.info.next) {
      result = [
        ...(await getEpisodesFromRickAndMortyApi(res.data.info.next, result)),
      ];
    }
    return result;
  } catch (error) {
    console.log(error);
  }
};

const getCharacters = async (
  url,
  specieses,
  locations,
  episodes,
  episodesRaMApi,
  result = []
) => {
  try {
    const res = await axios.get(url);
    if (res.data) {
      const items = res.data.results.map(
        ({ name, image, gender, status, species, location, episode }) => {
          const episodeNames = [];
          for (let i = 0; i < episode.length; i++) {
            episodesRaMApi.forEach(({ name, url }) => {
              if (episode[i] === url) episodeNames.push(name);
            });
          }
          const epis = [];
          for (let i = 0; i < episodes.length; i++) {
            episodeNames.forEach((name) => {
              if (episodes[i].name === name) epis.push(episodes[i]);
            });
          }
          const speciesName = specieses.find((el) => el.name === species).name;
          const loc = locations.find((el) => el.name === location.name);
          return {
            name,
            image,
            gender,
            character_status: status,
            species: speciesName,
            location: loc ? loc.name : null,
            episodes: epis,
          };
        }
      );
      result.push(...items);
    }
    if (res.data.info.next) {
      result = [
        ...(await getCharacters(
          res.data.info.next,
          specieses,
          locations,
          episodes,
          episodesRaMApi,
          result
        )),
      ];
    }
    return result;
  } catch (error) {
    console.log(error);
  }
};

const fillCollection = async (url) => {
  try {
    const specieses = await Species.find();
    const locations = await Location.find();
    const episodes = await Episod.find();
    const episodesRaMApi = await getEpisodesFromRickAndMortyApi();
    const cards = await getCharacters(
      url,
      specieses,
      locations,
      episodes,
      episodesRaMApi
    );
    await Card.insertMany(cards);
  } catch (error) {
    console.log(error);
  }
};

const createCards = async (url) => {
  await clearCollection();
  await fillCollection(url);
};

module.exports = createCards;
