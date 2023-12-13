import axios from 'axios';


export const getAllArticles = () => {
  return axios.get('https://nc-backend-ecsl.onrender.com/api/articles')
  .then((res) => res.data)
      .then((data) => {
        return data.articles;
      })
}

// export const getArticleById = (article_id) => {
//   return axios
//       .get(`https://nc-backend-ecsl.onrender.com/api/articles/${article_id}`)
//       .then((response) => {
//           return response.data
//       })
//       .catch((error) => {
//           console.error("Error fetching article:", error)
//       });
// };