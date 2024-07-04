export default function PersonalDetails(props) {


    return (
        <div className="personal-details-div" onChange={props.onChange}>
            <h1>Personal Details</h1>
            <input type="text" placeholder="First name"/>
            <input type="text" placeholder="Last name"/>
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone Number"/>
            <input type="text" placeholder="Address"/>
        </div>
    )
}