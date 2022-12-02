import './contact.css'
import { MdLocationPin } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdAttachEmail } from 'react-icons/md';
import { FaFacebookSquare } from 'react-icons/fa';

const Contact = () => {
    return ( 
        <div id="contact">
            <div className="contactContainer">
                <div className="contactContainer1">
                    <div className="contactContainerChild">
                        <MdLocationPin className='contact-icon'/>
                        <h1 >OUR MAIN OFFICE</h1>
                        <p>Isani, Beri gabriel salosi ave 1, building 9</p>
                    </div>
                    <div className="contactContainerChild">
                    <BsFillTelephoneFill className='contact-icon'/>
                        <h1 >PHONE NUMBER</h1>
                        <p>+995 571 15 30 74</p>
                    </div>
                    <div className="contactContainerChild">
                    <MdAttachEmail className='contact-icon'/>
                        <h1 >EMAIL</h1>
                        <p>iafofkhadze@gmail.com</p>
                    </div>
                    <div className="contactContainerChild">
                    <FaFacebookSquare className='contact-icon'/>
                        <h1 >FACEBOOK</h1>
                        <p>Ia Popkhadze</p>
                    </div>
                </div>
                <div className="contactContainer2">
                      <h1>Contact Us</h1>
                      <input type="text"  placeholder='Enter your Name'/>
                      <input type="text" placeholder='Enter a valid email address' />
                      <textarea cols="40" rows="5"></textarea>
                      <button>Submit</button>
                </div>
            </div> 
        </div>
     );
}
 
export default Contact;