import axios from "axios";

export const getAllArticles = () => {
  return axios
    .get("https://nc-backend-ecsl.onrender.com/api/articles")
    .then((res) => res.data)
    .then((data) => {
      return data.articles;
    });
};

export const getArticleById = (article_id) => {
  return axios
    .get(`https://nc-backend-ecsl.onrender.com/api/articles/${article_id}`)
    .then((response) => response.data.article)
    .catch((error) => {
      console.error("Error fetching article:", error);
      throw new Error("Failed to fetch article");
    });
};

export const upvoteArticle = (article_id) => {
  return axios
    .patch(`https://nc-backend-ecsl.onrender.com/api/articles/${article_id}`, {
      inc_votes: 1,
    })
    .catch((error) => {
      console.error("Error upvoting", error);
      throw new Error("Faile to upvote");
    });
};

export const downvoteArticle = (article_id) => {
  return axios
    .patch(`https://nc-backend-ecsl.onrender.com/api/articles/${article_id}`, {
      inc_votes: -1,
    })
    .catch((error) => {
      console.error("Error downvoting", error);
      throw new Error("Failed to downvote");
    });
};