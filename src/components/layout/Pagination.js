import { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import { PaginationContainer, PaginationLink, PaginationLinkActive } from "../styles/SideBar.styles"

const Pagination = ({ data, setCurrentPage, currentPage, resultSize }) => {
    const [totalPages, setTotalPage] = useState([])
    
    const onChangeToPage = (event) => {
        event.preventDefault();
        setCurrentPage(Number(event.target.id));
    }
    const nextPage = (event) => { 
        event.preventDefault();
        if (Math.ceil(Number(data.total_results_size) / Number(resultSize)) === currentPage) {
            return false;
        } else {
            setCurrentPage(Number(currentPage) + 1)
        }
    }
    const previousPage = (event) => { 
        event.preventDefault();
        if (Number(currentPage) === 1) {
            return false;
        } else {
            setCurrentPage(Number(currentPage) - 1)
        }
    }
    useEffect(() => {
        let pages = []
        for (let i = 1; i <= Math.ceil(Number(data.total_results_size) / Number(resultSize)); i++) {
            pages.push(i);
        }
        setTotalPage(pages);
    }, [data])

    return (
        <PaginationContainer>
            <PaginationLink onClick={previousPage}>&laquo;</PaginationLink>
            {totalPages.map((page) => {
                if (Number(page) === Number(currentPage)) {
                    return (
                        <PaginationLinkActive key={page} id={page} onClick={onChangeToPage}>
                            {page}
                        </PaginationLinkActive>)
                } else {
                    return (
                        <PaginationLink key={page} id={page} onClick={onChangeToPage}>
                            {page}
                        </PaginationLink>)
                }
            })}
            <PaginationLink onClick={nextPage}>&raquo;</PaginationLink>
        </PaginationContainer>
    )
}

Pagination.propTypes = {
    data: PropTypes.object,
    setCurrentPage: PropTypes.func, 
    currentPage: PropTypes.number, 
    resultSize: PropTypes.number,
}

export default Pagination