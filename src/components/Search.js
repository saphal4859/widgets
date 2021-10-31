import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Search = () => {
  const [term, setTerm] = useState("Programming");
  const [results, setResults] = useState([]);
  console.log(results);
  useEffect(() => {
    //we can use async inside useEffect in 3 ways
    //Method 1
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          format: "json",
          origin: "*",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };

    if (term && !results.length) {
      search();
    } else {
      const timeoutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 1000);
      console.log("Use effect called");
      return () => {
        console.log("Timeout cleared");
        clearTimeout(timeoutId);
      };
    }

    // //Method 2
    // (async () => {
    //   await axios.get(term);
    // })(); //extra braces to call the function without creating varaible and calling it

    // //Method 3
    // axios.get(term).then((response)=>{
    //     console.log(response.data);
    // })
  }, [term]); //second parameter of useEffect :  nothing or empty array or array of something

  const renderedResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div>
        <div className="ui form">
          <div className="field">
            <label>Enter search term : </label>
            <input
              className="input"
              onChange={(e) => {
                setTerm(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="ui celled list">{renderedResults}</div>
      </div>
    </React.Fragment>
  );
};

export default Search;
