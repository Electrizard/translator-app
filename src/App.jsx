import LanguageInput from './LanguageInput.jsx';
import "./App.css"
function App() {
  return (
    <div className="language-container">
      <LanguageInput language="English"/>
      <LanguageInput language="Chinese"/>
      <LanguageInput language="Spanish"/>
    </div>
  );
}

export default App
