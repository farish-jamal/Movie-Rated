import React, { useState, useEffect } from "react";
import MovieCard from "../movieCard/MovieCard";
import "./Trending.css";
import CoustomPagination from "../pagination/CoustomPagination";

function Trending({ setProgress }) {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const numberofPages = 10;

  const fetchData = async () => {
    setProgress(40);
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=f3356f78904a7602215ab2fccacb4356&page=${page}`;
    const data = await fetch(url);
    setProgress(60);
    const parsedData = await data.json();
    setProgress(80);
    //    console.log(parsedData);
    setContent(parsedData.results);
    setProgress(100);
  };

  useEffect(() => {
    window.scroll(0,0)
    fetchData();
    // eslint-disable-next-line
  }, [page]);

  return (
    <>
      <div className="pageTitle">Trending Of The Day</div>
      <div className="trending">
        <div className="trending">
          {content &&
            content.map(
              (element) => (
                <MovieCard
                  key={element.id}
                  title={element.title || element.name}
                  poster={element.poster_path}
                  media={element.media_type}
                />
              )
              // console.log(element)
            )}
        </div>
      </div>
      <CoustomPagination setPage={setPage} numOfPages={numberofPages} />
    </>
  );
}

export default Trending;
