import { useState } from "react";

export default function EducationInfo(props) {
  return (
    <form className="education-info form">
      <div className="form-placeholder">
        {(() => {
          if (!props.isActive && !props.school) {
            return <h4>School Name</h4>;
          } else if (props.isActive) {
            return "";
          } else {
            return <h4>{props.school}</h4>;
          }
        })()}
        {!props.isActive && (
          <button
            className="edit-btn"
            onClick={(e) => {
              e.preventDefault();
              props.onClick();
            }}
          >
            Edit
          </button>
        )}
      </div>
      {props.isActive && (
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
            type="date"
            placeholder="Start Date"
            id="start-date"
            name="startDate"
            value={props.startDate}
            onChange={props.onChange}
          />
          <label htmlFor="end-date">End Date</label>
          <input
            type="date"
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
          <button
            className="delete-btn"
            onClick={(e) => {
              e.preventDefault();
              props.onRemove();
            }}
          >
            Delete
          </button>
          <button
            className="save-btn"
            onClick={(e) => {
              e.preventDefault();
              props.onToggle();
            }}
          >
            Save
          </button>
        </>
      )}
    </form>
  );
}
