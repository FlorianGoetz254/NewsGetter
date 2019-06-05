const ParamClasses = require('./src/NewsParams.js');
const NewsGetter = require('./src/NewsGetter.js');

var p = new ParamClasses.SourcesParameter();//HeadLineParameter|EverythingParameter|SourcesParameter
p.country = 'de'

NewsGetter.NewsGetter(p, (res) => {
    console.log(res)
})