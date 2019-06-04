const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('c68ad56df2ea406c8f7041016fa51489');
/*
const headlines () => {
    //To query /v2/top-headlines
    //All options passed to topHeadlines are optional, but you need to include at least one of them
    newsapi.v2.topHeadlines({
        language: undefined,
        country: 'at',
        page: 1
    }).then(response => {
        console.log(response);
    });
}
*/
//To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
newsapi.v2.topHeadlines({
    language: undefined,
    country: 'at',
    page: 1
}).then(response => {
    console.log(response);
});
