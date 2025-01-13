import React, { useState } from "react";
import "./Dialog.css";

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
}
function SearchDialog({ articles }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredArticles, setFilteredArticles] = useState([]);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    setSearchTerm("");
    setFilteredArticles([]);
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const results = articles.filter(
      (article) =>
        article.headline.toLowerCase().includes(term) ||
        (article.abstract && article.abstract.toLowerCase().includes(term))
    );
    setFilteredArticles(results);
  };

  return (
    <div>
      <button onClick={handleOpen}>Open Search</button>
      {isOpen && (
        <Dialog isOpen={isOpen} onClose={handleClose}>
          <div className="buscador">
            <h2>Buscador</h2>
            <input
              type="search"
              id="search-article"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search for articles..."
            />
          </div>
          <ul className="search-results">
            {filteredArticles.map((article) => (
            
              <li key={article.id}>
                <div className="search-item">
                <a href={`/news/${article.id}`}>{article.headline}</a>
                </div>
              </li>

            ))}
          </ul>
        </Dialog>
      )}
    </div>
  );
}

const Dialog = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog-box">
        <div className="dialog-header">
          <button className="dialog-close" onClick={onClose}>
            X
          </button>
        </div>
        <div className="dialog-content">{children}</div>
        <div className="dialog-footer">
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default SearchDialog;
