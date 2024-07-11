import "../styles/section.css";
import { format, parse } from "date-fns";

export default function EducationDisplay(props) {
  function formatDate(date) {
    if (!date) {
      return;
    } else {
      return format(new Date(date), "MMM, yyyy");
    }
  }

  const list = props.educationArray.map((education) => {
    return (
      <div className="display education-div">
        <div className="left-info">
          <p className="left-header degree">{education.degree}</p>
          <p className="left-header-desc school">{education.school}</p>
        </div>
        <div className="right-info">
          <p className="date">
            {formatDate(education.startDate)} {education.endDate && "-"}{" "}
            {formatDate(education.endDate)}
          </p>
          <p className="location">{education.location}</p>
        </div>
      </div>
    );
  });

  return (
    <>
      <h5 className="section-header">Education</h5>
      {list}
    </>
  );
}
