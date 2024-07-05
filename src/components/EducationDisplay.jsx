export default function EducationDisplay(props) {

    return (
        <div className="education-display-div" >
            <h1>{props.school}</h1>
            <h2>{props.degree}</h2>
            <h2>{props.startDate}</h2>
            <h2>{props.endDate}</h2>
            <h2>{props.location}</h2>
        </div>
    )
}