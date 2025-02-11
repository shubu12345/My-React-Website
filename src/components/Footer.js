import logo from "../assets/images/ss-logo.png"
import linkedin from "../assets/images/linkedin-light.png"
import gamil from "../assets/images/email-light.png";
import twitter from "../assets/images/twitter-light.png";
import darkLogo from "../assets/images/dark-logo.png";
import SocialIcons from "./SocialIcons.js";
const Footer = ({theme}) => {
    const [isDark] = theme;
    return (
        <>
        <p style={{textAlign:'center',paddingTop:40}}>Shubham Shinde © 2025</p>
        <div className="footer-logo">
            <img src={isDark? darkLogo:logo} alt="shubham shinde" />
        </div>
        <p style={{textAlign:'center',padding:5}}>Made With ❤️ in India</p>
        <div className="footer-social">
        <SocialIcons link="https://www.linkedin.com/in/shushind/" imgUrl={linkedin}/>
        <SocialIcons link="https://x.com/i/flow/login" imgUrl={twitter}/>
        <SocialIcons link="mailto:shubhamnarayanshinde23@gmail.com" imgUrl={gamil}/>
        </div>
        </>
    )
}

export default Footer;