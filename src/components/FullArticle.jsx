import React from "react";

const FullArticle = ({ match }) => {
  const fetchArticleById = async (articleId) => {
    const response = await fetch(
      `https://nc-backend-ecsl.onrender.com/api/articles/${articleId}`
    );
    const data = await response.json();
    return data;
  };

  const { params } = match;
  const articleId = params.articleId;

  const article = fetchArticleById(articleId);

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.author}</p>
      <p>{article.article_id}</p>
      <p>{article.topic}</p>
      <p>{article.article_img_url}</p>
      <p>{article.votes}</p>
      <p>{article.comment_count}</p>
      <p>{article.created_at}</p>
    </div>
  );
};

export default FullArticle;