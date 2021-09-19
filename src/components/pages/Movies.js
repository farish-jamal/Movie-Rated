import React, { useState, useEffect } from "react";
import SingleMovie from "../movieCard/SingleMovie";
import "./Trending.css";
import CoustomPagination from "../pagination/CoustomPagination";

function Movies({ setProgress }) {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const numofPages = 500;

  const fetchData = async () => {
    setProgress(40);
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_video=false&page=${page}`;
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
    <div>
      <>
        <div className="pageTitle">Movies</div>
        <div className="trending">
          <div className="trending">
            {content &&
              content.map((element) => (
                <SingleMovie
                  key={element.id}
                  title={element.title || element.name}
                  poster={element.poster_path}
                  rating={element.vote_average}
                />
              ))}
          </div>
        </div>
        <CoustomPagination setPage={setPage} numOfPages={numofPages} />
      </>
    </div>
  );
}

export default Movies;
