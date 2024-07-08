export default function EducationDisplay(props) {
    const list = props.educationArray.map((education) => {
        return (
            <div>
                <h1>{education.school}</h1>
                <h2>{education.degree}</h2>
                <h2>{education.startDate}</h2>
                <h2>{education.endDate}</h2>
                <h2>{education.location}</h2>
            </div>
        )
    })

    return (
        <div className="education-display-div" >
            {list}
        </div>
    )
}