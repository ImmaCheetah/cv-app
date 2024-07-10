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
        company: '',
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
        <div className="general-info-div">
          <h1>General Info</h1>
          <GeneralInfo
            {...user}
            onChange={handleUserChange}
          />
        </div>
        <div className='education-info-div'>
          <h2>Education Info</h2>
          <button className='add-btn' onClick={addEducation}>
            <svg className='add-btn-svg' viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>plus</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-362.000000, -1037.000000)" fill="#383838"> <path d="M390,1049 L382,1049 L382,1041 C382,1038.79 380.209,1037 378,1037 C375.791,1037 374,1038.79 374,1041 L374,1049 L366,1049 C363.791,1049 362,1050.79 362,1053 C362,1055.21 363.791,1057 366,1057 L374,1057 L374,1065 C374,1067.21 375.791,1069 378,1069 C380.209,1069 382,1067.21 382,1065 L382,1057 L390,1057 C392.209,1057 394,1055.21 394,1053 C394,1050.79 392.209,1049 390,1049" id="plus" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
          </button>
          {educationList}
        </div>
        <div className='experience-info-div'>
          <h3>Experience</h3>
          <button className='add-btn' onClick={addExperience}>
            <svg className='add-btn-svg' viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>plus</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-362.000000, -1037.000000)" fill="#383838"> <path d="M390,1049 L382,1049 L382,1041 C382,1038.79 380.209,1037 378,1037 C375.791,1037 374,1038.79 374,1041 L374,1049 L366,1049 C363.791,1049 362,1050.79 362,1053 C362,1055.21 363.791,1057 366,1057 L374,1057 L374,1065 C374,1067.21 375.791,1069 378,1069 C380.209,1069 382,1067.21 382,1065 L382,1057 L390,1057 C392.209,1057 394,1055.21 394,1053 C394,1050.79 392.209,1049 390,1049" id="plus" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
          </button>
          {experienceList}
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
