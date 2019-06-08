
//client nicht benutzen weil die Website ist besser und schöner und toller.
const yargs = require('yargs')
const {NewsGetter} = require('../NewsGetter.js')
const newsparams = require('../NewsParams.js')

var params;
var argv = yargs.argv
console.log(argv)
if(argv.typ == 'head'){//fuck you deniz
    params = new newsparams.HeadLineParameter();
}
if(argv.typ == 'e'){
    params = new newsparams.EverythingParameter();
}
if(argv.typ == 's'){
    params = new newsparams.SourcesParameter();
}
params.q = argv.q;
params.category = argv.category;
params.country = argv.county;
params.language = argv.language;
params.pageSize = argv.pageSize;
params.page = argv.page;
params.sources = argv.sources;
params.domains = argv.domains;
params.excludeDomains = argv.excludeDomains;
params.from = argv.from;
params.to = argv.to;
params.sortBy = argv.sortBy;
//01000110 01110101 01100011 01101011 00100000 01111001 01101111 01110101 00100000 01000100 01100101 01101110 01101001 01111010 00100001
NewsGetter(params, (content) =>{
console.log(content);
}
)