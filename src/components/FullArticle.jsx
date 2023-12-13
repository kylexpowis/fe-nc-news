import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CommentForm from "./CommentForm";
import CommentsList from "./CommentsList";

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
          <CommentForm article_id={article_id} />
          <CommentsList article_id={article_id} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FullArticle;
