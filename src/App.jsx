import { useState } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInfo'
import ResumeHeader from './components/ResumeHeader'
import EducationInfo from './components/EducationInfo'
import EducationDisplay from './components/EducationDisplay'

function App() {

  const [user, setUser] = useState({
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'first@email.com',
    phone: '123456',
    address: '123 Main St',
  })

  let nextID = 0;

  const [educationArray, setEducationArray] = useState([
    {
      id: 0,
      school: 'school name',
      degree: 'degree',
      startDate: 'date', 
      endDate: 'date',
      location: 'location'
    },
    {
      id: 1,
      school: 'school name2',
      degree: 'degree',
      startDate: 'date', 
      endDate: 'date',
      location: 'location'
    },
    
  ])

  function handleUserChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  function handleEducationChange(id, e) {
    setEducationArray(
      educationArray.map(education => {
        if (education.school === id) {
          return {...education, [e.target.name]: e.target.value}
        } else {
          return education
        }
      })
    )
  }
  // [e.target.name]: e.target.value
  
  const educationList = educationArray.map((education) => {
    return (
      <>
        <EducationInfo {...education} onChange={handleEducationChange}/>
        <EducationDisplay {...education}/>
      </>
    )
    
  })

  return (
    <div className='main-container'>
      <div className="user-input-container">
        <GeneralInfo {...user} onChange={handleUserChange}/>
        {/* <EducationInfo {...educationArray} onChange={handleEducationChange}/>
        <EducationInfo {...educationArray} onChange={handleEducationChange}/> */}
      </div>
      <div className="user-output-container">
        <ResumeHeader {...user}/>
        {educationList}
        {/* <EducationDisplay {...educationArray}/>
        <EducationDisplay {...educationArray}/> */}
      </div>
    </div>
  )
}

export default App
