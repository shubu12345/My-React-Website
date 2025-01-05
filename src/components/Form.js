import formImg from '../assets/images/contact-img.png';
import user from '../assets/images/male-user-icon-in-suit-svgrepo-com.svg';
import email from '../assets/images/email.svg';
import msg from '../assets/images/msg.svg';
const Form = () => {
    return (
        <>
        <div className='contact'>
        <h2>Connect With Me</h2>
        </div>
        <div className="form-container">
            <div className="form-img">
            <img src={formImg} alt="contact-img" />
            </div>
            <div className="form-contact">
                <label for="name">
                    <img className='user' src={user} alt='user'/>
                    Name</label>
              <input type="text" name="name" />
              <label for="email">
              <img className='user' src={email} alt='email'/>
                Email</label>
              <input type="text" name="Email" />
              <label for="message">
              <img className='user' src={msg} alt='email'/>
                Message</label>
              <textarea name="message" rows="10" cols="72" />
              <button>Send Message</button>  
            </div>
        </div>
        </>
    )
}
export default Form;