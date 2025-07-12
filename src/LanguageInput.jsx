import "./LanguageInput.css";
import {useState, useEffect} from "react";
function LanguageInput({language, setLangOne, setLangTwo, pText}){
    //Use pText as a parameter not to be confused with text however will be set to same value.
    //Whenver pText is changed that indicates a different langauge box recieved an input and translated text to what will be put into the other box.
    const [text, setText ] = useState("");
    async function getData(){
        if(!text.trim()){
            return
        };
        const res = await fetch("https://de.libretranslate.com/translate", {
            method: "POST",
            body: JSON.stringify({
                q: "hello",
                source: "auto",
                target: "de",
                format: "text",
                alternatives: 3,
                api_key: ""
            }),
            headers: { "Content-Type": "application/json" }
        });
        const responseOne = await fetch(`https://lingva.ml/api/v1/en/zh/${encodeURIComponent(text)}`);
        const responseJsonOne = await responseOne.json();
        const translationOne = responseJsonOne.translation;
        setLangOne(translationOne);
    }

    function handleChange(e){
        setText(e.target.value);
    }

    useEffect(() =>{
        const handler = setTimeout(() =>{
            getData();
        }, 500)
        
        return (() => {
            clearTimeout(handler);
        });
    }, [text]);


    useEffect(() =>{
        setText(pText);
    }, [pText]);


    return(
        <div className="language-div">
            <h1>{language}</h1>
            <hr></hr>
            <textarea value={text} onChange={(e) => handleChange(e)}placeholder={`Translate ${language}`}>{text}</textarea>
        </div>
    );
}

export default LanguageInput;