/* import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function AddReview() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const { _id } = useParams();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:5000/movies/reviews/${_id}`,
        {
          name,
          comment,
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ position: "fixed", bottom: 100, backgroundColor: "skyblue" }}
    >
      <div style={{ display: "inline-block" }}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div style={{ display: "inline-block" }}>
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddReview;
 */

import { TextField, Button, Box } from "@mui/material";
import { createTheme } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function AddReview(props) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const { _id } = useParams();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Call the onReviewSubmit callback with the form data
    //clear form
    setName("");
    setComment("");

    try {
      const response = await axios.post(
        `https://moviefy-wine.vercel.app/movies/reviews/${_id}`,
        {
          name,
          comment,
        }
      );
      props.onReload();
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      sx={{
        position: "fixed",
        backgroundColor: "skyblue",
        padding: 2,
        display: "flex",
        flexDirection: "row", // Change the flex direction to row
        alignItems: "flex-start", // Align the items to the top
        gap: 2,
        "@media (min-width:600px)": {
          flexDirection: "row",
          alignItems: "flex-start",
        },
      }}
    >
      <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          size="small"
          value={name}
          onChange={(event) => setName(event.target.value)}
          sx={{ width: "100%" }} // Set the width to 100% to fill the available space
        />
      </Box>
      <br />
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        <TextField
          id="comment"
          label="Comment"
          variant="outlined"
          size="small"
          multiline
          rows={3}
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          sx={{ width: "100%" }} // Set the width to 100% to fill the available space
        />
      </Box>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: 2, alignSelf: "flex-start", minWidth: "120px" }} // Add a minWidth to the button to prevent it from shrinking
      >
        Add Review
      </Button>
    </form>
  );
}
export default AddReview;
