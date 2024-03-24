// Forms.js
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FileUpload from "../../components/fileupload";
import "./form.css"; 

const countries = [
  {
    value: "CH",
    label: "China",
  },
  {
    value: "FR",
    label: "France",
  },
  {
    value: "GH",
    label: "Ghana",
  },
  {
    value: "NG",
    label: "Nigeria",
  },
];

export default function Form() {
  return (
    <Box
    sx={{
      "& .MuiTextField-root": { m: 1, width: "25ch" },
     
    }}
    noValidate
      component="form"
      className="form-container" 
      

    >
      <div>
        <TextField required id="outlined-title" label="Title" className="form-field" /> <br />
        <TextField id="outlinetd-description" label="Description" className="form-field" /> <br />
        <TextField
          id="outlined-select-country"
          select
          label="Select"
          defaultValue="Ghana"
          helperText="Please select your country"
          className="form-field"
        >
          {countries.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <br />
        <FileUpload className="form-field" />
      </div>
    </Box>
  );
}
