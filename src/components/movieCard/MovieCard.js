import React from "react";
import { img_300, unavialable } from "../../config/config";
import "./MovieCard.css";

function MovieCard({ id, title, poster, date, media, vote }) {

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + " ---" : string;
      }
  return (
    <div className="movieCard">
      <img src={poster ? `${img_300}/${poster}` : unavialable} alt={title} />
      <h2 style={{ textAlign: "center" }}>{truncate(title , 15)}</h2>
    </div>
  );
}

export default MovieCard;
