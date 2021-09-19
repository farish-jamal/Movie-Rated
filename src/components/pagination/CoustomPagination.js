import React from 'react'
import Pagination from '@mui/material/Pagination';

function CoustomPagination({setPage, numOfPages}) {
    const handleClick = (page) => {
        window.scroll(0, 0);
        setPage(page)
    }
    return (
        <div style={{width: "100%", display: "flex", justifyContent: "center", margin: 20}}>
            <Pagination onChange={(e) => handleClick(e.target.textContent)} count={numOfPages} color="primary" hidePrevButton hideNextButton/>
        </div>
    )
}

export default CoustomPagination
