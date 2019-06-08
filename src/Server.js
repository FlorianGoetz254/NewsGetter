const express = require('express')
var app = express();

const ParamClasses = require('./NewsParams.js');
const { NewsGetter } = require('./NewsGetter.js');

app.listen(3000, () => {
    console.log('NewsGetter is now running on Port 3000')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname+"/Static.html");
    
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
    p.page != undefined ? param.pag = p.page : param.page = 1;
    NewsGetter(param, (content) => {
        content = JSON.parse(content);
        var html = "<html><head></head><body style=\"background-color: #333333;\; \"font-color: whitesmoke;\"  >";
        console.log(content);
        var d = content;
        
        console.log(d);
        d = d.articles;
        html += "Total Results: " + content.totalResults;
        var buildHelper = '';
        content.articles.forEach(element => {
            buildHelper += '<div style=\"margin: 40px;\">';
            buildHelper += "<h1 style=\"color: whitesmoke;\">" + (element.title != undefined ? element.title : element.name) + "</h1>";
            buildHelper += "<h3 style=\"color: whitesmoke;\">" + ("Description: "+element.description) + "</h3>";
            buildHelper += "<h5 style=\"color: whitesmoke;\">" + (element.author != undefined ? "Author: "+element.author+" | " : "Category: "+element.category + element.publishedAt !== undefined ? "Published at: "+element.publishedAt : "") + "</h5>";
            
            buildHelper += "<h5 style=\"color: whitesmoke;\">"+ (element.content !== undefined ? element.content+"<br>" : "Country: "+element.country) +"</h5> <br>";
            buildHelper += "<a href=\"" + element.url + "\" >"+element.url+"</a><br>";
            buildHelper += "</div>"
            html += buildHelper;
        });
        html += "</body></html>";
        //console.log(html);
        res.send(html);
    });
});

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
    (NewsGetter(param, (content) => {
        content = JSON.parse(content);
        var html = "<html><head></head><body body style=\"background-color: #333333;\; \"font-color: whitesmoke;\">";
        var d = content;
        //var d = JSON.parse(content);
        var articles = d.articles;
        html += "Total Results: " + content.totalResults;
        articles.forEach(element => {
            html += '<div style=\"margin: 40px;\">';
            html += "<h1 style=\"color: whitesmoke;\">" + (element.title !== undefined ? element.title : element.name) + "</h1><br>"
            html += "<h5 style=\"color: whitesmoke;\">" + (element.author !== undefined ? "Author: "+element.author : "Category: "+element.category + element.publishedAt !== undefined ? " | Published at: "+element.publishedAt : "") + "</h5><br>"
            html += "<h3 style=\"color: whitesmoke;\">" + ("Description: "+element.description) + "</h3><br>"
            html += "<h5 style=\"color: whitesmoke;\">" (element.content !== undefined ? element.content : "Country: "+element.country) + "</h5><br>"
            html += "<a href=\"" + element.url + "\" >"+element.url+"</a>";
            html += "</div>"
        });
        html += "</body></html>";
        console.log(html);
        res.send(html)
    }))
})

app.get('/Sources', (req, res) => {
    //console.log(req.query)
    var p = req.query;
    var param;
    param = new ParamClasses.SourcesParameter();
    param.country = p.country
    param.catagory = p.catagory
    param.language = p.language;
    (NewsGetter(param, (content) => {
        content = JSON.parse(content);
        var html = '<html><head></head><body style = \"background-color:#333333\;">';
        var d = content;
        //var d = JSON.parse(content);
        var articles = d.sources;
        articles.forEach(element => {
            html += '<div style=\"margin: 40px;\">';
            html += "<h1 style=\"color: whitesmoke;\">" + (element.title !== undefined ? element.title : element.name) + "</h1>"
            html += "<h5 style=\"color: whitesmoke;\">" + (element.author !== undefined ? "Author: "+element.author : "Category: "+element.category + element.publishedAt !== undefined ? " | Published at: "+element.publishedAt : "") + "</h5>"
            html += "<h3 style=\"color: whitesmoke;\">" + ("Description: "+element.description) + "</h3>"
            html += element.content !== undefined ? element.content : "Country: "+element.country + "<br>"
            html += "<a href=\"" + element.url + "\" >"+element.url+"</a>";
            html += "</div>"
        });
        html += "</body></html>";
        console.log(html);
        res.send(html)
    }))
})