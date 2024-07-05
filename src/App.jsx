import { useState } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInfo'
import ResumeHeader from './components/ResumeHeader'
import EducationInfo from './components/EducationInfo'
import EducationDisplay from './components/EducationDisplay'

function App() {

  const [user, setUser] = useState({
    firstName: 'Bob',
    lastName: 'Job',
    email: 'bob@email.com',
    phone: '123456',
    address: '123 Main St',
  })

  const [education, setEducation] = useState({
    school: 'school name',
    degree: 'degree',
    startDate: 'date', 
    endDate: 'date',
    location: 'location'
  })

  function handleUserChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  function handleEducationChange(e) {
    setEducation({
      ...education,
      [e.target.name]: e.target.value
    })
  }
  

  return (
    <div className='main-container'>
      <div className="user-input-container">
        <GeneralInfo {...user} onChange={handleUserChange}/>
        <EducationInfo {...education} onChange={handleEducationChange}/>
      </div>
      <div className="user-output-container">
        <ResumeHeader {...user}/>
        <EducationDisplay {...education}/>
        <EducationDisplay {...education}/>
      </div>
    </div>
  )
}

export default App
