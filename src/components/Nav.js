import React from "react";
import { Link } from "react-router-dom";

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
    <div className="nav">
      <FormControl sx={{ m: 1, minWidth: 120, padding: 5 }}>
        <InputLabel
          sx={{ padding: 5, textAlign: "center" }}
          className="nav-font"
        >
          NAVIGATE
        </InputLabel>
        <Select
          className="nav-font"
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
