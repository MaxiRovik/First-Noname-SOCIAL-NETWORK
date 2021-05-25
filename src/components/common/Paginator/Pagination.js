import React, {useState}from 'react';
import classes from './Paginator.module.css';


const Pagination = ({totalItemsCount, usersInPage, currentPage, pageChangeEvent, fragmentSize=10}) => {

    let pagesCount = Math.ceil(totalItemsCount / usersInPage);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let fragmentCount = Math.ceil(pagesCount/fragmentSize);
    let [fragmentNumber, setFragmentNumber] = useState(1);
    // page numbers of fragment borders must be:
    let leftBorderPageNumber = (fragmentNumber-1)*fragmentSize +1;
    let rightBorderPageNumber = fragmentNumber*fragmentSize;

    return <div className={classes.paginationBlock}>
        {fragmentNumber > 1 &&
        <button
            className={classes.paginationButton}
            onClick ={()=>{setFragmentNumber(fragmentNumber-1)}}> PREV </button>}

            {pages.filter(p => p>= leftBorderPageNumber && p<=rightBorderPageNumber)
                .map((p) => {
                return <button
                    className={currentPage === p && classes.selectedPage}
                    key={p}
                    onClick={() => {
                            pageChangeEvent(p)
                    }}>{p}</button>
            })}
        {fragmentNumber < fragmentCount &&
        <button
            className={classes.paginationButton}
                onClick ={()=>{setFragmentNumber(fragmentNumber+1)}}> NEXT </button>}
        </div>
};
export default Pagination;