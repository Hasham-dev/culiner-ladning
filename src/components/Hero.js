import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

//images
import HeaderImage from "../assets/Home.png";

const primColor = "#85C34A";

const Hero = () => {
  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          padding: { xs: "2rem 2rem 0 2rem", sm: "5rem 5rem 0 5rem" },
          pt: "3rem !important",
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            className="col-flex"
            position="relative"
            sx={{ alignItems: "center", height: { xs: "250px", md: "70vh" } }}
          >
            <Box component="div" sx={{ textAlign: { xs: "center" } }}>
              <Typography
                className="h1 font-h"
                variant="h1"
                component="div"
                sx={{
                  color: "#FFF",
                  fontSize: { xs: "1.5rm", md: "32rpx" },
                  maxWidth: { md: "60vw", xs: "100%" },
                  mb: "1rem",
                }}
              >
                Welcome to the Culineer Community!
              </Typography>
            </Box>
          </Grid>
          <div class="arrow_container">
            <a href="#toscroll">
              <div class="chevron"></div>
              <div class="chevron"></div>
              <div class="chevron"></div>
              <span class="text">Scroll down</span>
            </a>
          </div>
        </Grid>
      </Box>
    </div>
  );
};

export default Hero;
