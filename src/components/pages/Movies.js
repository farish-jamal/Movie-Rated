import React, { useState, useEffect } from "react";
import "./Trending.css";
import CoustomPagination from "../pagination/CoustomPagination";
import SingleMovie from "../movieCard/SingleMovie";

function Movies({ setProgress }) {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const numofPages = 500;
  const media = 'movie'

  const fetchData = async () => {
    setProgress(40);
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=f3356f78904a7602215ab2fccacb4356&language=en-US&sort_by=popularity.desc&include_video=false&page=${page}`;
    const data = await fetch(url);
    setProgress(60);
    const parsedData = await data.json();
    setProgress(80);
      //  console.log(parsedData);
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
        <div className="pageTitle">MOVIES</div>
        <div className="trending">
          <div className="trending">
            {content &&
              content.map((element) => (
                <SingleMovie
                  key={element.id}
                  id={element.id}
                  title={element.title || element.name}
                  poster={element.poster_path}
                  rating={element.vote_average}
                  media={media}
                />
              ))}
          </div>
        </div>
        <CoustomPagination setPage={setPage} numOfPages={numofPages} />
      </>
  );
}

export default Movies;
