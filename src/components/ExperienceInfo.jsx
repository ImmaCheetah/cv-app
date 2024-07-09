import '../styles/forms.css'

export default function ExperienceInfo(props) {
    return (
        <form className="experience-info form" >
            {!props.isActive && <h3>{props.company}</h3>}
            {props.isActive &&     
            <>
                <label htmlFor="company">Company</label>
                <input
                    type="text"
                    placeholder="company"
                    id="company"
                    name="company"
                    value={props.company}
                    onChange={props.onChange}
                />
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    placeholder="Title"
                    id="title"
                    name="title"
                    value={props.title}
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
                <label htmlFor="description">description</label>
                <input
                    type="text"
                    placeholder="Description"
                    id="description"
                    name="description"
                    value={props.description}
                    onChange={props.onChange}
                />
                <button
                    className='save-btn' 
                    onClick={(e) => {
                        e.preventDefault()
                        props.onToggle()
                    }}>
                    Save
                </button>
                <button
                    className='delete-btn'  
                    onClick={(e) => {
                        e.preventDefault()
                        props.onRemove()
                    }}>
                    Delete
                </button>
            </>
            }
            { 
                !props.isActive && 
                <button 
                    onClick={(e) => {
                        e.preventDefault()
                        props.onClick()}
                    }
                >
                    Edit
                </button>
            }
        </form>
    )
}