import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

const BoxStyle = {
  display: "flex",
  justifyContent: "flex-end",
  color: "white",
};
const TypographyStyle = {
  '@media (max-width: 600px)': {
    width: "100%",
  }
}
export const ComponentSlider = ({ id, name, value, state }) => {
  const handleChange = (event, newValue) => {
    state(newValue);
  };
  return (
    <Box sx={BoxStyle}>
      <Typography sx={TypographyStyle} variant="h6" gutterBottom>
        {name}
      </Typography>
      <Box sx={{ width: 300, ml: "20px", mr: "10px" }}>
        <Slider
          aria-label={id}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={0}
          max={12}
        />
      </Box>
      <Typography variant="h6" gutterBottom>
        {value}
      </Typography>
    </Box>
  );
};
