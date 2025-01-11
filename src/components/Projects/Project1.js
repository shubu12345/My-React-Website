import ProjectImg from "./ProjectImg.js";
// import project1 from "../assets/images/project1.png";
import project from "../../assets/images/img-pro.png";
const Project1 = () => {
    return (
        <div className="work-section" id="latest">
      <div className="project">
      <div className="project-img" draggable="false">
        <ProjectImg id="p1" imgUrl={project} link={'https://country-app-23.netlify.app/'} />
      </div>
      <div className="project-details">
      <h3>Country App</h3>
          <span>(Explore the Worlds)</span>
          <p>This Country App is built using React, HTML, CSS, JavaScript, and Bootstrap, offering a 
            user-friendly interface to explore detailed information about countries worldwide. Users can 
            search for specific countries, view key statistics such as population, area, capital, languages, 
            and currencies, and browse through interactive features like country flags and maps. 
            The app leverages responsive design with Bootstrap for a seamless experience across different 
            devices.</p>
            <ul>
              <li>#Html</li>
              <li>#Css</li>
              <li>#React.js</li>
              <li>#Javascript</li>
              <li>#Figma</li>
              <li>#Rest API</li>
              <li>#Bootstrap</li>
            </ul>
            <div style={{marginTop:25}}>
            <a style={{textDecoration:'none'}} href="https://country-app-23.netlify.app/" target="_blank" rel="noreferrer">
            <span style={{padding:12,color:"#fff",background:'#fc815c',marginTop:20,border:'1px solid #fff',
              borderRadius:16,fontSize:18}}>Country App 
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
export default Project1;