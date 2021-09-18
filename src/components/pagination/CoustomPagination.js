import React from 'react'
import Pagination from '@mui/material/Pagination';

function CoustomPagination({setPage, numOfPages = 10}) {
    const handleClick = (page) => {
        window.scroll(0, 0);
        setPage(page)
    }
    return (
        <div style={{width: "100%", display: "flex", justifyContent: "center", margin: 20}}>
            <Pagination onChange={(e) => handleClick(e.target.textContent)} count={numOfPages} color="primary" hideNextButton = 'false' hidePrevButton = 'false'/>
        </div>
    )
}

export default CoustomPagination
