import Header from "./Header.js";
import "../Styles.css";
// import airoplne from "../assets/images/plane.gif";
import airoplaneNight from "../assets/images/plane-night.gif";
import ss from "../assets/images/profile.png";
import project2 from "../assets/images/project2.png";
import About from "./About.js";
// import Work from "./Work.js";
import Title from "./Title.js";
import Support from "./Support.js";
import Footer from "./Footer.js";
// import ProjectImg from "./Projects/ProjectImg.js";
import Project1 from "./Projects/Project1.js";
import Project2 from "./Projects/Project2.js";

const Home = ({ theme }) => {
  return (
    <>
      <Header theme={theme} imgUrl={airoplaneNight} />
      <About theme={theme} imgUrl={ss} />
      {/* <Download imgUrl={resume}/> */}
      <Title />
      <Project1 />
      <Support id="p2" imgUrl={project2} />
      <Project2 />
      <Footer theme={theme} />
      {/* <Form /> */}
    </>
  );
};
export default Home;
