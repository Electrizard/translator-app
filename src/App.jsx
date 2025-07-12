import LanguageInput from './LanguageInput.jsx';
import "./App.css"
import {useState, useEffect} from "react";
function App() {
  
  const [enText, setEnText] = useState("");
  const [chText, setChText] = useState("");
  const [spText, setSpText] = useState("");



  return (
    <div className="language-container">
      <LanguageInput language="English" setLangOne={setChText} setLangTwo={setSpText} pText={enText}/>
      <LanguageInput language="Chinese" setLangOne={setEnText} setLangTwo={setSpText} pText={chText}/>
      <LanguageInput language="Spanish" setLangOne={setEnText} setLangTwo={setChText} pText={spText}/>
    </div>
  );
}

export default App
