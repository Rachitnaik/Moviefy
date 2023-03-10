import React, { useState, useCallback, useMemo } from "react";
import { debounce } from "lodash";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

function SearchB(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const debouncedSearch = useCallback(
    debounce((value) => {
      props.datat(value);
    }, 1000),
    [props.datat]
  );

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
    debouncedSearch(event.target.value);
    //console.log(setSearchTerm);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(event);
  };
  return (
    <form
      onSubmit={handleSubmit}
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "24ch" },
      }}
      noValidate
      autoComplete="on"
    >
      <Box>
        <TextField
          id="input-with-icon-textfield"
          /*  label="Type Your Search" */
          label="Type Your Movie"
          value={searchTerm}
          onChange={handleSearchTermChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "white" }} />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        {/*  <TextField
          id="standard-search"
          label="Type To Search"
          type="search"
          variant="standard"
          value={searchTerm}
          onChange={handleSearchTermChange}
        /> */}
      </Box>
    </form>
  );
}

export default SearchB;
