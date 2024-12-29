const Download = ({imgUrl}) => {
    const downloadFileAtUrl = () => {
        fetch("Shubham_Shinde_Resume.pdf")
        .then((res) => {
            res.blob().then((blob) => {
                const fileUrl = window.URL.createObjectURL(blob);
                let alink = document.createElement("a");
                alink.href = fileUrl;
                alink.download = "Shubham_Shinde_Resume.pdf"
                alink.click();
            });
        });
       } 
    return (
        <div className="download">
            <p>Download My Resume 🔻</p>
            <button onClick={downloadFileAtUrl}>
            <img src={imgUrl} alt=""/>
            </button>
        </div>
    )
}

export default Download;