import React, { useEffect, useState } from 'react'
import Users from './Users'
import Pagination from './Pagination'
import axios from 'axios'

const Home = ({ setLoggedIn }) => {
  const getUrl = 'https://dmgian.corp-dmg.com/osman-task-api/getAllUsers'

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage] = useState(3)

  // the following two useEffects are to persist the current page in case of refreshing the page by the user
  useEffect(() => {
    const currentPage = window.localStorage.getItem('currentPage')
    setCurrentPage(JSON.parse(currentPage))
  }, [])

  useEffect(() => {
    window.localStorage.setItem('currentPage', JSON.stringify(currentPage))
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

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage
  const indexOfFirstPost = indexOfLastUser - usersPerPage
  const currentUsers = users.slice(indexOfFirstPost, indexOfLastUser)

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const logOut = () => {
    localStorage.removeItem('signUp')
    window.location.reload()
  }

  return (
    <div className='container mt-5 home'>
      <h1 className=' mb-3 user-heading'>Users DB</h1>
      <Users users={currentUsers} loading={loading} />
      <div className='pag-cont'>
        <div className='pag'>
          <Pagination
            usersPerPage={usersPerPage}
            totalUsers={users.length}
            paginate={paginate}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            users={users}
          />
        </div>
      </div>
      <button onClick={logOut}>Return to Registration</button>
    </div>
  )
}

export default Home
