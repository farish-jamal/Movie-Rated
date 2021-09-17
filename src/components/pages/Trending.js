import React,{useState , useEffect} from 'react';
import MovieCard from '../movieCard/MovieCard';
import './Trending.css'

function Trending() {

    const [content, setContent] = useState([]);

    const fetchData = async() =>{
       const url =
      " https://api.themoviedb.org/3/trending/all/day?api_key=f3356f78904a7602215ab2fccacb4356";
       const data = await fetch(url);
       const parsedData = await data.json()
    //    console.log(parsedData);
       setContent(parsedData.results)
    }


    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
        <div className="pageTitle">Trending</div>
        <div className= "trending">
            <div className="trending">
                {
                    content && content.map((element) =>
                        <MovieCard id ={element.id} title={element.title || element.name} poster={element.poster_path} date={element.first_air_date || element.release_date} media={element.media_type} vote={element.vote_average}/>
                        // console.log(element)
                    )
                }
            </div>
        </div>
        </>
    )
}

export default Trending
