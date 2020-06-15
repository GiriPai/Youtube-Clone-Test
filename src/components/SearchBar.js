import React, { useState, useEffect } from "react";

import { Paper, TextField } from "@material-ui/core";

const SearchBar = ({ handleChange, handleSubmit }) => {
  // const [formData, setFormData] = useState("");

  // const handleChange = (e) => {
  //   setFormData(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  // };

  return (
    <Paper elevation={6} style={{ padding: "20px" }}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <TextField
          fullWidth
          label="Search..."
          onChange={(e) => handleChange(e)}
        />
      </form>
    </Paper>
  );
};

export default SearchBar;
