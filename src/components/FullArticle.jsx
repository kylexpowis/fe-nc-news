import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CommentForm from "./CommentForm";
import CommentsList from "./CommentsList";

const FullArticle = () => {
  const [article, setArticle] = useState(null);
  const { article_id } = useParams();
  const [error, setError] = useState(null)

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

  const handleUpvote = () => {
    axios.patch(`https://nc-backend-ecsl.onrender.com/api/articles/${article_id}`, {
      inc_votes: 1,
    })
    .then(() => {
      axios.get(`https://nc-backend-ecsl.onrender.com/api/articles/${article_id}`)
      .then((response) => setArticle(response.data.article))
      .catch((error) => {
        console.error("Error upvoting, could not fetch API", error)
        setError("Failed to upvote")
      })
    })
  }

  const handleDownvote = () => {
    axios.patch(`https://nc-backend-ecsl.onrender.com/api/articles/${article_id}`, {
      inc_votes: -1,
    })
    .then(() => {
      axios.get(`https://nc-backend-ecsl.onrender.com/api/articles/${article_id}`)
      .then((response) => setArticle(response.data.article))
      .catch((error) => {
        console.error("Error upvoting, could not fetch API", error)
        setError("Failed to upvote")
      })
    })
  }

  return (
    <div>
      {error? (
        <p>{error}</p>
      ) : article ? (
        <>
          <h1>{article.title}</h1>
          <p>{article.author}</p>
          <p>{article.body}</p>
          <p>{article.article_id}</p>
          <p>{article.topic}</p>
          <img src={article.article_img_url} />
          <p>Votes: {article.votes}{" "}
          <button onClick={handleUpvote}>Upvote</button>
          <button onClick={handleDownvote}>Downvote</button>
          </p>
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
