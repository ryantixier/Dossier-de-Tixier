import React from "react";
import { Carousel } from "antd";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../assets/images/lilguy_with_eyes_workout_wizard_on_trans.png";

const contentStyle = {
  height: "200px",
  color: "white",
  lineHeight: "100px",
  textAlign: "center",
  background: "none",
};

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "0",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Portfolio() {
  const [dotPosition, setDotPosition] = React.useState("top");

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <h2 className="page-title">MY PORTFOLIO</h2>
      <Carousel dotPosition={dotPosition}>
        <div>
          <Card sx={{ maxWidth: 350, textAlign: "center" }}>
            <CardMedia
              component="img"
              height="400"
              image={require("../assets/images/lilguy_with_eyes_workout_wizard_on_trans.png")}
              alt="Workout Wizard"
            />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="header" color="text.secondary" sx={{}}>
                Workout Wizard
              </Typography>
              <CardActions sx={{ justifyContent: "center" }}>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    Workout Wizard is your soon-to-be favorite, new fitness
                    compainion; design and track workouts according to your
                    needs and goals!
                  </Typography>
                  <Typography paragraph>
                    <a href="https://the-workout-wizard-7d5c29c6d6dd.herokuapp.com/">
                      Click to View Site
                    </a>
                  </Typography>
                  <Typography paragraph>
                    <a href="https://github.com/ryantixier/Workout-Wizard">
                      GitHub:{" Workout Wizard"}
                    </a>
                  </Typography>
                  <Typography>DEMO CREDENTIALS...</Typography>
                  <Typography>Username: demoAccount</Typography>
                  <Typography>Password: Password1!</Typography>
                </CardContent>
              </Collapse>
            </CardContent>
          </Card>
        </div>
        <div>
          <h3 style={contentStyle}>Code Gauntlet</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Dr. Drink</h3>
        </div>
      </Carousel>
    </div>
  );
}
