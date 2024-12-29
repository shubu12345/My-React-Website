import '../Styles.css';
import { Typewriter } from 'react-simple-typewriter';
const Header = ({imgUrl}) => {
    return (
        <>
        <section className='container-header'>
        <div className="hero-img">
            <img src={imgUrl} alt="profile"/>
            </div>
            <div className="myname">
                <h1>Shubham Shinde</h1>
            </div>
            <div>
            <h1 className='text-modify'>
           I am {' '}
            <span className='dynamic'>
                <Typewriter
                words={['a Web Developer 💻', 'a Designer ', 'a Front-End Developer', 'a Proud Indian ❤']}
                loop
                cursor
                cursorStyle="|"
                cursorColor='white'
                typeSpeed={130}
                delaySpeed={100}
                deleteSpeed={100}
            />
            </span>
            </h1>
            </div>
            <div>
            <a href="#latest">
            <button className='work-btn'>Latest Work</button>
            </a>
            </div>
        </section>
        </>
    )
}

export default Header;