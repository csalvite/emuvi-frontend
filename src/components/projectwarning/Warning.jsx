import './Warning.css';

const Warning = ({ setShowWarning }) => {
    return(
        <div className="warning-its-a-project">
            <p>"EMUVI" es un proyecto portafolio</p>
            <i className="fa-solid fa-x" onClick={() => setShowWarning(false)}></i>
        </div>
    )
}

export { Warning };