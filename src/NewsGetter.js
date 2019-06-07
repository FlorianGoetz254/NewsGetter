//powered by NewsAPI.org
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('64f8935c750143278ae1ecaef35d5b7a');

const NewsParam = require('./NewsParams.js')

const NewsGetter = (Param, Callback) => {
    if(Param instanceof NewsParam.HeadLineParameter){
        newsapi.v2.topHeadlines({
            //Parameter
            //undefined's sind valid (excl. Nummern(e.g.: Page, PageSize))
            country: Param.country,
            catagory: Param.catagory,
            sources: Param.sources,
            q: Param.q,
            pageSize: Param.pageSize,
            page: Param.page,
            language: Param.language
        }).then(
        response => {
            Callback(response)
            return //response;
        },
        onrejected => {
            console.log(onrejected)
            return;
        }).catch((error)=>{
            console.log(error);
            return;
        })
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