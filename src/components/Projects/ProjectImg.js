const ProjectImg = ({imgUrl,
    id,
    link
    }) => {
    return (
          <div className="img-pop">
            <a href={link} target="_blank" rel="noreferrer">
              <img id={id} src={imgUrl} alt="project-img" />
            </a>
          </div>
    )
}
export default ProjectImg;