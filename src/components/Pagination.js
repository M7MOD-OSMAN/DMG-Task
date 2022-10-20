import React from 'react'

const Pagination = ({
  usersPerPage,
  totalUsers,
  paginate,
  setCurrentPage,
  currentPage,
  users,
}) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i)
  }

  const nextPage = () => setCurrentPage((prev) => prev + 1)
  const prevPage = () => setCurrentPage((prev) => prev - 1)

  return (
    <nav>
      <ul className='pagination'>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Prev Page
        </button>
        {pageNumbers
          .map((number) => (
            <li key={number} className='page-item'>
              <a
                onClick={(e) => {
                  e.preventDefault()
                  paginate(number)
                }}
                href='!#'
                className='page-link'
              >
                {number}
              </a>
            </li>
          ))
          .slice(0, 4)}
        <button className='nxt-btn' onClick={nextPage} disabled={!users.length}>
          Next Page
        </button>
      </ul>
    </nav>
  )
}

export default Pagination
