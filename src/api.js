import axios from 'axios';


export const getAllArticles = () => {
  return axios.get('https://nc-backend-ecsl.onrender.com/api/articles')
  .then((res) => res.data)
      .then((data) => {
        return data.articles;
      })
}

