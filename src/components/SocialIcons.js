const SocialIcons = ({imgUrl, altos, link}) => {
    return (
        <>
        <div className="social-icons">
            <a href={link} target='_blank'>
        <img src={imgUrl} alt={altos} title={altos}/>
        </a>
        </div>
        </>
    )
}

export default SocialIcons;