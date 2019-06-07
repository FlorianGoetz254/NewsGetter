//powered by NewsAPI.org
const NewsAPI = require('newsapi');
const newapikey = '64f8935c750143278ae1ecaef35d5b7a'
const newsapi = new NewsAPI(newapikey);

const request = require('request')

const NewsParam = require('./NewsParams.js')

const NewsGetter = (Param, Callback) => {
    console.log(Param);

    if(Param instanceof NewsParam.HeadLineParameter){
    //    //https://newsapi.org/v2/top-headlines?country=us&apiKey=64f8935c750143278ae1ecaef35d5b7a !!!example!!!
        var url = 'https://newsapi.org/v2/top-headlines?apiKey=64f8935c750143278ae1ecaef35d5b7a&';
        Param.country != undefined ? url+=`&country=${Param.country}` : null;
        Param.catagory != undefined ? url+=`&catagory=${Param.catagory}` : null;
        Param.sources != undefined ? url+=`&sources=${Param.sources}` : null;
        Param.q != undefined ? url+=`&q=${Param.q}` : null;
        (Param.page != undefined || Param.page < 1) ? url+=`&page=${Param.page}` : null;
        (Param.pageSIze != undefined || Param.pageSize < 1) ? url+=`&pageSize=${Param.pageSize}` : null;
        console.log(url);
        request(url, (error, response, body) => {
            Callback(body);
            console.log(body);
            return;
        })
    //     console.log(Param);
    //     newsapi.v2.topHeadlines({
    //         //Parameter
    //         //undefined's sind valid (excl. Nummern(e.g.: Page, PageSize))
    //         country: Param.country,
    //         catagory: Param.catagory,
    //         sources: Param.sources,
    //         q: Param.q,
    //         pageSize: Param.pageSize,
    //         page: Param.page,
    //     }).then(
    //     response => {
    //         Callback(response)
    //         return //response;
    //     },
    //     onrejected => {
    //         console.log(onrejected)
    //         return;
    //     }).catch((error)=>{
    //         console.log(error);
    //         return;
    //     })
    } else
    if(Param instanceof NewsParam.EverythingParameter){
        newsapi.v2.everything({
            //Parameter
            //undefined's sind valid (excl. Nummern(e.g.: Page, PageSize))
            country: Param.country,
            sources: Param.sources,
            q: Param.q,
            pageSize: Param.pageSize,
            page: Param.page,
            language: Param.language,
            domains: Param.domains,
            excludedomains: Param.excludeDomains,
            from: Param.from,
            to: Param.to,
            sortBy: Param.sortBy
        }).then(
        response => {
            Callback(response)
            return;
        },
        onrejected => {
            console.log(onrejected)
            return;
        }).catch((error)=>{
            console.log(error);
            return;
        })
    } else
    if(Param instanceof NewsParam.SourcesParameter){
        newsapi.v2.sources({
            //Parameter
            //undefined's sind valid (excl. Nummern(e.g.: Page, PageSize))
            country: Param.country,
            language: Param.language,
            catagory: Param.catagory
        }).then(
        response => {
            Callback(response)
            return;
        },
        onrejected => {
            console.log(onrejected)
            return;
        }).catch((error)=>{
            console.log(error);
            return;
        })
    }
    
}

module.exports = {
    NewsGetter
}