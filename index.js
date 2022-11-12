var fs = require ('fs')
var http = require ('http')


var server = http.createServer (function(req, res){

    if(req.url == '/'){
        let data = fs.readFileSync('home.html','utf8')
        res.end(data)
    }
    else if(req.url == '/about.html'){
        let data = fs.readFileSync('about.html','utf8')
        res.end(data)
    }
    else if(req.url == '/project.html'){
        let data = fs.readFileSync('project.html','utf8')
        res.end(data)
    }
    else if (req.url == '/contact.html'){
        let data = fs.readFileSync('contact.html','utf8')
        res.end(data)
    }
})

server.listen(5050)
console.log('server run successfully')