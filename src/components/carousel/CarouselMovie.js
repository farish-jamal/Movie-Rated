import React, {useState, useEffect} from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { img_300} from "../../config/config";
import './CarouselMovie.css'

const handleDragStart = (e) => e.preventDefault();

const Gallery = ({media, id}) => {
  const [credit, setCredit] = useState()
  const items = credit?.map((element) => (
    <div className="crouseal">
        <img src={element?.profile_path ?`${img_300}/${element.profile_path} `: "https://fireteller.com/wp-content/uploads/2020/09/Poster_Not_Available2.jpg"} onDragStart={handleDragStart}  alt={element?.name} className="crouseal_img"/>
        <b className="crouseal_name">{element?.name}</b>
    </div>
 
));

const responsive ={
  0: {
    items: 3,
  },
  512: {
    items: 5,
  },
  1024: {
    items: 7,
  },
}
  const fetchCredits = async() => {
    const url = `https://api.themoviedb.org/3/${media}/${id}/credits?api_key=f3356f78904a7602215ab2fccacb4356`;
    const data = await fetch(url);
    const parsedData = await data.json();
    setCredit(parsedData.cast);
  }

  useEffect(() => {
    fetchCredits()
    // eslint-disable-next-line 
  }, [])
  return (
    <AliceCarousel mouseTracking responsive={responsive} infinite autoPlay disableDotsControls disableButtonsControls items={items} />
  );
}

export default Gallery;