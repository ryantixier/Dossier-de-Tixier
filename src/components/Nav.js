import React from "react";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

//
//
//
//

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Nav() {
  const color = "black";

  const [navigation, setNavigation] = React.useState("");

  const handleNavigation = (event) => {
    setNavigation(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120, padding: 5 }} size="medium">
        <InputLabel
          sx={{ padding: 5, textAlign: "center" }}
          id="select-medium-label"
          className="nav-font"
        >
          NAVIGATE
        </InputLabel>
        <Select
          labelId="select-medium-label"
          className="nav-font"
          id="demo-select-medium"
          value={navigation}
          label="Navigation"
          onChange={handleNavigation}
        >
          <MenuItem component={Link} to="/" sx={{ color }} value="About">
            About
          </MenuItem>
          <MenuItem
            component={Link}
            to="/portfolio"
            sx={{ color }}
            value="Portfolio"
          >
            Portfolio
          </MenuItem>
          <MenuItem component={Link} to="/resume" sx={{ color }} value="Resume">
            Resume
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
