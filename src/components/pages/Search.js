import { Button, Tab, Tabs, TextField } from "@material-ui/core";
import React, {useState, useEffect} from "react";
import SearchIcon from "@material-ui/icons/Search";
import SingleMovie from "../movieCard/SingleMovie";
import CoustomPagination from "../pagination/CoustomPagination";

function Search({setProgress}) {
    const [type, setType] = useState(0)
    const [page, setPage] = useState(1)
    const [searchText, setSearchText] = useState("");
    const [content, setContent] = useState()
    const [numOfPages, setNumOfPages] = useState();
    
    const fetchSearch = async() =>{
        setProgress(40)
         const url = `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=f3356f78904a7602215ab2fccacb4356&language=en-US&query=${searchText}&page=${page}`
         const data = await fetch(url);
         setProgress(60)
         const parsedData = await data.json();
         setProgress(80)
         setContent(parsedData.results);
         setNumOfPages(parsedData.total_pages)
         setProgress(100)
    }

    useEffect(() => {
        window.scroll(0,0)
        fetchSearch()
        // eslint-disable-next-line
    }, [type, page])
  return (
      <div>
    <div style={{ display: "flex", margin: "10px 0" }}>
      <TextField
        style={{ flex: 1 }}
        className="searchBox"
        label="Search Movie Or Series"
        variant="filled"
        onChange={(e)=> setSearchText(e.target.value)}
      />
      <Button variant="contained" style={{ marginLeft: "10px" }} onClick={fetchSearch}>
        {" "}
        <SearchIcon />
      </Button>
    </div>
      <Tabs value={type} indicatorColor="primary" textColor = "primary" onChange={(event, newValue) => {
          setType(newValue);
          setPage(1)
      }} style={{paddingBottom: "5px"}}>
        <Tab style={{ width : '50%'}} label="Search Movies" />
        <Tab style={{ width : '50%'}} label="Search Series" />
      </Tabs>
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
              {
                  !searchText && !content && (type ? <h2>Search For Series</h2> : <h2>Search for Movies</h2>)
              }
          </div>
        </div>
        {
            numOfPages > 1 &&(
                <CoustomPagination setPage={setPage} numOfPages={numOfPages}/>
                
            )
        }
      </div>
  );
}

export default Search;
