import { Badge } from "@material-ui/core";
import React from "react";
import { img_300, unavialable } from "../../config/config";
import "./MovieCard.css";

function MovieCard({ id, title, poster, date, media }) {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + " ---" : string;
  }
  return (
    <div className="movieCard">
      <Badge
        style={{ position: "absolute", top: 10, right: 19}}
        badgeContent={media === "tv" ? "Series" : "Movie"} color="primary"
      ></Badge>
      <img src={poster ? `${img_300}/${poster}` : unavialable} alt={title} />
      <h2 style={{ textAlign: "center" }}>{truncate(title, 15)}</h2>
    </div>
  );
}

export default MovieCard;
