const Support = ({imgUrl, id}) => {
    return (
        <div className="work-section">
            <div className='project project-1'>
            <div className='project-details'>
                    <h3>ToDo List</h3>
                    <span>(Keep the track)</span>
                    <p>This Todo List App, built with React, HTML, CSS, JavaScript, Bootstrap, and MongoDB, 
                        allows users to add, edit, and delete tasks. It uses MongoDB for persistent data 
                        storage and features a responsive design for a smooth user experience across devices.
                    </p>
                    <ul>
                        <li>#React.js</li>
                        <li>#Express</li>
                        <li>#MongoDB</li>
                        <li>#Mongoose</li>
                        <li>#Javascript</li>
                        <li>#Html</li>
                        <li>#Css</li>
                        <li>#Figma</li>
                    </ul>
                    <div style={{marginTop:25}}>
            <a style={{textDecoration:'none'}} href="https://iridescent-muffin-e0c784.netlify.app/" target="_blank" rel="noreferrer">
            <span style={{padding:12,color:"#fff",background:'#fc815c',marginTop:20,border:'1px solid #fff',
              borderRadius:16,fontSize:18}}>ToDo App 
            <svg style={{marginLeft:4}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
            </span>
            </a>
            </div>
                </div>
                <div className='project-img' draggable='false'>
                    <div className='img-pop'>
                        <a href='https://iridescent-muffin-e0c784.netlify.app/' target='_blank' rel="noreferrer">
                        <img id={id} src={imgUrl} alt='project-img'/></a>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Support;