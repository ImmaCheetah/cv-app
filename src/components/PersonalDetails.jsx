export default function PersonalDetails(props) {

    return (
        <div className="personal-details-div" >
            <h1>Personal Details</h1>
            <input name="firstName" type="text" placeholder="First name" value={props.firstName} onChange={props.onChange}/>
            <input type="text" placeholder="Last name" value={props.lastName} onChange={props.onChange}/>
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone Number"/>
            <input type="text" placeholder="Address"/>
        </div>
    )
}