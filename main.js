const ParamClasses = require('./src/NewsParams.js');
const NewsGetter = require('./src/NewsGetter.js');

var p = new ParamClasses.HeadLineParameter();
//p.language = 'de'
p.catagory = 'health'
p.q = 'crisper'

NewsGetter.NewsGetter(p, (res) => {
    console.log(res)
})