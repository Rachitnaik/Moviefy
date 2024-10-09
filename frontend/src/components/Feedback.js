import React, { useState, useEffect, useRef } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Grid,
  createTheme,
  ThemeProvider,
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import axios from "axios";
import emailjs from "@emailjs/browser";

const theme = createTheme({
  palette: {
    primary: blueGrey,
  },
});

const FeedbackForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const form = useRef(); //message feedack

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Please enter your name."),
    email: Yup.string()
      .email("Please enter a valid email address.")
      .required("Please enter your email.")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        "Invalid email address"
      ),
    message: Yup.string().required("Please enter your message."),
  });

  const onSubmit = (values, { resetForm }) => {
    const data = {
      name: values.name,
      email: values.email,
      message: values.message,
    };
    axios.post("https://moviefy-wine.vercel.app/Feedback", data).then((res) => {
      console.log(res.data);
      resetForm();
      setFormSubmitted(true);
      //reply feedback
      emailjs
        .sendForm(
          "service_1y5isqf",
          "template_q505vjk",
          form.current,
          "ughgVZ9M7whyDcgeR"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    });
  };

  /*  useEffect(() => {
    if (formSubmitted) {
      alert("Thank you for your feedback!");
      setFormSubmitted(false);
    }
  }, [formSubmitted]); */
  useEffect(() => {
    if (formSubmitted) {
      setTimeout(() => {
        setFormSubmitted(false);
      }, 3000);
    }
  }, [formSubmitted]);

  return (
    // <ThemeProvider theme={theme}>
    //   <Grid
    //     container
    //     justifyContent="center"
    //     alignItems="center"
    //     style={
    //       {
    //         /* minHeight: "100vh"  */
    //         /* backgroundColor: "#F5F5F5" */
    //       }
    //     }
    //   >
    //     <Grid item xs={12} sm={10} md={8} lg={6}>
    //       <Formik
    //         initialValues={initialValues}
    //         validationSchema={validationSchema}
    //         onSubmit={onSubmit}
    //         ref={form}
    //       >
    //         {({ errors, touched }) => (
    //           <Form ref={form}>
    //             <Grid container spacing={2}>
    //               <Grid item xs={12}>
    //                 <Field
    //                   as={TextField}
    //                   name="name"
    //                   label="Name"
    //                   variant="outlined"
    //                   error={touched.name && Boolean(errors.name)}
    //                   helperText={touched.name && errors.name}
    //                   fullWidth
    //                   style={{ width: "100%" }}
    //                 />
    //               </Grid>
    //               <Grid item xs={12}>
    //                 <Field
    //                   as={TextField}
    //                   name="email"
    //                   label="Email"
    //                   variant="outlined"
    //                   error={touched.email && Boolean(errors.email)}
    //                   helperText={touched.email && errors.email}
    //                   fullWidth
    //                   style={{ width: "100%" }}
    //                 />
    //               </Grid>
    //               <Grid item xs={12}>
    //                 <Field
    //                   as={TextField}
    //                   name="message"
    //                   label="Message"
    //                   variant="outlined"
    //                   error={touched.message && Boolean(errors.message)}
    //                   helperText={touched.message && errors.message}
    //                   fullWidth
    //                   multiline
    //                   rows={4}
    //                   style={{ width: "100%" }}
    //                 />
    //               </Grid>
    //               <Grid item xs={12}>
    //                 <Button variant="contained" color="primary" type="submit">
    //                   Submit
    //                 </Button>
    //               </Grid>
    //             </Grid>
    //           </Form>
    //         )}
    //       </Formik>
    //     </Grid>
    //   </Grid>
    // </ThemeProvider>
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
            ref={form}
          >
            {({ errors, touched }) => (
              <>
                <Form ref={form}>
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

                {/* feedback success message */}
                {formSubmitted && (
                  <Card
                    variant="outlined"
                    style={{ backgroundColor: "#c8e6c9", marginTop: "16px" }}
                  >
                    <CardContent>
                      <Typography variant="h6" component="h2">
                        Thank you for your feedback!
                      </Typography>
                    </CardContent>
                  </Card>
                )}
              </>
            )}
          </Formik>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default FeedbackForm;
