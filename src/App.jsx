import { useState } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInfo'
import ResumeHeader from './components/ResumeHeader'
import EducationInfo from './components/EducationInfo'
import EducationDisplay from './components/EducationDisplay'

function App() {
  let nextID = 1;

  const [activeIndex, setActiveIndex] = useState(0);

  const [user, setUser] = useState({
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'first@email.com',
    phone: '123456',
    address: '123 Main St',
  })

  const [educationArray, setEducationArray] = useState([
    {
      id: 1,
      school: 'school name',
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
      educationArray.map((education) => {
        if (education.id === id) {
          return {...education, [e.target.name]: e.target.value}
        } else {
          return education
        }
      })
    )
  }
  
  function addEducation() {
    setEducationArray(prevEducation => {
      return [...prevEducation, {
        id: prevEducation.length + 1,
        school: 'school name2',
        degree: 'degree',
        startDate: 'date', 
        endDate: 'date',
        location: 'location'
      }]
    })
    console.log(educationArray)
  }
  
  const educationList = educationArray.map((education, index) => {
    return (
      <>
        <EducationInfo 
          {...education} 
          isActive={activeIndex === index} 
          onClick={() => setActiveIndex(index)}
          onToggle={() => setActiveIndex(false)}
          onChange={(e) => handleEducationChange(education.id, e)} 
        />
      </>
    )
  })

  return (
    <div className='main-container'>
      <div className="user-input-container">
        <GeneralInfo {...user} onChange={handleUserChange}/>
        <div className='education-info-div'>
          <h1>Education Info</h1>
          {educationList}
          <button onClick={addEducation}>Add Education</button>
        </div>
      </div>
      <div className="user-output-container">
        <ResumeHeader {...user}/>
        <EducationDisplay educationArray={educationArray}/>
      </div>
    </div>
  )
}

export default App
