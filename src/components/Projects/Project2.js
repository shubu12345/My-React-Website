import Project1 from "../../assets/images/project1.png";
import ProjectImg from "./ProjectImg.js";
const Project2 = () => {
    return (
        <div className="work-section" id="latest">
      <div className="project">
      <div className="project-img" draggable="false">
        <ProjectImg id="p2" imgUrl={Project1} link={'https://shubu12345.github.io/Simon-game/'} />
      </div>
      <div className="project-details">
      <h3>Simons Game</h3>
          <span>(Let's Fun Playing)</span>
          <p>Simon's Game is a web-based memory game built with HTML, CSS, JavaScript, and Bootstrap. 
            Players must repeat an ever-growing sequence of colors and sounds, testing their memory and 
            reflexes. The app features a responsive, user-friendly interface and smooth interactivity.</p>
            <ul>
              <li>#Html</li>
              <li>#Css</li>
              <li>#Javascript</li>
              <li>#Figma</li>
              <li>#Bootstrap</li>
            </ul>
            <div style={{marginTop:25}}>
            <a style={{textDecoration:'none'}} href="https://shubu12345.github.io/Simon-game/" target="_blank" rel="noreferrer">
            <span style={{padding:12,color:"#fff",background:'#fc815c',marginTop:20,border:'1px solid #fff',
              borderRadius:16,fontSize:18}}>Simon Game 
            <svg style={{marginLeft:4}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
            </span>
            </a>
            </div>
      </div>
      </div>
      </div>
    )
}
export default Project2;