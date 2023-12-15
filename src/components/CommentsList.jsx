import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentForm from "./CommentForm";
import { postComment } from "../api";

const CommentsList = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchComments = () => {
      axios
        .get(
          `https://nc-backend-ecsl.onrender.com/api/articles/${article_id}/comments`
        )
        .then((response) => {
          setComments(response.data.comments);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching comments", error);
          setIsLoading(false);
        });
    };
    fetchComments();
  }, [article_id]);

  const updateComments = (newComment) => {
    setComments( prevComments => [newComment, ...prevComments ])
  }

  return (
    <div>
      <h2>Comments:</h2>
      <CommentForm onPostComment={updateComments} article_id={article_id} />
      {isLoading ? (
        <p>Loading Comments...</p>
      ) : (
        <ul>
          {comments.map((comment) => (
            <li key={comment.comment_id}>{comment.body}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommentsList;
