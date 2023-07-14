import {
    Button,
    Card,
    CardContent,
    CardHeader,
    Container,
    Divider,
    FormControl,
    Stack,
    TextField
  } from "@mui/material";
  import { Form, Link, Navigate, useLoaderData } from "react-router-dom";
  import GoogleButton from "react-google-button";
  import Cookies from "js-cookie";
  
  export default function LoginPage() {
  
    
    const googleOAuth2URL = useLoaderData();
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      const formData = new FormData();
      formData.append("name", e.target["name"].value)
      formData.append("email", e.target["email"].value)
      formData.append("password", e.target["password"].value)
      const { jwtLoginAuth } = await import("../../../api/auth");
      const { url } = await jwtLoginAuth(formData);
     console.log(url)
    };
  
    const auth = Cookies.get("auth")
    console.log(auth)
    if(auth){
      return <Navigate to={"/"}/>
    }
  
  
    return (
      <Container sx={{ marginTop: 25, textAlign: "center" }}>
        <Card sx={{ border: 2 }}>
          <CardHeader title="Login" />
          <Divider sx={{ marginLeft: 25, marginRight: 25 }} />
          <CardContent>
            <Form onSubmit={handleSubmit}>
              <Stack spacing={1}>
                <FormControl fullWidth>
                  <TextField
                    type="text"
                    name="name"
                    label="Name"
                    required
                    fullWidth
                  />
                </FormControl>
                <FormControl fullWidth>
                  <TextField
                    type="email"
                    name="email"
                    label="E-Mail"
                    required
                    fullWidth
                  />
                </FormControl>
                <FormControl fullWidth>
                  <TextField
                    type="password"
                    name="password"
                    label="Password"
                    required
                  />
                </FormControl>
  
                <Button variant="contained" type="submit">
                  Submit
                </Button>
                <GoogleButton
                  onClick={() => {
                    window.location.href = googleOAuth2URL;
                  }}
                  style={{ width: "100%" }}
                />
                <Link to="/register" style={{ width: "100%", marginTop: 53 }}>
                  {" "}
                  Register
                </Link>
              </Stack>
            </Form>
          </CardContent>
        </Card>
      </Container>
    );
  }