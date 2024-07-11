import "../styles/section.css";
import { format, parse } from "date-fns";

export default function ExperienceDisplay(props) {
  function formatDate(date) {
    if (!date) {
      return;
    } else {
      return format(new Date(date), "MMM, yyyy");
    }
  }

  const list = props.experienceArray.map((experience) => {
    return (
      <div className="display experience-div">
        <div className="left-info">
          <p className="left-header company">{experience.company}</p>
          <p className="left-header-desc title">{experience.title}</p>
          <p className="description">{experience.description}</p>
        </div>
        <div className="right-info">
          <p className="date">
            {formatDate(experience.startDate)} {experience.endDate && "-"}{" "}
            {formatDate(experience.endDate)}
          </p>
          <p className="location">{experience.location}</p>
        </div>
      </div>
    );
  });

  return (
    <>
      <h5 className="section-header">Experience</h5>
      {list}
    </>
  );
}
