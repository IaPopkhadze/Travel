import './footer.css'
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { ImGooglePlus } from 'react-icons/im';
import { BsYoutube } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr';
import { AiOutlineCopyright } from 'react-icons/ai';

const Footer = () => {
    return ( 
        <div className="footer">
              <h1>Travel in Georgia</h1>
              <p>
                ducimus exercitatiistinctio voluptatibus magni doloremque esse eveniet corrupti iure, neque asperiores quam odit repellat aperiam aliquam provident, sequi in? consectetur adipisicing elit. Doloremque molestiae odit, accusantium magnam ipsa mollitia blanditiis minima!</p>
              <div className="footerIcons">
                    <FaFacebookF className='footerICon'/>
                    <BsTwitter className='footerICon'/>
                    <ImGooglePlus className='footerICon'/>
                    <BsYoutube className='footerICon'/>
                    <GrInstagram className='footerICon'/>
              </div>
              <div className="copyRight">
                  <p>Copyright <AiOutlineCopyright/>2022 travel in Georgia. designed by <span>Ia Popkhadze </span> </p>
              </div>
        </div>
     );
}
 
export default Footer;