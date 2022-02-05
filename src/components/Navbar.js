import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUnsplash, FaSearch } from "react-icons/fa";
import { SiGooglelens } from "react-icons/si";
import "./SearchBox.css";

function Navbar() {
  const [imageSearchQuery, setImageSearchQuery] = useState("");

  function searchPhoto(e) {
    e.preventDefault();
    setImageSearchQuery(e.target.value);
  }

  const coverImage =
    "https://images.unsplash.com/photo-1642616761188-999cda84e89a";

  return (
    <div>
      {/* <nav>
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
                Advertise
              </a>
            </li>
            <li className="listElement">
              <a href="" className="anchorDiv">
                Blog
              </a>
            </li><li className="">
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
      </nav> */}

      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
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
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="clickable-element collapse navbar-collapse"
            id="navbarNavDropdown"
          >
            <ul className="Link-Element navbar-nav d-flex align-items-end">
              <li className="listElement">
                <a className="nav-link anchorDiv" aria-current="page" href="#">
                  Advertise
                </a>
              </li>
              <li className="listElement">
                <a className="nav-link anchorDiv" href="#">
                  Blog
                </a>
              </li>
            </ul>
            <div className="navElements d-flex justify-content-end">
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
          </div>
        </div>
      </nav>

      <div className="cover-photo">
        <img src={coverImage} alt="Cover" className="random" />
        <div className="cover-content">
          <div className="cover-heading">
            <div className="title">Unsplash</div>
            <div className="textColor">Beautiful, free photos.</div>
            <div className="textMargin">
              Gifted by the world’s most generous community of photographers. 🎁
            </div>
          </div>
          <div className="cover-search">
            <button className="searchCoverButton">
              <Link to={`/images/${imageSearchQuery}`} id="btn">
                <FaSearch type="submit" className="searchButton" />
              </Link>
            </button>
            <input
              className="coverSearchBox"
              type="text"
              onChange={searchPhoto}
              placeholder="Search free high-resolution photos"
            />
          </div>

          <div className="trending-search">
            <span className="textColor">Trending searches: </span>
            <span className="trendingText">business, </span>
            <span className="trendingText">computer, </span>
            <span className="trendingText">nature, </span>
            <span className="trendingText">love, </span>
            <span className="trendingText">house </span>
          </div>
        </div>
        <div className="footer-div">
          <div className="left-div">
            <span className="highlightText">Photo of the day by</span>{" "}
            <a className="linkDecoration" href="/@larabaeri">
              Lara Baeriswyl
            </a>
          </div>
          <div className="center-div">
            <span className="highlightText">Read more about the </span>
            <span>
              <a
                className="linkDecoration"
                href="https://unsplash.com/license"
                target="blank"
              >
                {" "}
                Unsplash License
              </a>
            </span>
          </div>
          <div className="hideDiv">Extream Right Div No Content Displayed</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
