import React, { useState } from "react";
import ReactDOM from "react-dom";
import Convert from "./Convert";
import Dropdown from "./Dropdown";
const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];
const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <React.Fragment>
      <div>
        <div className="ui form">
          <div className="field">
            <label>Enter text</label>
            <input
              calue={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </div>
        </div>
        <Dropdown
          label="select a language"
          selected={language}
          onSelectedChange={setLanguage}
          options={options}
        />
        <Convert language={language} text={text} />
      </div>
    </React.Fragment>
  );
};

export default Translate;
