// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import movieData from "../movies.js";
// import Feedback from "../feedback.js";
// import dotenv from "dotenv";

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(
//   cors({
//     origin: "*",
//   })
// );
// mongoose.set("strictQuery", false);

// dotenv.config();

// mongoose.connect(process.env.url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   family: 4,
// });
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//   console.log("Connected successfully");
// });

// app.get("/movies", async (request, response) => {
//   const data = await movieData.find({});

//   try {
//     response.send(data);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });

// app.get("/movies/:_id", async (request, response) => {
//   const movie = await movieData.findById(request.params._id);

//   try {
//     response.send(movie);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });

// app.get("/search/title", async (req, res) => {
//   const { title } = req.query;
//   console.log("title", title);
//   try {
//     const movies = await movieData.find({
//       Title: { $regex: title, $options: "i" },
//     });

//     res.json(movies);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.post("/Feedback", (req, res) => {
//   const feedback = new Feedback({
//     name: req.body.name,
//     email: req.body.email,
//     message: req.body.message,
//   });

//   feedback
//     .save()
//     .then(() =>
//       res.status(201).send({ message: "Feedback saved successfully" })
//     )
//     .catch((error) => {
//       console.error(error);
//       res.status(500).send({ error: "Failed to save feedback" });
//     });
// });

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`app is listening to PORT ${PORT}`);
// });
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import movieData from "./movies.js";
import Feedback from "./feedback.js";
import dotenv from "dotenv";
import { createServer } from "http";
import { parse } from "url";

// Initialize express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);

mongoose.set("strictQuery", false);
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

// Define routes
app.get("/movies", async (request, response) => {
  const data = await movieData.find({});
  try {
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/movies/:_id", async (request, response) => {
  const movie = await movieData.findById(request.params._id);
  try {
    response.send(movie);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/search/title", async (req, res) => {
  const { title } = req.query;
  try {
    const movies = await movieData.find({
      Title: { $regex: title, $options: "i" },
    });
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/Feedback", (req, res) => {
  const feedback = new Feedback({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });

  feedback
    .save()
    .then(() =>
      res.status(201).send({ message: "Feedback saved successfully" })
    )
    .catch((error) => {
      console.error(error);
      res.status(500).send({ error: "Failed to save feedback" });
    });
});

app.get("/", (req, res) => {
  res.send("hello world");
});

// Export the serverless function handler for Vercel
export default function handler(req, res) {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    app(req, res, parsedUrl);
  });

  return server(req, res);
}
