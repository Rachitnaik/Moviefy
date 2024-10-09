// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import Button from "@mui/material/Button";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import { Container, Divider } from "@mui/material";
// import AddReview from "./Addreview";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// function ViewReview() {
//   const { _id } = useParams();

//   //reloaded
//   const [shouldReload, setShouldReload] = useState(false);

//   function handleReload() {
//     setShouldReload(!shouldReload);
//   }

//   const [review, setReview] = useState({});

//   useEffect(() => {
//     async function fetchData() {
//       /*    console.log("_id inside useEffect: ", _id); */
//       if (_id) {
//         const result = await axios.get(`http://localhost:5000/movies/${_id}`);
//         console.log("result variable");
//         console.log(result);
//         setReview(result);
//       }
//     }
//     fetchData();
//   }, [[shouldReload, _id]]);

//   return (
//     <>
//       <Container>
//         <h1 style={{ textAlign: "left" }}>Reviews</h1>
//         <Divider />

//         {review.data?.Review?.map((reviewItem) => (
//           <Typography
//             sx={{
//               marginTop: "1rem",
//               fontSize: 17,
//               textAlign: "left",
//               //paddingBottom: "4rem",
//             }}
//           >
//             {reviewItem.name && (
//               <div style={{}}>
//                 <strong>Name:</strong> {reviewItem.name}
//                 <br />
//                 <strong>Comment:</strong> {reviewItem.comment}
//               </div>
//             )}
//           </Typography>
//         ))}
//         <Divider></Divider>

//         {/* <h1 style={{ textAlign: "Reviews" }}>hey</h1>
//       <Divider></Divider>
//       <Typography sx={{ marginTop: "1rem", fontSize: 17, textAlign: "left" }}>
//         <strong>Name:</strong> {review.data?.Review?.[0]?.name}
//         <br />
//         <strong>Comment:</strong> {review.data?.Review?.[0]?.comment}
//       </Typography>

//       <AddReview /> */}
//         <AddReview onReload={handleReload} />
//       </Container>
//     </>
//   );
// }
// export default ViewReview;

// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import Button from "@mui/material/Button";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import { Container, Divider, Fab } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import AddReview from "./Addreview";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// function ViewReview() {
//   const { _id } = useParams();

//   //reloaded
//   const [shouldReload, setShouldReload] = useState(false);

//   function handleReload() {
//     setShouldReload(!shouldReload);
//   }

//   const [review, setReview] = useState({});

//   useEffect(() => {
//     async function fetchData() {
//       if (_id) {
//         const result = await axios.get(`http://localhost:5000/movies/${_id}`);
//         setReview(result);
//       }
//     }
//     fetchData();
//   }, [[shouldReload, _id]]);

//   // state to show/hide the AddReview component
//   const [showAddReview, setShowAddReview] = useState(false);

//   // function to toggle the show/hide state of the AddReview component
//   const toggleShowAddReview = () => {
//     setShowAddReview(!showAddReview);
//   };

//   return (
//     <>
//       <Container>
//         <h1 style={{ textAlign: "left" }}>Reviews</h1>
//         <Divider />

//         {review.data?.Review?.map((reviewItem) => (
//           <Typography
//             sx={{
//               marginTop: "1rem",
//               fontSize: 17,
//               textAlign: "left",
//             }}
//           >
//             {reviewItem.name && (
//               <div style={{}}>
//                 <strong>Name:</strong> {reviewItem.name}
//                 <br />
//                 <strong>Comment:</strong> {reviewItem.comment}
//               </div>
//             )}
//           </Typography>
//         ))}
//         <Divider></Divider>

//         {/* render the AddReview component if showAddReview is true */}
//         {showAddReview && <AddReview onReload={handleReload} />}

//         {/* add the floating action button */}
//         <Fab
//           color="primary"
//           aria-label="add"
//           sx={{
//             position: "fixed",
//             bottom: "5rem",
//             right: "2rem",
//           }}
//           onClick={toggleShowAddReview}
//         >
//           <AddIcon />
//         </Fab>
//       </Container>
//     </>
//   );
// }

// export default ViewReview;

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Container,
  Divider,
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddReview from "./Addreview";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function ViewReview() {
  const { _id } = useParams();

  //reloaded
  const [shouldReload, setShouldReload] = useState(false);

  function handleReload() {
    setShouldReload(!shouldReload);
  }

  const [review, setReview] = useState({});

  useEffect(() => {
    async function fetchData() {
      if (_id) {
        const result = await axios.get(
          `https://moviefy-wine.vercel.app//movies/${_id}`
        );
        setReview(result);
      }
    }
    fetchData();
  }, [[shouldReload]]);

  // state to show/hide the AddReview component
  const [showAddReview, setShowAddReview] = useState(false);

  // function to toggle the show/hide state of the AddReview component
  const toggleShowAddReview = () => {
    setShowAddReview(!showAddReview);
  };

  // function to handle the submission of the review form
  const handleSubmitReview = () => {
    // handle form submission logic here
    // ...
    // close the dialog after submitting the form
    toggleShowAddReview();
  };

  return (
    <>
      <Container sx={{ overflow: "auto", paddingBottom: 10 }}>
        <h1 style={{ textAlign: "left" }}>Reviews</h1>
        <Divider />

        {review.data?.Review?.map((reviewItem) => (
          <Typography
            sx={{
              marginTop: "1rem",
              fontSize: 17,
              textAlign: "left",
            }}
          >
            {reviewItem.name && (
              <div style={{}}>
                <strong>Name:</strong> {reviewItem.name}
                <br />
                <strong>Comment:</strong> {reviewItem.comment}
              </div>
            )}
          </Typography>
        ))}
        <Divider></Divider>

        {/* render the AddReview component as a dialog */}
        <Dialog open={showAddReview} onClose={toggleShowAddReview}>
          <DialogTitle>Add a Review</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <AddReview onReload={handleReload} />
            </DialogContentText>
          </DialogContent>
          {/*  <DialogActions>
            <Button onClick={toggleShowAddReview}>Cancel</Button>
            <Button onClick={handleSubmitReview}>Submit</Button>
          </DialogActions> */}
        </Dialog>

        {/* add the floating action button */}
        <Fab
          color="primary"
          aria-label="add"
          sx={{
            position: "fixed",
            bottom: "4rem",
            right: "2rem",
          }}
          onClick={toggleShowAddReview}
        >
          <AddIcon />
        </Fab>
      </Container>
    </>
  );
}

export default ViewReview;
