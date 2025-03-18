import React, { useState, useEffect } from 'react';
import newsData from '../data/news.json';
import './NewsContainer.css';

const NewsContainer = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = () => {
    try {
      setNews(newsData.articles);
      setLoading(false);
    } catch (err) {
      setError('Failed to load news. Please try again later.');
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="news-container">
      {news.map((article) => (
        <div key={article.id} className="news-article">
          <img src={article.imageUrl} alt={article.title} className="article-image" />
          <div className="article-content">
            <h2>{article.title}</h2>
            <p className="article-meta">
              <span className="category">{article.category}</span> | 
              <span className="author">{article.author}</span> | 
              <span className="date">{new Date(article.publishedAt).toLocaleDateString()}</span>
            </p>
            <p className="description">{article.description}</p>
            <p className="content">{article.content}</p>
            <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer" className="source-link">
              Lire l'article complet sur Le Monde
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsContainer;