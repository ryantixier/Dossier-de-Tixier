import * as React from "react";
import { Link } from "@mui/material";
import { Paper } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  const LinkedIn = "https://www.linkedin.com/in/ryan-tixier-b8988470/";
  const GitHub = "https://github.com/ryantixier";

  return (
    <Paper
      sx={{
        background: "black",
        position: "fixed",
        justifyContent: "center",
        width: "600px",
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 3,
      }}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction
          component={Link}
          href={LinkedIn}
          label="LinkedIn"
          icon={<LinkedInIcon />}
        />
        <BottomNavigationAction
          component={Link}
          href={GitHub}
          label="Github"
          icon={<GitHubIcon />}
        />
        <BottomNavigationAction label="Email" icon={<EmailIcon />} />
      </BottomNavigation>
    </Paper>
  );
}

// need linkedin link
// need gmail link
// need GH link
// incorporate avatar
// add icons from material ui
