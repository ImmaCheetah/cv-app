import { useState } from 'react'
import './App.css'
import PersonalDetails from './components/PersonalDetails'


function App() {

  const [user, setUser] = useState({
    firstName: 'Bob',
    lastName: 'Job',
    email: 'bob@email.com',
    phone: '123456',
    address: '123 Main St',
  })

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }
  

  return (
    <div className='main-container'>
      <div className="user-input-container">
        <PersonalDetails {...user} onChange={handleChange}/>
      </div>
      <div className="user-output-container">
        <h2>{user.firstName} </h2>
        <h3>{user.lastName}</h3>
      </div>
    </div>
  )
}

export default App
