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
          padding: { xs: "2rem", sm: "5rem" },
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
            sx={{ alignItems: "center", height: { xs: "250px", md: "725px" } }}
          >
            <Box component="div" sx={{ textAlign: { xs: "center" } }}>
              <Typography
                className="h1 font-h"
                variant="h1"
                component="div"
                sx={{
                  color: "#FFF",
                  fontSize: { xs: "2rm", md: "32rpx" },
                  mb: "1rem",
                }}
              >
                Welcome to the Culineer
                <br />
                Community!
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Hero;
