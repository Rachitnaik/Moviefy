import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Grid,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import axios from "axios";

const theme = createTheme({
  palette: {
    primary: blueGrey,
  },
});

const FeedbackForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Please enter your name."),
    email: Yup.string()
      .email("Please enter a valid email address.")
      .required("Please enter your email."),
    message: Yup.string().required("Please enter your message."),
  });

  const onSubmit = (values, { resetForm }) => {
    const data = {
      name: values.name,
      email: values.email,
      message: values.message,
    };
    axios.post("http://localhost:5000/Feedback", data).then((res) => {
      console.log(res.data);
      resetForm();
      setFormSubmitted(true);
    });
  };

  useEffect(() => {
    if (formSubmitted) {
      alert("Thank you for your feedback!");
      setFormSubmitted(false);
    }
  }, [formSubmitted]);

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={
          {
            /* minHeight: "100vh"  */
            /* backgroundColor: "#F5F5F5" */
          }
        }
      >
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="name"
                      label="Name"
                      variant="outlined"
                      error={touched.name && Boolean(errors.name)}
                      helperText={touched.name && errors.name}
                      fullWidth
                      style={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="email"
                      label="Email"
                      variant="outlined"
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                      fullWidth
                      style={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="message"
                      label="Message"
                      variant="outlined"
                      error={touched.message && Boolean(errors.message)}
                      helperText={touched.message && errors.message}
                      fullWidth
                      multiline
                      rows={4}
                      style={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" color="primary" type="submit">
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default FeedbackForm;
