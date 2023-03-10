import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  Title: String,
  Rated: String,
  Released: Date,
  Genre: String,
  Director: String,
  Plot: String,
});

const movieData = mongoose.model("movies", movieSchema);
export default movieData;
