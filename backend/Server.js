import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import movieData from "./movies.js";
import Feedback from "./feedback.js";
import dotenv from "dotenv";

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

mongoose.connect(
  "mongodb://localhost:27017/MovieData",
  //"mongodb+srv://rachitgaunkar:MongoDB123@cluster0.k2myc4u.mongodb.net/MovieData",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

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
  console.log("title", title);
  try {
    const movies = await movieData.find({
      Title: { $regex: title, $options: "i" },
    });

    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/* app.get("/movies", (req, res) => {
  // Get the title from the query parameters
  const Title = req.query.Title;

  // Filter the movies by the title
  const filteredMovies = movieData.filter((movie) => {
    return movie.Title.toLowerCase().includes(Title.toLowerCase());
  });

  // Return the filtered movies
  res.send(filteredMovies);
});
 */
/* app.get("/movies", async (req, res) => {
  const { title } = req.query;
  try {
    const allMovies = await movieData.find();
    const filteredMovies = allMovies.filter((movie) => {
      return movie.Title.toLowerCase().includes(title.toLowerCase());
    });
    res.json(filteredMovies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}); */
/* // Route to search for movies by title


app.get("/movies", (req, res) => {
  // Get the title from the query parameters
  const Title = req.query.Title;

  // Filter the movies by the title
  const filteredMovies = movieData.filter((movie) => {
    return movie.Title.toLowerCase().includes(Title.toLowerCase());
  });

  // Return the filtered movies
  res.send(filteredMovies);
}); */
/* app.get("/movies", async (req, res) => {
  const { title } = req.query;
  try {
    const movies = await movieData.find({
      title: { $regex: title, $options: "i" },
    });
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}); */

/////////////////////feedback
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

////////////////////////////////////////////////////////////////////////////////////////
/* app.post('/feedback', (req, res) => {
  const feedback = req.body;
  db.collection('feedback').insertOne(feedback, (error) => {
    if (error) {
      console.log('Error inserting feedback: ', error);
      res.status(500).send('Error inserting feedback');
      return;
    }

    res.status(200).send('Feedback inserted successfully');
  });
});
 */
/* app.get("/movies/Title", async (request, response) => {
  const { Title } = request.query;
  const data = await movieData.find({ Title });

  response.send(data);
});
 */
app.get("/", (req, res) => {
  res.send("hello world");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`app is listening to PORT ${PORT}`);
});

/* const baseURL = "http://localhost:5000/movies";
  const [post, setPost] = useState({});

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data);

      const newData = response.data.slice(0, 10);
      setPost(newData);
    });
  }, []);

  if (!post) return null; */
