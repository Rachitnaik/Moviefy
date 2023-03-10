import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function About() {
  return (
    <>
      <Card
        className="abouttt"
        sx={{
          minWidth: 275,
          mt: 19,
          boxShadow: "2px 2px 2px 1px rgba(0, 0, 1, 1)",
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            We are a company dedicated to providing high-quality products and
            services to our customers. Our goal is to make our customers happy
            and satisfied with every purchase they make. Feel free to reach out
            to us with any questions or concerns, we are always here to help.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
}
