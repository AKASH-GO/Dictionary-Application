import { useState } from "react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [definition, setDefinition] = useState("");
  const [showDefinition, setShowDefinition] = useState(false);
  const dictionary = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const handleChange=(e)=>{
    setShowDefinition(false);
    const word = e.target.value;
    setInputText(word);
  }
  const handleSearch = () => {
    const item = dictionary.find((item)=>item.word.toLowerCase()===inputText.toLowerCase());
    if (item) {
      setDefinition(item.meaning);
    }else{
      setDefinition(null)
    }
    setShowDefinition(true);
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Search for a word..."
        value={inputText}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>
      <h4>Definition:</h4>
      {showDefinition && (
        <div>
          {definition ? definition : "Word not found in the dictionary."}
        </div>
      )}
    </div>
  );
}

export default App;