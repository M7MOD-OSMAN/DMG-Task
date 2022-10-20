import React, { useEffect, useState } from 'react'
import Users from './Users'
import Pagination from './Pagination'
import axios from 'axios'

const Home = () => {
  const getUrl = 'https://dmgian.corp-dmg.com/osman-task-api/getAllUsers'

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage] = useState(4)

  useEffect(() => {
    const postUsers = async () => {
      setLoading(true)
      const res = await axios.get(getUrl)
      setUsers(res.data.data)
      setLoading(false)
    }

    postUsers()
  }, [])

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage
  const indexOfFirstPost = indexOfLastUser - usersPerPage
  const currentUsers = users.slice(indexOfFirstPost, indexOfLastUser)

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className='container mt-5 home'>
      <h1 className=' mb-3 user-heading'>Users DB</h1>
      <Users users={currentUsers} loading={loading} />
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
      />
    </div>
  )
}

export default Home
