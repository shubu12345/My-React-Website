const Support = ({imgUrl, id}) => {
    return (
        <div className="work-section">
            <div className='project project-1'>
            <div className='project-details'>
                    <h3>ToDo List</h3>
                    <span>(Keep the track)</span>
                    <p>This is an Simple DoTo List to keep your list tracked. Check out this simple todo list
                        made using React.
                    </p>
                    <ul>
                        <li>#ReactJs</li>
                        <li>#Express</li>
                        <li>#MongoDB</li>
                        <li>#Mongoose</li>
                        <li>#Javascript</li>
                        <li>#HTML</li>
                        <li>#CSS</li>
                        <li>#Figma</li>
                    </ul>
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