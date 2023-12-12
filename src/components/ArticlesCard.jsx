import React from "react";
import { Link } from "react-router-dom";

const ArticlesCard = (props) => {
  const { articles } = props;

  return (
    <div className="ArticlesCard">
      {articles.map((article) => (
        <div key={article.article_id}>
          <Link to={`/articles/${article.article_id}`}>
            <h2>{article.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ArticlesCard;