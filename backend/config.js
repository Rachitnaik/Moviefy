import dotenv from "dotenv";

dotenv.config();

export default {
  MongoUrl:
    process.env.MongoUrl ||
    "mongodb+srv://rachitgaunkar:MongoDB123@cluster0.k2myc4u.mongodb.net/MovieData",
};
