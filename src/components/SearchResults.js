import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { h as header } from "../token";

let timeout;

function SearchResults() {
  let { query } = useParams();
  const page = useRef(1);
  const dataLoading = useRef(false);
  const [colCount, setColCount] = useState(getColCount);

  const [data, setData] = useState([]);

  const getImagesWithColumns = () => {
    const arr = [];
    for (let i = 0; i < colCount; i++) {
      arr.push([]);
    }
    for (let i = 0; i < data.length; i++) {
      arr[i % arr.length].push(data[i]);
    }

    return arr;
  };

  function getColCount() {
    if (window.innerWidth < 768 && window.innerWidth > 480) {
      return 2;
    }
    if (window.innerWidth < 480) {
      return 1;
    }
    if (window.innerWidth > 768) {
      return 3;
    }
  }

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setColCount(getColCount());
    });

    return window.removeEventListener("resize", (e) => {
      setColCount(getColCount());
    });
  }, []);

  async function loadData() {
    dataLoading.current = true;

    const uri = `https://api.unsplash.com/search/photos?page=${page.current}&per_page=12&query=${query}`;

    const req = new Request(uri, {
      method: "GET",
      headers: header,
      mode: "cors",
    });

    const res = await fetch(req);
    const data = await res.json();
    if (page.current === 1) {
      setData(data.results);
    } else {
      setData((prev) => [...prev, ...data.results]);
    }
    dataLoading.current = false;
  }

  useEffect(() => {
    try {
      loadData();
      page.current = 1;

      const listener = (e) => {
        if (
          document.documentElement.scrollTop + window.innerHeight >=
            document.documentElement.scrollHeight - window.innerHeight / 2 &&
          !dataLoading.current
        ) {
          if (timeout) {
            clearTimeout(timeout);
            timeout = null;
          }

          timeout = setTimeout(() => {
            page.current += 1;
            loadData();
          }, 100);
        }
      };
      window.addEventListener("scroll", listener);
      console.log("once");
      return () => {
        window.removeEventListener("scroll", listener);
      };
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const colWithImages = getImagesWithColumns();

  return (
    <div>
      <h1> {query.toUpperCase()} </h1>
      <div>
        <div className="imgContainer">
          {colWithImages.map((column, index) => (
            <div key={index}>
              {column.map((imgs) => (
                <div
                  key={imgs.id}
                  style={{
                    paddingBottom: "20px",
                  }}
                >
                  <img
                    className="images"
                    src={imgs.urls.regular}
                    alt={imgs.alt_descriptions}
                  />
                </div>
              ))}
            </div>
          ))}
          {dataLoading && <h1> Loading... </h1>}
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
