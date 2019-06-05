const express = require('express')
var app = express();

const ParamClasses = require('./NewsParams.js');
const { NewsGetter } = require('./NewsGetter.js');

app.listen(3000, () => {
    console.log('Example app listening on port 3000')
})

app.get('/HeadLines', (req, res) => {
    console.log(req.query)
    var p = req.query;
    var param;
    param = new ParamClasses.HeadLineParameter();
    param.country = p.country
    param.catagory = p.catagory
    param.sources = p.sources
    param.q = p.q
    p.pageSize != undefined ? param.pageSize = p.pageSize : param.pageSize = 20
    param.pageSize > 100 ? param.pageSize = 100 : null
    p.page != undefined ? param.pag = p.page : param.page = 1
    param.language = p.language;
    (NewsGetter(param, (d) => {
        res.send(d)
    }))
})

app.get('/Everything', (req, res) => {
    console.log(req.query)
    var p = req.query;
    var param;
    param = new ParamClasses.EverythingParameter();
    param.country = p.country
    param.sources = p.sources
    param.q = p.q
    p.pageSize != undefined ? param.pageSize = p.pageSize : param.pageSize = 20
    param.pageSize > 100 ? param.pageSize = 100 : null
    p.page != undefined ? param.pag = p.page : param.page = 1
    param.language = p.language
    param.domains = p.domains
    param.excludeDomains = p.excludeDomains
    param.from = p.from
    param.to = p.to
    param.sortBy = p.sortBy;
    (NewsGetter(param, (d) => {
        res.send(d)
    }))
})

app.get('/Sources', (req, res) => {
    console.log(req.query)
    var p = req.query;
    var param;
    param = new ParamClasses.SourcesParameter();
    param.country = p.country
    param.catagory = p.catagory
    param.language = p.language;
    (NewsGetter(param, (d) => {
        res.send(d)
    }))
})