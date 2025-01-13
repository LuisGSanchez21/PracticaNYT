import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Category.css";
import { useLang } from "../components/LangProvider.jsx";

function Category() {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {language} = useLang();

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch(`https://news-foniuhqsba-uc.a.run.app/${category}`);
        if (!response.ok) throw new Error("Error al cargar la categoría");
        const data = await response.json();
        setArticles(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCategory();
  }, [category]);

  if (loading) return <p>Cargando artículos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1 className="title">{category} ({language.toUpperCase()})</h1>
      <div className="category-grid">
        {articles.map((article) => {
            const translated = article.translations[language] || article;
            return(
          <div key={article.id} className="category-item">
            <Link to={`/${category}/${article.id}`}>
              <h2>{translated.headline}</h2>
              <p>{translated.abstract}</p>
              <p>{translated.date}</p>
              <img src={article.image_url} alt={translated.headline} />
            </Link>
          </div>
        );
        })}
      </div>
    </div>
  );
}

export default Category;
