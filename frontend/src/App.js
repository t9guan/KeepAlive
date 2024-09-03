import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/test")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching data", error));
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>This thing should work</h1>
        <p>lets see if this works {message}</p>
      </header>
    </div>
  );
}

export default App;
