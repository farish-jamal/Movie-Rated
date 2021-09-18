import React, { useState, useEffect } from "react";
import MovieCard from "../movieCard/MovieCard";
import "./Trending.css";
import CoustomPagination from "../pagination/CoustomPagination";

function Trending({setProgress}) {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchData = async () => {
    setProgress(40);
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`;
    const data = await fetch(url);
    setProgress(60);
    const parsedData = await data.json();
    setProgress(80);
    //    console.log(parsedData);
    setContent(parsedData.results);
    setProgress(100);
  };

  useEffect(() => {
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
                  id={element.id}
                  title={element.title || element.name}
                  poster={element.poster_path}
                  date={element.first_air_date || element.release_date}
                  media={element.media_type}
                  vote={element.vote_average}
                />
              )
              // console.log(element)
            )}
        </div>
      </div>
      <CoustomPagination setPage={setPage} />
    </>
  );
}

export default Trending;
