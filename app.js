/* eslint-disable no-undef */
require("dotenv").config();
const express = require("express");
const { validateMovie, validateUser } = require("./validators");

const app = express();

app.use(express.json());

const port = process.env.APP_PORT ?? 5000;

const movieHandlers = require("./movieHandlers");
const usersHandlers = require("./usersHandlers")

const welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
};

app.get("/", welcome);

app.post("/api/movies", validateMovie, movieHandlers.postMovie);
app.get("/api/movies", movieHandlers.getMovies);
app.get("/api/movies/:id", movieHandlers.getMovieById);
app.put("/api/movies/:id", validateMovie, movieHandlers.updateMovie);
app.delete("/api/movies/:id", movieHandlers.deleteMovie);

app.post("/api/users",validateUser, usersHandlers.postUsers);
app.get("/api/users", usersHandlers.getUsers);
app.get("/api/users/:id", usersHandlers.getUsersById);
app.put("/api/users/:id",validateUser, usersHandlers.updateUsers);
app.delete("/api/users/:id", usersHandlers.deleteUsers);




app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
