import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useLang } from "../components/LangProvider.jsx";
import "./Article.css";

function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {language} = useLang();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`https://news-foniuhqsba-uc.a.run.app/articles/${id}`);
        if (!response.ok) throw new Error("Error al cargar el artículo");
        const data = await response.json();
        setArticle(data);

        const relatedResponse = await fetch(
          `https://news-foniuhqsba-uc.a.run.app/${data.category}`
        );
        if (!relatedResponse.ok) throw new Error("Error al cargar noticias relacionadas");
        const relatedData = await relatedResponse.json();
        setRelated(relatedData.filter((item) => item.id !== id));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
  }, [id]);

  if (loading) return <p>Cargando artículo...</p>;
  if (error) return <p>Error: {error}</p>;

  const translated = article.translations[language] || article;
  return (
    <div>
      {translated && (
        <div className="article">
          <h1 className="">{translated.headline}</h1>
          <p>By {article.author}</p>
          <img src={article.image_url} alt={translated.title} />
          <br />
          <p className="body">{translated.body}</p>
          <p>{article.date}</p>
        </div>
      )}
    </div>
  );
}

export default Article;
