import "./LanguageInput.css";
import {useState, useEffect} from "react";
function LanguageInput({language}){

    const [text, setText ] = useState("");
    async function getData(){
        const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|zh`);
        const responseJson = await response.json();
        const translation = responseJson.responseData.translatedText;
        console.log(translation);
    }

    function handleChange(e){
        setText(e.target.value);
    }

    useEffect(() =>{
        getData();
    }, [text]);

    return(
        <div className="language-div">
            <h1>{language}</h1>
            <hr></hr>
            <textarea onChange={(e) => handleChange(e)}placeholder={`Translate ${language}`}></textarea>
        </div>
    );
}

export default LanguageInput;