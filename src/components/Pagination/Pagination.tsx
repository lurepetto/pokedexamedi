import React from "react";
import "./Pagination.css";

const Pagination = (props: any) => {

    const {onLeftClick, onRightClick, page, totalPages} = props;

    return (
        <div className="pagination">
            <button onClick={onLeftClick} className="pagination-button">❮</button>
            <div className="pagination-text">Page {page} of {totalPages}</div>
            <button onClick={onRightClick} className="pagination-button">❯</button>
        </div>
    )
}

export default Pagination;