import '../styles/education.css'

export default function EducationDisplay(props) {
    const list = props.educationArray.map((education) => {
        return (
            <div className="display education-div">
                <div className="left-info">
                    <p className='degree'>{education.degree}</p>
                    <p className='school'>{education.school}</p>
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
            {list}
        </>
    )
}