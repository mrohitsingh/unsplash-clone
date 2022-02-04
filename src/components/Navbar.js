import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUnsplash, FaSearch } from "react-icons/fa";
import { SiGooglelens } from "react-icons/si";
import "../styles/SearchBox/SearchBox.css";

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
          <FaUnsplash className="logo-image" />
        </Link>
        <form>
          <Link to={`/images/${imageSearchQuery}`} id="btn">
            <FaSearch type="submit" className="searchButton" />
          </Link>
          <input
            type="text"
            onChange={searchPhoto}
            placeholder="Search free high-resolution photos"
          />
        </form>
        <div className="clickable-element">
          <ul className="Link-Element">
            <li className="listElement">
              <a href="" className="anchorDiv">
                Home
              </a>
            </li>
            <li className="listElement">
              <a href="" className="anchorDiv">
                Collections
              </a>
            </li>
            <li className="listElement">
              <a href="" className="anchorDiv">
                Explore
              </a>
            </li>
            <li className="">
              <a href="" className="anchorDiv">
                <i className="fas fa-ellipsis-h" />
              </a>
            </li>
          </ul>
        </div>
        <div className="navElements">
          <div className="submitPhoto">
            <button className="submitButton">Submit a photo</button>
          </div>
          <div className="bell">
            <a href="#" className="bellIcon">
              <i className="fas fa-bell fa-1x" />
            </a>
          </div>
          <div className="avatar">
            <img src="{AvatarImg}" className="avatarImg" alt="" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
