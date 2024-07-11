import '../styles/section.css'

export default function ExperienceDisplay(props) {
    const list = props.experienceArray.map((experience) => {
        return (
            <div className="display experience-div">
                <div className="left-info">
                    <p className="left-header company">{experience.company}</p>
                    <p className="left-header-desc title">{experience.title}</p>
                    <p className="description">{experience.description}</p>
                </div>
                <div className="right-info">
                    <p className='date'>{experience.startDate} {experience.endDate && '-'} {experience.endDate}</p>
                    <p className="location">{experience.location}</p>
                </div>
            </div>
        )
    })

    return (
        <>
            <h5 className='section-header'>Experience</h5>
            {list}
        </>
    )
}