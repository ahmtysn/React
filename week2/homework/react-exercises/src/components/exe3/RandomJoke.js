import React, { useState, useEffect } from "react";
import Joke from "./Joke";
import axios from "axios";

export default function RandomJoke() {
  const [joke, setJoke] = useState({});
  const [hasError, setError] = useState(false);

  useEffect(() => {
    axios
      .get("https://official-joke-api.appspot.com/random_joke")
      .then((res) => setJoke({ ...res.data }))
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, []);
  return (
    <div>
      {!hasError && <Joke setup={joke.setup} punchline={joke.punchline} />}
      {hasError && <p>There is a problem...</p>}
    </div>
  );
}
