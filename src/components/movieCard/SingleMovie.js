import { Badge } from "@material-ui/core";
import React from "react";
import { img_300, unavialable } from "../../config/config";
import "./MovieCard.css";
import MovieModal from '../modal/MovieModal'

function SingleMovie({ title, poster, rating, id , media }) {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + " ---" : string;
  }
  return (
    <MovieModal media={media} id={id}>
      <Badge
        style={{ position: "absolute", top: 10, right: 14 }}
        badgeContent={rating}
        color="primary"
      ></Badge>
      <img src={poster ? `${img_300}/${poster}` : unavialable} alt={title} />
      <h2 style={{ textAlign: "center"}}>{truncate(title, 15)}{media}</h2>
    </MovieModal>
  );
}

export default SingleMovie;
