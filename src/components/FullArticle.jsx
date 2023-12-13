import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const FullArticle = () => {
  const [article, setArticle] = useState(null);
  const { article_id } = useParams();
  useEffect(() => {
    const queryString = `https://nc-backend-ecsl.onrender.com/api/articles/${article_id}`;
    axios
      .get(queryString)
      .then((response) => {
        console.log(response.data.article);
        return response.data.article;
      })
      .then((data) => {
        setArticle(data);
      });
  }, [article_id]);

  return (
    <div>
      {article ? (
        <>
          <h1>{article.title}</h1>
          <p>{article.author}</p>
          <p>{article.body}</p>
          <p>{article.article_id}</p>
          <p>{article.topic}</p>
          <img src={article.article_img_url} />
          <p>{article.votes}</p>
          <p>{article.created_at}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FullArticle;
