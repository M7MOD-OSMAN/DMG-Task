import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({ pageCount, changePage }) => {
  return (
    <ReactPaginate
      previousLabel={'Prev Page'}
      nextLabel={'Next'}
      pageRangeDisplayed={3}
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
