const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('c68ad56df2ea406c8f7041016fa51489');
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
            return;
        },
        onrejected => {
            console.log(onrejected)
            return;
        }).catch((error)=>{
            console.log(error);
        })
    } else
    if(Param instanceof NewsParam.EverythingParameter){
        return;
    } else
    if(Param instanceof NewsParam.SourcesParameter){
        return;
    }
    
}

module.exports = {
    NewsGetter
}