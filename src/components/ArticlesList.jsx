import { useState, useEffect } from "react";
import { getAllArticles } from "../api";
import ArticlesCard from "./ArticlesCard";



const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllArticles()
    .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Articles", error);
        setIsLoading(false);
      });
  }, []);
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <ArticlesCard articles={articles} />
        </div>
      )}
    </div>
  );
};

export default ArticlesList;
