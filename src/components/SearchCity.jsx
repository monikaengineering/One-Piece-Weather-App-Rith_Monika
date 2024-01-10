import React from 'react';
import { useState } from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";


export default function SearchCity({onSearch}) {
  const [search, setSearch] = useState('');

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(search);
    }
    console.log(search)
  };

  return (
    <div>
      <TextField
        className="custom-textfield"
        label="Enter the City ..."
        value={search}
        onChange={handleInputChange}
        InputProps={{
          endAdornment: (
        <IconButton onClick={handleSearch}>
          <SearchIcon />
        </IconButton>
          )
        }}
      />
    </div>
  );
}
