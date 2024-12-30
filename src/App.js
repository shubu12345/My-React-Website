import Header from "./components/Header.js";
import "./Styles.css";
import airoplne from "./assets/images/plane.gif";
// import profile from "./assets/images/shubham.jpeg";
import ss from "./assets/images/profile.png";
import project1 from "./assets/images/project1.png";
import project2 from "./assets/images/project2.png";
import About from "./components/About.js";
import Work from "./components/Work.js";
import Title from "./components/Title.js";
import Support from "./components/Support.js";

function App() {
  return (
    <div>
      <Header imgUrl={airoplne} />
      <About imgUrl={ss} />
      {/* <Download imgUrl={resume}/> */}
      <Title />
      <Work id="p1" imgUrl={project1} />
      <Support id="p2" imgUrl={project2} />
    </div>
  );
}

export default App;
