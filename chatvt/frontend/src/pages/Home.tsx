import { Box, useMediaQuery, useTheme, Typography, Button } from "@mui/material";
import React from "react";
import TypingAnim from "../components/typer/TypingAnim";
import Footer from "../components/footer/Footer";

const Home = () => {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));
  
  return (
    <Box width={"100%"} height={"100%"} sx={{ backgroundColor: "#420C09", color: "white" }}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
          mt: 3,
        }}
      >
        <Typography variant="h1" sx={{ mb: 2 }}>
          The Hokie Bot
        </Typography>
        <Box>
          <TypingAnim />
        </Box>
        <Box sx={{ display: "flex", mx: "auto" }}>
          <img
            src="chat.png"
            alt="chatbot"
            style={{
              display: "flex",
              margin: "auto",
              width: isBelowMd ? "80%" : "60%",
              borderRadius: 20,
              boxShadow: "-5px -5px 105px #FF6600", // Burnt Orange glow
              marginTop: 20,
              marginBottom: 20,
              padding: 10,
            }}
          />
        </Box>
        <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FF6600", // Burnt Orange
              color: "black",
              fontWeight: "bold",
              ":hover": {
                backgroundColor: "#cc5500", // Darker Orange for hover
              },
            }}
            href="/login"
          >
            Login
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#6C757D", // Grey for Signup button
              color: "white",
              fontWeight: "bold",
              ":hover": {
                backgroundColor: "#5a6268", // Darker Grey for hover
              },
            }}
            href="/signup"
          >
            Signup
          </Button>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
