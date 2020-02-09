var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    //console.log(url);
    var queryData = url.parse(_url, true).query;

    //meaningful word
    var title = queryData.id;
    console.dir(queryData);

    if(_url == '/'){
        //index.html
        title = "Welcome";
        queryData.id = "WEB";
    }
    if(_url == '/favicon.ico'){
     	response.writeHead(404);
    }
    response.writeHead(200);

    //undefined problem => `data/${queryData.id}` modified
    fs.readFile(`${__dirname}/data/${queryData.id}`, 'utf8', function(err, description) {
        var template = `
            <!doctype html>
            <html>
            <head>
                <title>WEB1 - ${title}</title>
                <meta charset="utf-8">
            </head>
            <body>
                <h1><a href="/">WEB</a></h1>
                <ol>
                    <li><a href="/?id=HTML">HTML</a></li>
                    <li><a href="/?id=CSS">CSS</a></li>
                    <li><a href="/?id=JavaScript">JavaScript</a></li>
                </ol>
                <h2>${title}</h2>
                <p>${description}</p>
            </body>
            </html>
            `;

        response.end(template);
    })
});
app.listen(3000);