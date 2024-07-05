export default function EducationInfo(props) {
    console.log(props)
    return (
        <div className="education-info-div" >
            <h1>Education Info</h1>
            <input name="school" type="text" placeholder="School" value={props.school} onChange={props.onChange}/>
            <input name="degree" type="text" placeholder="Degree" value={props.degree} onChange={props.onChange}/>
            <input name="startDate" type="text" placeholder="Start Date" value={props.startDate} onChange={props.onChange}/>
            <input name="endDate" type="text" placeholder="End Date" value={props.endDate} onChange={props.onChange}/>
            <input name="location" type="text" placeholder="Location" value={props.location} onChange={props.onChange}/>
        </div>
    )
}