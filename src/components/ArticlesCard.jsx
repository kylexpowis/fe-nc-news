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
    return (
        <div>
        <h1> Articles: </h1>
        <div className="ArticlesCard">
            {articles.map((article) => (
            <div key={article.article_id}> 
            <h2>{article.title}</h2>
            <p>{article.body}</p>
            <p>{article.votes}</p>
            
            </div>
            ))}
        </div>
        </div>
    )
}


export default ArticlesCard;