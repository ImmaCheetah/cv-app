import { useState } from "react"

export default function EducationInfo(props) {
    const [isActive, setIsActive] = useState(false)

    function toggleForm(e) {
        e.preventDefault()

        setIsActive(!isActive)
    } 
    return (
        <form className="education-info-form" >
            {!isActive && <h3>{props.school}</h3>}
            {isActive &&     
            <>
                <label htmlFor="school">School</label>
                <input
                    type="text"
                    placeholder="School"
                    id="school"
                    name="school"
                    value={props.school}
                    onChange={props.onChange}
                />
                <label htmlFor="degree">Degree</label>
                <input
                    type="text"
                    placeholder="Degree"
                    id="degree"
                    name="degree"
                    value={props.degree}
                    onChange={props.onChange}
                />
                <label htmlFor="start-date">Start Date</label>
                <input
                    type="text"
                    placeholder="Start Date"
                    id="start-date"
                    name="startDate"
                    value={props.startDate}
                    onChange={props.onChange}
                />
                <label htmlFor="end-date">End Date</label>
                <input
                    type="text"
                    placeholder="End Date"
                    id="end-date"
                    name="endDate"
                    value={props.endDate}
                    onChange={props.onChange}
                />
                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    placeholder="Location"
                    id="location"
                    name="location"
                    value={props.location}
                    onChange={props.onChange}
                />
                {/* <button>Save</button> */}
            </>
            }
            <button onClick={toggleForm}>
                {isActive ? "Save" : "Edit"}
            </button>
        </form>
    )
}