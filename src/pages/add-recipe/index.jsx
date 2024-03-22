import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";


const countries = [
    'Ghana',
    'France',
    'Nigeria',
    
  ];
  

export default function Forms() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
    >
      <div>
        <TextField required id="outlined-title" label="Title" />

        <TextField id="outlinetd-description" label="Description" />
        <TextField id="outlined- country" label="Country" />
      </div>
    </Box>
  );
}
