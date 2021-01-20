import React from 'react';

function Pagination({ totalPage, handleClick, handleClickNext,handleClickPrev,countPage}) {

    const page = [...Array(totalPage).keys()].map(num => num + 1);

    
    return (
        <div>
            <button onClick={handleClickPrev}>prev</button>
            {
                page.map((item, index) => {
                    return (
                        <button key={item} 
                        className={countPage === item ? "border" : "none"}
                            onClick={() => handleClick(item)}
                        >{item}</button>

                    )
                })
            }
            <button onClick={handleClickNext}>next</button>
        </div>
    );
}

export default Pagination;