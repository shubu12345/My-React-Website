import linkedin from '../assets/images/linkedin.png';
import instagram from '../assets/images//instagram.png';
import twitter from '../assets/images/twitter.png';
import resume from '../assets/images/resume.png';
import SocialIcons from './SocialIcons.js';

import Download from './Download.js';
const About = ({imgUrl}) => {
    return (
        <>
        <section className="container-about">
        <div className="profile">
            <div>
            <img className='profile-img' src={imgUrl} alt='profile' />
            <div className="social">
            <SocialIcons link='https://www.linkedin.com/in/shushind/' imgUrl={linkedin} altos='Linkdin' />
            <SocialIcons link='https://www.instagram.com/_shubu_s/' imgUrl={instagram} altos='instagram'/>
            <SocialIcons link='https://x.com/i/flow/login' imgUrl={twitter} altos='twitter'/>
            </div>
            </div>
        </div>
        <div className="text-section">
            <h3>About Me</h3>
            <p>Hi, I'm <strong>Shubham Shinde</strong>, a passionate Web Developer with hands-on experience in Computer Science and Engineering. I specialize in Full Stack Development and Web Engineering, and I’m currently exploring new opportunities to apply my skills and grow further in my career.
            <br/><br/>
            With a strong foundation in web technologies and a commitment to delivering high-quality, impactful work, I’m always excited to take on fresh challenges. Let’s connect on LinkedIn or grab a virtual coffee – I’d love to discuss how we can collaborate and build something amazing together!</p>
        </div>
        </section>
        <Download imgUrl={resume}/>
        </>
    )
}

export default About;