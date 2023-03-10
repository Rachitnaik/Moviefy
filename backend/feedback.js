import mongoose from "mongoose"; //do not do require
const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Feedback = mongoose.model("feedback", feedbackSchema);

export default Feedback;
