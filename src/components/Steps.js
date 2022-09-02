import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button, List, ListItem } from "@mui/material";

//images
import HeaderImage from "../assets/idea.png";
import HeaderImageTwo from "../assets/schedule.png";
import HeaderImageThree from "../assets/marketing.png";
import peopleIcon from "../assets/people-icon.png";
import searchIcon from "../assets/search-icon.png";
import downloadIcon from "../assets/download-icon.png";
import GooglePlay from "../assets/google.png";
import ApplePlay from "../assets/apple.png";
import Arrow from "../assets/arrow-line.png";
import { useNavigate } from "react-router-dom";

const Steps = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("login", { replace: true });
  };
  return (
    <Box
      sx={{
        pt: "2rem",
        padding: { xs: "2rem", sm: "5rem" },
        maxWidth: "1440px",
        margin: "auto",
      }}
    >
      <Box component="div" sx={{ textAlign: "center", mb: "3rem" }}>
        <Typography
          className="font-p "
          variant="p"
          sx={{ letterSpacing: "2px", fontSize: { xs: "24px", md: "56px" } }}
        >
          Here are the next steps:
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            textAlign: { xs: "center" },
            maxWidth: { md: "408px", xs: "100%" },
            overflow: "hidden",
          }}
        >
          <img
            className="header-img"
            src={HeaderImage}
            style={{ width: "100%" }}
            alt="Header "
          />
        </Grid>
        <Grid marginBottom={5} item xs={12} md={8}>
          <Box
            sx={{
              height: "100%",
              justifyContent: "flex-start",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h3"
              fontWeight="600"
              className="font-p"
              marginBottom={2}
              sx={{
                fontSize: { md: "56px", xs: "24px" },
              }}
            >
              Download the Culineer app to your mobile device
            </Typography>

            <Typography
              className="font"
              variant="li"
              marginBottom={3}
              sx={{
                fontSize: { xs: "20px", md: "20px" },
                fontWeight: "400",
              }}
            >
              1. Navigate to your profile
            </Typography>
            <Typography
              className="font"
              variant="li"
              marginBottom={3}
              sx={{
                fontSize: { xs: "20px", md: "20px" },
                fontWeight: "400",
              }}
            >
              2. Set up your community profile.
            </Typography>
            <Typography
              className="font"
              variant="li"
              marginBottom={3}
              sx={{
                fontSize: { xs: "20px", md: "20px" },
                fontWeight: "400",
              }}
            >
              3. Add a cookbook and some recipes
            </Typography>
            <Box
              component="div"
              sx={{
                display: "flex",
                gap: "5px",
                justifyContent: { xs: "flex-start", md: "flex-start" },
              }}
            >
              <a href="https:culineer.app">
                <Button
                  sx={{
                    p: "0",
                    ml: { xs: "0", md: "1rem" },
                    width: { xs: "171px" },
                  }}
                >
                  <img
                    src={ApplePlay}
                    alt="Apple Play"
                    style={{ width: "100%" }}
                  />
                </Button>
              </a>
              <a href="https:culineer.app">
                <Button sx={{ p: "0", width: { xs: "171px" } }}>
                  <img
                    src={GooglePlay}
                    alt="Google Play"
                    style={{ width: "100%" }}
                  />
                </Button>
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Section 2 */}
      <Grid
        // marginBottom={5}
        sx={{
          height: "100%",
          justifyContent: "flex-start",
          alignItems: "center",
          display: "flex",
          flexDirection: { md: "row", xs: "column-reverse" },
        }}
        container
        spacing={2}
      >
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: "100%",
              justifyContent: "flex-start",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h3"
              fontWeight="600"
              className="font-p"
              marginBottom={2}
              sx={{
                fontSize: { md: "56px", xs: "24px" },
              }}
            >
              Schedule an onboarding session with our team
            </Typography>
            <Typography
              fontWeight="400"
              className="font"
              marginBottom={2}
              sx={{
                display: { xs: "block" },
                color: "#4D4D4D",
                fontSize: { xs: "16px", md: "16px" },
              }}
            >
              Coming together is a beginning, staying together is progress, and
              working together is success
            </Typography>
            <Button
              className="font"
              sx={{
                textTransform: "capitalize",
                letterSpacing: "2px",
                width: "222px",
                color: "#FFF",
                backgroundColor: "#85C34A",
                borderRadius: "50px",
                p: "18px 0rem",
                m: { xs: "0 0 0 16vw", md: "0" },
                "&:hover": {
                  opacity: 0.8,
                  // color: '#000',
                  backgroundColor: "#85C34A",
                },
              }}
            >
              SCHEDULE MEETING
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // maxHeight: "400px",
            maxWidth: { md: "572px", xs: "100%" },
            overflow: "hidden",
          }}
        >
          <img
            className="header-img"
            src={HeaderImageTwo}
            style={{ width: "100%" }}
            alt="Header "
          />
        </Grid>
      </Grid>

      {/* Section 3 */}
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            m: { xs: "30px 0 0 0", md: "0" },
            overflow: "hidden",
          }}
        >
          <img
            className="header-img"
            src={HeaderImageThree}
            style={{
              width: { md: "520px", xs: "100%" },
              maxWidth: { md: "520px", xs: "100%" },
            }}
            alt="Header "
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <Box sx={{ height: "100%" }} className="col-flex">
            <Typography
              variant="h3"
              fontWeight="600"
              className="font-p"
              marginBottom={2}
              sx={{
                fontSize: { md: "56px", xs: "24px" },
              }}
            >
              Look for your marketing tool kit to arrive in the mail
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Info */}
      <Grid container paddingTop={5}>
        <Grid item xs={12} md={12}>
          <Box
            sx={{
              height: "100%",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="col-flex"
          >
            <Typography
              variant="h4"
              fontWeight="400"
              className="font"
              marginBottom={2}
              sx={{
                fontSize: { md: "56px", xs: "24px" },
              }}
            >
              Culineer is a mobile first platform. The mobile app is full
              featured and the best place to engage your customers.
            </Typography>
            <Typography
              variant="p"
              className="font"
              marginBottom={5}
              sx={{
                fontSize: "18px",
                color: "#4D4D4D",
              }}
            >
              To make it easy to add and manage your recipe content we also have
              limited feature website
            </Typography>
            <a href={"https:culineer.net"}>
              <Button
                className="font-p"
                onClick={handleNavigate}
                sx={{
                  textTransform: "capitalize",
                  letterSpacing: "2px",
                  textDecoration: "none",
                  color: "#FFF",
                  backgroundColor: "#85C34A",
                  borderRadius: "50px",
                  p: "18px 32px",
                  "&:hover": {
                    opacity: 0.8,
                    // color: '#000',
                    backgroundColor: "#85C34A",
                  },
                }}
              >
                LOG IN
              </Button>
            </a>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Steps;
