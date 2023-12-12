import { useState, useEffect } from "react";
import ArticlesCard from "./ArticlesCard";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://nc-backend-ecsl.onrender.com/api/articles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles);
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
