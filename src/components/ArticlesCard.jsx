const ArticlesCard = (props) => {
    const { articles } = props;

    return (
        <div className="ArticlesCard">
            {articles.map((article) => (
            <div key={article.article_id}>
            <h2>{article.title}</h2>
            <p>{article.body}</p>
            </div>
            ))}
        </div>
    )
}

export default ArticlesCard;