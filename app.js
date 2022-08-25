/* eslint-disable no-undef */
const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

const port = process.env.APP_PORT ?? 5000;

const movieHandlers = require("./movieHandlers");
const usersHandlers = require("./usersHandlers")

const welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
};


app.get("/", welcome);

app.post("/api/movies", movieHandlers.postMovie);
app.post("/api/users",usersHandlers.postUsers)

app.get("/api/movies", movieHandlers.getMovies);
app.get("/api/movies/:id", movieHandlers.getMovieById);

app.get("/api/users", usersHandlers.getUsers);
app.get("/api/users/:id", usersHandlers.getUsersById);


app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
