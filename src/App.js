import { useState } from "react";
import Home from "./components/Home.js";

function App() {
  const [isDark, setDark] = useState(
    JSON.parse(localStorage.getItem("isDarkMode"))
  );

  return (
    <div className={`main-container ${isDark ? "dark" : ""}`}>
      <Home theme={[isDark, setDark]} />
    </div>
  );
}

export default App;
