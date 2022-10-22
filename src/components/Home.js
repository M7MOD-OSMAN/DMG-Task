import React, { useEffect, useState } from 'react'
import Users from './Users'
import Pagination from './Pagination'
import axios from 'axios'

const Home = () => {
  const getUrl = 'https://dmgian.corp-dmg.com/osman-task-api/getAllUsers'

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [pageNumber, setPageNumber] = useState(0)

  const usersPerPage = 3
  const pagesVisited = pageNumber * usersPerPage

  const pageCount = Math.ceil(users.length / usersPerPage)

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return <Users key={user.id} user={user} loading={loading} />
    })
  // the following two useEffects are to persist the current page in case of refreshing the page by the user
  useEffect(() => {
    const pageNumber = window.localStorage.getItem('pageNumber')
    setPageNumber(JSON.parse(pageNumber))
  }, [])

  useEffect(() => {
    window.localStorage.setItem('pageNumber', JSON.stringify(pageNumber))
  })

  useEffect(() => {
    const postUsers = async () => {
      setLoading(true)
      const res = await axios.get(getUrl)
      setUsers(res.data.data)
      setLoading(false)
    }

    postUsers()
  }, [])

  const logOut = () => {
    localStorage.removeItem('signUp')
    window.location.reload()
  }

  return (
    <div className='home-container'>
      <h1 className=' mb-1 user-heading'>Users DB</h1>
      {displayUsers}

      <Pagination pageCount={pageCount} changePage={changePage} />

      <div className='return-btn-container'>
        <button className='return-btn' onClick={logOut}>
          Return to Registration
        </button>
      </div>
    </div>
  )
}

export default Home
