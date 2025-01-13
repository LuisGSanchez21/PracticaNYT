import React, { useState, useEffect } from "react";
import { useLang } from "../components/LangProvider.jsx";
import "./News.css";
import SearchDialog from "../components/Dialog.jsx";

function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { language } = useLang();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("https://news-foniuhqsba-uc.a.run.app/");
        if (!response.ok) throw new Error("Error al cargar las noticias");
        const data = await response.json();
        setNews(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p>Cargando noticias...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Noticias ({language.toUpperCase()})</h1>
      <SearchDialog articles={news} />
      <div className="news-grid">
        {news.map((article) => {
          const translated = article.translations[language] || article;
          return (
            <div key={article.id} className="news-item">
              <a href={`/news/${article.id}`}>
                <h2>{translated.headline}</h2>
                <p>{translated.abstract}</p>
                <img src={article.image_url} alt={translated.headline} />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default News;
