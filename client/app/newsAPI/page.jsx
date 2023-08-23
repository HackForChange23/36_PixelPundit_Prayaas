"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const dotenv = require("dotenv").config({ path: './config.env'});


function filterArticles(articles) {
    const filteredArticles = articles.filter(article => {
      const articleTitle = article.title.toLowerCase();
      article.publishedAt = formatDate(article.publishedAt)
      return articleTitle.includes("farmer") || articleTitle.includes("farmers") || articleTitle.includes("peasants");
    });
  
    return filteredArticles;
  }

function formatDate(dateString) {
    const options = { year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    // hour: 'numeric', 
    // minute: 'numeric', 
    // second: 'numeric', 
    // timeZoneName: 'short' 
  };
    return new Date(dateString).toLocaleString('en-US', options);
  }
  

  
const NewsComponent = () => {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  const searchResults = news.filter(article => {
    const articleTitle = article.title.toLowerCase();
    return articleTitle.includes(searchQuery.toLowerCase());
  }).map(article => {
    return {
      ...article,
      trimmedTitle: article.title.length > 10 ? article.title.substring(0, 10) + '...' : article.title
    };
  }).slice(0, 5);
  

  useEffect(() => {


    const apiKey = process.env.NEWSAPI_KEY
    var all_articles;
    // Make a GET request to the API endpoint
    fetch(`https://newsapi.org/v2/everything?q=farmers%20OR%20%22marginal%20farmers%22%20OR%20%22farmer%20scheme%22%20OR%20%22farmer%20loan%20scheme%22%20OR%20%22farming%20tips%22%20OR%20crops%20OR%20%22india%20farmers%22%20OR%20%22farming%20weather%22%20OR%20%22farming%20pesticides%22%20OR%20%22Indian%20Farmers%22&country&apiKey=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        // Process the data and display news articles
        var articles = data.articles;
        var articles = filterArticles(articles)
        console.log(articles[0])
        setNews(articles)
      }
      )
      .catch(error => {
        console.error('Error fetching news articles:', error);
      });
    
  }, []);

  return (
    <div>
      <h1 style={{textAlign: 'center', fontSize: '22px', fontWeight: 'bold', color: 'darkblue', margin: '10px 0', backgroundColor: 'lightBlue'}}>Latest News</h1>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
      <input style={{margin: '10px 5px', padding: '10px 15px', width: '90vw', maxWidth: '300px', boxShadow: '3px 3px 20px #000', borderRadius: '15px'}}
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search by article title"
      />
      { searchQuery!='' &&
      <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        {searchResults.map((article, index) => (
          <div key={index} style={{maxHeight: 'auto',minHeight: '300px', margin: '10px 5px', padding: '10px', width: '90vw', maxWidth: '300px', boxShadow: '3px 3px 20px #000', display: 'flex', flexDirection: 'column', borderRadius: '7px', backgroundImage: 'linear-gradient(270deg, #9dde7e, #74b058)'}}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <img src={article.urlToImage} alt='Not Found' style={{height: '230px', marginBottom: '10px'}}></img>
              <p style={{textAlign: 'center', fontWeight: 'bold'}}>{article.title}</p>
              <div style={{display: 'flex', margin: '5px 0 0 50%', padding: '5px', justifyContent: 'flex-end', backgroundColor: 'black', color: '#fff', marginLeft: '50%', borderRadius: '5px'}}>
                {article.publishedAt}
              </div>
            </a>
          </div>
        ))}
      </div>
      }
    </div>
    { searchQuery == '' &&
      <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        {news.map((article, index) => (
          <div style={{maxHeight: 'auto',minHeight: '300px', margin: '10px 5px', padding: '10px', width: '90vw', maxWidth: '300px', boxShadow: '3px 3px 20px #000', display: 'flex', flexDirection: 'column', borderRadius: '7px', backgroundImage: 'linear-gradient(270deg, #9dde7e, #74b058)'}}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <img src={article.urlToImage} alt='Not Found' style={{height: '230px', marginBottom: '10px'}}></img>
              <p style={{textAlign: 'center', fontWeight: 'bold'}}>{article.title}</p>
              <div style={{display: 'flex', margin: '5px 0 0 50%', padding: '5px', justifyContent: 'flex-end', backgroundColor: 'black', color: '#fff', marginLeft: '50%', borderRadius: '5px'}}>
                {article.publishedAt}
              </div>
            </a>
          </div>
      
        ))}
      </div>

    }
   
    </div>
  );
};

export default NewsComponent;
