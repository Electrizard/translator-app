import "./LanguageInput.css";
import {useState} from "react";
function LanguageInput({language}){

    const [text, setText ] = useState("");
    async function getData(){
        const response = await fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=en|zh`);
    }

    return(
        <div className="language-div">
            <h1>{language}</h1>
            <hr></hr>
            <textarea placeholder={`Translate ${language}`}></textarea>
        </div>
    );
}

export default LanguageInput;