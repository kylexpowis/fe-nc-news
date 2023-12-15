import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../api";

const CommentForm = ({ onPostComment }) => {
    const [comment, setComment] = useState("")
    const {article_id} = useParams()


    const handleCommentSubmit = (event) => {
        event.preventDefault();
        postComment(article_id, "grumpy19", comment)
        .then((data) => {
          console.log(data);
          alert("Comment Submitted!")
          onPostComment(data)
          setComment("");
        }).catch((error) => {
          console.error("Error posting comment", error)
        })
      } 

    return (
        <form onSubmit={handleCommentSubmit}>
            <textarea
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            placeholder="Leave a comment..." />
            <button>Submit Comment</button>
        </form>
    )
}

export default CommentForm;