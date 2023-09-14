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

import { motion } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
        >
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
                <br />
                <Typography paragraph>
                  {/* PROPS: DEPLOY LINK */}
                  <a
                    className="site-links"
                    href={props.deployLink}
                    target="_blank"
                  >
                    Visit Site
                  </a>
                </Typography>
                <Typography paragraph>
                  {/* PROPS: GH LINK */}
                  <a
                    className="site-links"
                    href={props.githubLink}
                    target="_blank"
                  >
                    GitHub Repository
                  </a>
                </Typography>
              </CardContent>
            </Collapse>
          </CardContent>
        </motion.div>
      </Card>
    </>
  );
};
