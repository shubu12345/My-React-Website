
const Work = ({imgUrl, id}) => {
    return (
        <div className="work-section" id='latest'>
            <div className='project'>
                <div className='project-img' draggable='false'>
                    <div className='img-pop' >
                        <a href='https://shubu12345.github.io/Simon-game/' target='_blank'>
                        <img id={id} src={imgUrl} alt='project-img'/></a>
                    </div>
                </div>
                <div className='project-details'>
                    <h3>Simons Game</h3>
                    <span>(Fun Playing)</span>
                    <p>This game is about the matching sound on buttons where you need to identify. This is made using HTML, CSS and Javascript.
                        Majorly focused on Event Handling.
                    </p>
                    <ul>
                        <li>#HTML</li>
                        <li>#CSS</li>
                        <li>#Javascript</li>
                        <li>#API</li>
                        <li>#Figma</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Work;