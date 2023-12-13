import "./App.css";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import FullArticle from "./components/FullArticle";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <h1 className="header"> NC News </h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/articles/:article_id`} element={<FullArticle />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
