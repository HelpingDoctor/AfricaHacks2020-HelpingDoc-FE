import React, { useState } from "react";
import "./SearchPatient.css";

const SearchPatient = ({ searchText }) => {
  const [text, setText] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    searchText(text);
  };
  return (
    <div className="right-1 align-self-center">
      <form onSubmit={submitHandler} class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2 contacts-search-box text-center"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchPatient;
