import Header from "./Header.js";
import "../Styles.css";
import airoplne from "../assets/images/plane.gif";
// import profile from "./assets/images/shubham.jpeg";
import ss from "../assets/images/profile.png";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
// import project3 from "../assets/images/project3.png";
import project from "../assets/images/img-pro.png";
import About from "./About.js";
import Work from "./Work.js";
import Title from "./Title.js";
import Support from "./Support.js";

const Home = () => {
  return (
    <>
      <Header imgUrl={airoplne} />
      <About imgUrl={ss} />
      {/* <Download imgUrl={resume}/> */}
      <Title />
      <Work
        id="p1"
        title="Country App"
        link="https://country-app-23.netlify.app/"
        subheading="(Found The World)"
        text="This Country App is made to learn the advanced concept of react. In this project, I leared about basic to advance connects. Lets have a look once."
        l1="#React"
        l2="#JavaScript"
        l3="#REST API"
        l4="#Figma"
        imgUrl={project}
      />
      <Support id="p2" imgUrl={project2} />
      <Work
        id="p1"
        title="Simons Game"
        link="https://shubu12345.github.io/Simon-game/"
        subheading="(Fun Playing)"
        text="This game is about the matching sound on buttons where you need to identify. This is made using HTML, CSS and Javascript. Majorly focused on Event Handling."
        l1="#HTML"
        l2="#CSS"
        l3="#JavaScript"
        l4="#Figma"
        imgUrl={project1}
      />
    </>
  );
};
export default Home;
