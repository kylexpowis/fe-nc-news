import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getArticleById, upvoteArticle, downvoteArticle } from "../api";

const FullArticle = () => {
  const [article, setArticle] = useState(null);
  const { article_id } = useParams();
  const [error, setError] = useState(null);
  const [upvoteDisabled, setUpvoteDisabled] = useState(false);
  const [downvoteDisabled, setDownvoteDisabled] = useState(false);

  useEffect(() => {
    getArticleById(article_id)
      .then((data) => {
        setArticle(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [article_id]);

  const handleUpvote = () => {
    if (!upvoteDisabled) {
      upvoteArticle(article_id)
        .then(() => {
          setArticle((prevArticleState) => ({
            ...prevArticleState,
            votes: prevArticleState.votes + 1,
          }));
          setUpvoteDisabled(true);
          setDownvoteDisabled(false);
        })
        .catch((error) => {
          console.error("Error upvoting", error);
          setError("Failed to upvote");
        });
    }
  };

  const handleDownvote = () => {
    if (!downvoteDisabled)
      downvoteArticle(article_id)
        .then(() => {
          setArticle((prevArticleState) => ({
            ...prevArticleState,
            votes: prevArticleState.votes - 1,
          }));
          setUpvoteDisabled(false);
          setDownvoteDisabled(true);
        })
        .catch((error) => {
          console.error("Error upvoting, could not fetch API", error);
          setError("Failed to upvote");
        });
  };

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : article ? (
        <>
          <h1>{article.title}</h1>
          <p>{article.author}</p>
          <p>{article.body}</p>
          <p>{article.article_id}</p>
          <p>{article.topic}</p>
          <img src={article.article_img_url} />
          <p>
            Votes: {article ? article.votes : " "}{" "}
            <button onClick={handleUpvote} disabled={upvoteDisabled}>
              Upvote
            </button>
            <button onClick={handleDownvote} disabled={downvoteDisabled}>
              Downvote
            </button>
          </p>
          <p>{article.created_at}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FullArticle;
