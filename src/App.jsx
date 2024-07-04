import { useState } from 'react'
import './App.css'
import PersonalDetails from './components/PersonalDetails'


function App() {
  const [firstName, setFirstName] = useState('')

  function handleChange(e) {
    setFirstName(e.target.value)
  }

  return (
    <>
      <PersonalDetails onChange={handleChange}/>
      <h2>{firstName}</h2>
    </>
  )
}

export default App
