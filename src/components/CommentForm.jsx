import React, { useState } from "react";
import axios from "axios";

const CommentForm = ({ article_id }) => {
    const [comment, setComment] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Assuming the backend expects a POST request to a URL like /api/articles/{article_id}/comments
        // You might need to adjust the URL and data format based on your backend API
        axios.post(`https://nc-backend-ecsl.onrender.com/api/articles/${article_id}/comments`, { body: comment })
            .then(response => {
                console.log("Comment submitted:", response.data);
                setComment("");
            })
            .catch(error => {
                console.error("Failed to submit comment:", error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write a comment..."
                required
                style={{ width: '100%', minHeight: '100px' }}
            ></textarea>
            <button type="submit" style={{ marginTop: '10px' }}>Submit Comment</button>
        </form>
    );
};

export default CommentForm;
