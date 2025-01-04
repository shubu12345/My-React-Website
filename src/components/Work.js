const Work = ({
  imgUrl,
  id,
  title,
  subheading,
  link,
  text,
  l1,
  l2,
  l3,
  l4,
  l5,
  l6,
}) => {
  return (
    <div className="work-section" id="latest">
      <div className="project">
        <div className="project-img" draggable="false">
          <div className="img-pop">
            <a href={link} target="_blank" rel="noreferrer">
              <img id={id} src={imgUrl} alt="project-img" />
            </a>
          </div>
        </div>
        <div className="project-details">
          <h3>{title}</h3>
          <span>{subheading}</span>
          <p>{text}</p>
          <ul>
            <li>{l1}</li>
            <li>{l2}</li>
            <li>{l3}</li>
            <li>{l4}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Work;
