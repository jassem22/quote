import { useState, useEffect } from 'react';
import './index.css';

const QuoteGenerator = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const API_URL = 'https://api.quotable.io/random';

  const fetchQuote = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error('Error fetching quote:', error);
      setQuote('Failed to fetch quote. Please try again.');
      setAuthor('');
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="inner">
      <h1>Random Quote Generator</h1>
      <div className="box">
        <p className="quote">"{quote}"</p>
        <p className="author">- {author}</p>
      </div>
      <button className="button" onClick={fetchQuote}>
        regenerate
      </button>
    </div>
  );
};

export default QuoteGenerator;