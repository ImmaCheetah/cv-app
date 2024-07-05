export default function ResumeHeader(props) {

    return (
        <div className="resume-header-div" >
            <h1>{props.firstName} {props.lastName}</h1>
            <h2>{props.email}</h2>
            <h2>{props.phone}</h2>
            <h2>{props.address}</h2>
        </div>
    )
}