const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const db = require("./config/db");
const { errorHandler } = require("./middlewares");

const PORT = 3001;

const connection = `${db.protocol}://${db.user}:${db.password}@${db.host}/${db.name}`;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(errorHandler);

mongoose.connect(
  connection,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) return console.log(err);
    app.listen(PORT, () => {
      console.log(`Example app listening at http://localhost:${PORT}`);
    });
  }
);
