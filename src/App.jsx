import { useState } from 'react'
import './styles/App.css'
import './styles/button.css'
import GeneralInfo from './components/GeneralInfo'
import ResumeHeader from './components/ResumeHeader'
import EducationInfo from './components/EducationInfo'
import EducationDisplay from './components/EducationDisplay'
import ExperienceInfo from './components/ExperienceInfo'
import ExperienceDisplay from './components/ExperienceDisplay'


function App() {
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
      school: '',
      degree: '',
      startDate: '', 
      endDate: '',
      location: ''
    },    
  ])

  const [experienceArray, setExperienceArray] = useState([
    {
      id: 1,
      company: '',
      title: '',
      startDate: '', 
      endDate: '',
      location: '',
      description: ''
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
        school: 'School Name',
        degree: '',
        startDate: '', 
        endDate: '',
        location: ''
      }]
    })
    console.log(educationArray)
  }

  function removeEducation(id) {
    setEducationArray(
      educationArray.filter((education) => {
        return education.id !== id
      })
    )
  }

  function handleExperienceChange(id, e) {
    setExperienceArray(
      experienceArray.map((experience) => {
        if (experience.id === id) {
          return {...experience, [e.target.name]: e.target.value}
        } else {
          return experience
        }
      })
    )
  }

  function addExperience() {
    setExperienceArray(prevExperience => {
      return [...prevExperience, {
        id: prevExperience.length + 1,
        company: 'Company Name',
        title: '',
        startDate: '', 
        endDate: '',
        location: '',
        description: ''
      }]
    })
  }

  function removeExperience(id) {
    setExperienceArray(
      experienceArray.filter((experience) => {
        return experience.id !== id
      })
    )
  }
  
  const educationList = educationArray.map((education, index) => {
    return (
      <>
        <EducationInfo 
          {...education} 
          isActive={activeIndex === index} 
          onClick={() => setActiveIndex(index)}
          onToggle={() => setActiveIndex(false)}
          onRemove={() => removeEducation(education.id)}
          onChange={(e) => handleEducationChange(education.id, e)} 
        />
      </>
    )
  })

  const experienceList = experienceArray.map((experience, index) => {
    return (
      <>
        <ExperienceInfo 
          {...experience} 
          isActive={activeIndex === index} 
          onClick={() => setActiveIndex(index)}
          onToggle={() => setActiveIndex(false)}
          onRemove={() => removeExperience(experience.id)}
          onChange={(e) => handleExperienceChange(experience.id, e)} 
        />
      </>
    )
  })

  return (
    <div className='main-container'>
      <div className="user-input-container">
        <h1>General Info</h1>
        <GeneralInfo 
          {...user} 
          onChange={handleUserChange}
        />
        <div className='education-info-div'>
          <h2>Education Info</h2>
          {educationList}
          <button onClick={addEducation}>Add Education</button>
        </div>
        <div className='experience-info-div'>
          <h3>Experience</h3>
          {experienceList}
          <button onClick={addExperience}>Add Experience</button>
        </div>
      </div>
      <div className="user-output-container">
        <ResumeHeader {...user}/>
        <EducationDisplay educationArray={educationArray}/>
        <ExperienceDisplay experienceArray={experienceArray}/>
      </div>
    </div>
  )
}

export default App
