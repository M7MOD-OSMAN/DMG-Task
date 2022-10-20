import React from 'react'

const Users = ({ users, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <ul className='list-group mb-4'>
      {users.map((user) => (
        <li key={user.id} className='list-group-item'>
          <p className='m-2'>
            <strong>ID: </strong>
            {user.id}
          </p>
          <p className='m-2'>
            <strong>Username:</strong> {user.username}
          </p>
          <p className='m-2'>
            <strong>Email:</strong> {user.email}
          </p>
          <p className='m-2'>
            <strong>Phone: </strong>
            {user.phone}
          </p>
        </li>
      ))}
    </ul>
  )
}

export default Users
