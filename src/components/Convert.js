import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import axios from "axios";
const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText,setDebouncedText] = useState(text);

  useEffect(()=>{
    const timerId = setTimeout(()=>{
        setDebouncedText(text);
    },500);

    return ()=>{
        clearTimeout(timerId);
    };
  },[text]);

  useEffect(() => {
    const doTranslation = async () => {
      const {data} = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "Oops!!! It's paid API",
          },
        }
      );

      setTranslated(data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [language, debouncedText]);

  return(
    <div>
        <h1 className="ui header">{translated}</h1>
    </div>
  );
};
export default Convert;
