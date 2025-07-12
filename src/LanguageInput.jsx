import "./LanguageInput.css";
function LanguageInput({language}){
    return(
        <div className="languageDiv">
            <h1>Language</h1>
            <hr></hr>
            <textarea placeholder="Translate English"></textarea>
        </div>
    );
}

export default LanguageInput;