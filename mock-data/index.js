const createLocations = require("./locations");
const createEpisodes = require("./episodes");
const createSpecies = require("./species");
const createCards = require("./cards");
const mongoose = require("mongoose");
const db = require("../config/db");

const connection = `${db.protocol}://${db.user}:${db.password}@${db.host}/${db.name}`;

const episodesUrl = "https://rickandmortyapi.com/api/episode";
const locationsUrl = "https://rickandmortyapi.com/api/location";
const charactersUrl = "https://rickandmortyapi.com/api/character";

mongoose.connect(
  connection,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  async (err) => {
    if (err) return console.log(err);
    await createLocations(locationsUrl);
    await createEpisodes(episodesUrl);
    await createSpecies(charactersUrl);
    await createCards(charactersUrl);
    mongoose.connection.close();
  }
);
