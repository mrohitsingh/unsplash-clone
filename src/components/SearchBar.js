import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../unsplash.png";
import "./SearchBox.css";

function Navbar() {
  const [imageSearchQuery, setImageSearchQuery] = useState("");

  function searchPhoto(e) {
    e.preventDefault();
    setImageSearchQuery(e.target.value);
  }

  return (
    <div>
      <nav>
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <form>
          <input
            type="text"
            onChange={searchPhoto}
            placeholder="Search Images"
          />
          <Link to={`/images/${imageSearchQuery}`} id="btn">
            <button type="submit">Search</button>
          </Link>
        </form>
      </nav>
    </div>
  );
}

export default Navbar;
