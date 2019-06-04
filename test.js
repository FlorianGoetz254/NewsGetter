const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('c68ad56df2ea406c8f7041016fa51489');
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
newsapi.v2.topHeadlines({
  language: 'de',
  country: 'at'
}).then(response => {
  console.log(response);
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
});