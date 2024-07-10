import '../styles/header.css'
import HomeIcon from '../assets/home.svg'
import MailIcon from '../assets/mail.svg'
import PhoneIcon from '../assets/phone.svg'

export default function ResumeHeader(props) {

    return (
        <div className="resume-header-div" >
            <p className='header full-name'>{props.firstName} {props.lastName}</p>
            <div className="contact-details">
                {props.email && <img src={MailIcon} alt="Mail Icon"/>} 
                <p className='header email'>{props.email}</p>
                {props.phone && <img src={PhoneIcon} alt="Phone Icon"/>} 
                <p className='header phone'>{props.phone}</p>
                {props.address && <img src={HomeIcon} alt="Home Icon"/>} 
                <p className='header address'>{props.address}</p>
            </div>
        </div>
    )
}