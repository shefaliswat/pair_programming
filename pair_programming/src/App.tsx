import { useState } from "react";
import "./App.css";
import MyClosures from "./closures/Closures";

function App({c}) {
  var a = 10;
  const [appState, setAppState] = useState("b")
  return (
    <>
      <p className="read-the-docs"><MyClosures appState={appState} a={a} /></p>
    </>
  );
}

export default App;
