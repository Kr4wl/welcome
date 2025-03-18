import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NewsContainer.css';

function NewsContainer() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Note: You'll need to set up a proxy or backend service to fetch from LeMonde
        // due to CORS restrictions. This is a placeholder URL.
        const response = await axios.get('https://api-proxy/lemonde/latest');
        setNews(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch news. Please try again later.');
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div className="loading">Loading latest news...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="news-container">
      {news.map((article, index) => (
        <article key={index} className="news-article">
          {article.image && (
            <img src={article.image} alt={article.title} className="article-image" />
          )}
          <div className="article-content">
            <h2>{article.title}</h2>
            <p className="article-description">{article.description}</p>
            <div className="article-meta">
              <span className="article-category">{article.category}</span>
              <span className="article-date">{article.publishedAt}</span>
            </div>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more">
              Read More
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

export default NewsContainer;