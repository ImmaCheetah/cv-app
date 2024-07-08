export default function GeneralInfo(props) {

    return (
        <form className="general-info-form" >
            <h1>General Info</h1>
            <label htmlFor="first-name">First Name</label>
            <input 
                type="text" 
                placeholder="First name" 
                id="first-name"
                name="firstName" 
                value={props.firstName} 
                onChange={props.onChange}
            />
            <label htmlFor="last-name">Last Name</label>
            <input 
                type="text" 
                placeholder="Last name"
                id="last-name" 
                name="lastName" 
                value={props.lastName} 
                onChange={props.onChange}
            />
            <label htmlFor="email">Email</label>
            <input 
                type="email" 
                placeholder="Email"
                id="email" 
                name="email" 
                value={props.email} 
                onChange={props.onChange}
            />
            <label htmlFor="phone">Phone</label>
            <input 
                type="tel" 
                placeholder="Phone Number"
                id="phone" 
                name="phone" 
                value={props.phone} 
                onChange={props.onChange}
            />
            <label htmlFor="address">Address</label>
            <input 
                type="text" 
                placeholder="Address"
                id="address" 
                name="address" 
                value={props.address} 
                onChange={props.onChange}
            />
        </form>
    )
}