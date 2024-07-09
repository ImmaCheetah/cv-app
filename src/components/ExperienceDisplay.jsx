export default function ExperienceDisplay(props) {
    const list = props.experienceArray.map((experience) => {
        return (
            <div>
                <h1>{experience.company}</h1>
                <h2>{experience.title}</h2>
                <h2>{experience.startDate}</h2>
                <h2>{experience.endDate}</h2>
                <h2>{experience.location}</h2>
                <h2>{experience.description}</h2>
            </div>
        )
    })

    return (
        <div className="experience-display-div" >
            {list}
        </div>
    )
}