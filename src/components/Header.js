import "../Styles.css";
import moonIcon from "../assets/images/moon-icon.png";
import sunImg from "../assets/images/sun.png";
import { Typewriter } from "react-simple-typewriter";
const Header = ({ imgUrl, theme }) => {
  // function changeTheme() {
  //   document.body.classList.toggle("dark");
  //   document.querySelector(".text-section").classList.toggle("dark");
  //   document.querySelector(".profile").classList.toggle("dark");
  //   document.querySelector(".container-header").classList.toggle("dark");
  //   document.querySelector(".light").classList.toggle("dark");
  //   document.querySelector(".chnage-Icon").classList.toggle("dark");
  // }

  const [isDark, setDark] = theme;

  return (
    <>
      <div
        onClick={() => {
          setDark(!isDark);
          localStorage.setItem("isDarkMode", !isDark);
        }}
        className="moon-icon"
      >
        <img
          className="chnage-Icon"
          src={isDark ? sunImg : moonIcon}
          alt="moon-icon"
        />
        <span className="light">{isDark ? "Light Mode" : "Dark Mode"}</span>
      </div>
      <section className={`container-header ${isDark ? "dark" : ""}`}>
        <div className="hero-img">
          <img src={imgUrl} alt="profile" />
        </div>
        <div className="myname">
          <h1>Shubham Shinde</h1>
        </div>
        <div>
          <h1 className="text-modify">
            I am{" "}
            <span className="dynamic">
              <Typewriter
                words={[
                  "a Web Developer",
                  "a Designer ",
                  "a Front-End Developer",
                  "a Proud Indian",
                ]}
                loop
                cursor
                cursorStyle="|"
                cursorColor="white"
                typeSpeed={130}
                delaySpeed={100}
                deleteSpeed={100}
              />
            </span>
          </h1>
        </div>
        <div>
          <a href="#latest">
            <button className="work-btn">Latest Work</button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Header;
