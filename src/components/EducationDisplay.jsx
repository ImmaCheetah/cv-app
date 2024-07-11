import '../styles/section.css'

export default function EducationDisplay(props) {
    const list = props.educationArray.map((education) => {
        return (
            <div className="display education-div">
                <div className="left-info">
                    <p className='left-header degree'>{education.degree}</p>
                    <p className='left-header-desc school'>{education.school}</p>
                </div>
                <div className="right-info">
                    <p className='date'>{education.startDate} {education.endDate && '-'} {education.endDate}</p>
                    <p className='location'>{education.location}</p>
                </div>
            </div>
        )
    })

    return (
        <>
            <h5 className='section-header'>Education</h5>
            {list}
        </>
    )
}