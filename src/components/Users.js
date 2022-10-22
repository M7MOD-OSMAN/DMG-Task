import React from 'react'

const Users = ({ user, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <div className='users-container'>
      <ul className='list-group '>
        {/* {users.map((user) => ( */}
        <li key={user.id} className='list-group-item'>
          <p className=''>
            <strong>ID: </strong>
            {user.id}
          </p>
          <p className=''>
            <strong>Username:</strong> {user.username}
          </p>
          <p className=''>
            <strong>Email:</strong> {user.email}
          </p>
          <p className=''>
            <strong>Phone: </strong>
            {user.phone}
          </p>
        </li>
        {/* ))} */}
      </ul>
    </div>
  )
}

export default Users
