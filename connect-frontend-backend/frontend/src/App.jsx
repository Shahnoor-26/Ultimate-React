import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [jokes, updateJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => updateJokes(response.data))
      .catch((error) => console.log(error));
  }, []);

  console.log("Jokes", jokes);

  return (
    <>
      <h1>How To Connect Frontend To Backend</h1>
      <p>Fetching Jokes From "/api/jokes" :: Total Jokes {jokes.length}</p>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <span>{joke.title}</span>
          <span>{joke.content}</span>
        </div>
      ))}
    </>
  );
};

export default App;
