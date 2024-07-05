export default function GeneralInfo(props) {

    return (
        <div className="general-info-div" >
            <h1>General Info</h1>
            <input name="firstName" type="text" placeholder="First name" value={props.firstName} onChange={props.onChange}/>
            <input name="lastName" type="text" placeholder="Last name" value={props.lastName} onChange={props.onChange}/>
            <input name="email" type="email" placeholder="Email" value={props.email} onChange={props.onChange}/>
            <input name="phone" type="tel" placeholder="Phone Number" value={props.phone} onChange={props.onChange}/>
            <input name="address" type="text" placeholder="Address" value={props.address} onChange={props.onChange}/>
        </div>
    )
}