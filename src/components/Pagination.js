import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({ usersPerPage, totalUsers, setCurrentPage }) => {
  const pageCount = Math.ceil(totalUsers / usersPerPage)
  const changePage = ({ selected }) => {
    setCurrentPage(selected)
  }

  return (
    <ReactPaginate
      previousLabel={'Prev Page'}
      nextLabel={'Next'}
      pageRangeDisplayed={1}
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName={'paginationBttns'}
      previousLinkClassName={'previousBttn'}
      nextLinkClassName={'nextBttn'}
      disabledClassName={'paginationDisabled'}
      activeClassName={'paginationActive'}
    />
  )
}

export default Pagination
