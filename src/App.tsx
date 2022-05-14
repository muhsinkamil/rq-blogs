import { useEffect } from "react";
import "./App.css";
import BlogList from "./BlogList";

function App() {
  const apiBasePath = import.meta.env.VITE_API_BASE_PATH;

  useEffect(() => {
    fetch(`${apiBasePath}/posts`)
      .then((res) => res.json())
      .then((result) => console.log(result));
  });

  return <BlogList />;
}

export default App;
