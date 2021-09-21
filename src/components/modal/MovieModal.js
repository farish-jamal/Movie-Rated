import React, { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { img_300, img_500, unavialable } from "../../config/config";
import { Button } from "@mui/material";
import YouTubeIcon from '@mui/icons-material/YouTube';
import './MovieModal.css'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  height: "90%",
  backgroundColor: "background.paper",
  border: "1px solid #000",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function MovieModal({ children, media, id }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [video, setVideo] = useState();
  const [content, setContent] = useState();

  const fetchContent = async () => {
    const url = `https://api.themoviedb.org/3/${media}/${id}?api_key=f3356f78904a7602215ab2fccacb4356&language=en-US`;
    const data = await fetch(url);
    const parsedData = await data.json();
    console.log(parsedData);
    setContent(parsedData);
  };
  const fetchVideos = async () => {
    const url = `https://api.themoviedb.org/3/${media}/${id}/videos?api_key=f3356f78904a7602215ab2fccacb4356&language=en-US`;
    const data = await fetch(url);
    const parsedData = await data.json();
    setVideo(parsedData.results[0]?.key);
  };

  useEffect(() => {
    fetchContent();
    fetchVideos();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div onClick={handleOpen} className="movieCard">
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {content && (
              <div className="modal">
                <div className="img">
                <img
                  src={
                    content.backdrop_path
                      ? `${img_500}/${content.backdrop_path}`
                      : unavialable
                  }
                  alt={content.title}
                  className="poster_landscape"
                />
                </div>
                <div className="title">
                  <h3>
                    {content.title || content.name}(
                    <span>
                      {(
                        content.first_air_date || content.release_date
                      ).substring(0, 4)}
                    </span>
                    )
                  </h3>
                  <i>{content.tagline}</i>
                  <h4>{content.overview}</h4>
                </div>
                <div className="button">
                  <Button variant="contained" startIcon={<YouTubeIcon />} color="error">GO TO YOUTUBE</Button>
                </div>
              </div>
            )}
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
