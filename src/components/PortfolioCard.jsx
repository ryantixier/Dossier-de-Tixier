//Imports
import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const PortfolioCard = (props) => {
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

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card className="card-style">
        {/* PROPS: ONLY 'image' AND 'alt' WILL REQUIRE A PROP */}
        <CardMedia
          component="img"
          height="300"
          image={props.image}
          alt={props.alt}
        />
        <CardContent sx={{ textAlign: "center" }}>
          <CardActions
            sx={{ justifyContent: "center", bgcolor: "primary.main" }}
          >
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
              {/* PROPS: DESCRIPTION */}
              <Typography paragraph>{props.description}</Typography>
              <Typography paragraph>
                {/* PROPS: DEPLOY LINK */}
                <a className="site-links" href={props.deployLink}>
                  Visit Site
                </a>
              </Typography>
              <Typography paragraph>
                {/* PROPS: GH LINK */}
                <a className="site-links" href={props.githubLink}>
                  GitHub Repository
                </a>
              </Typography>
            </CardContent>
          </Collapse>
        </CardContent>
      </Card>
    </>
  );
};
