import { useState } from 'react'
import FormInput from './components/FormInput/FormInput'
import './App.css'
import Home from './components/Home'
import axios from 'axios'

function App() {
  const postUrl = 'https://dmgian.corp-dmg.com/osman-task-api/register'

  const [inputValues, setInputValues] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })

  const [loggedIn, setLoggedIn] = useState(false)

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      label: 'User Name',
      placeholder: 'User Name',
      required: true,
      pattern: '^[A-Za-z0-9]{3,16}$',
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      label: 'Email',
      placeholder: 'Email',
      required: true,
      errorMessage: 'It should be a valid email address',
    },
    {
      id: 3,
      name: 'phone',
      type: 'text',
      label: 'Phone Number',
      placeholder: 'Phone Number',
      required: true,
      errorMessage: 'It should start with (01) and have 11 numbers in total',
      pattern: `^01[0-9]{9}$`,
    },
    {
      id: 4,
      name: 'password',
      type: 'password',
      label: 'Password',
      placeholder: 'Password',
      required: true,
      errorMessage:
        'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    },
    {
      id: 5,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      errorMessage: 'Passwords do not match!',
      label: 'Confirm Password',
      required: true,
      pattern: inputValues.password,
    },
  ]
  const onChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axios.post(postUrl, inputValues)
    console.log(res.data.data)
    setLoggedIn(true)
  }

  return (
    <div className='app'>
      {loggedIn !== true ? (
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={inputValues[input.name]}
              onChange={onChange}
            />
          ))}
          <button>Submit</button>
        </form>
      ) : (
        <Home />
      )}
    </div>
  )
}

export default App
