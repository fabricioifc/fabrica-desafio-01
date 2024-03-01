//setting vars
const { readFile } = require(`fs`);
var http = require(`http`);
const port = 3729;
const ip = `localhost`;
var pageTitle = `loading`;
var pageTemplate = 
`
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Page Title</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='css/bootstrap/bootstrap.min.css'>
</head>
<body>
    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <script src="./js/bootstrap.bundle.min.js"></script>
</body>
</html>
`

//create server
http.createServer(
    function page(req, res){
        if (req.url == `/home`) {
            //title
            var pageTitle = `home`;
            //page
            res.writeHead(200, {'Content-Type': 'text/html'});
            //render file
            res.write(pageTemplate);
            //send
            res.end();

        }else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('not found');
            res.end();
        }
    }
).listen(port, ip);

//print out the HREF
console.log(`Server running...\nhttp://${ip}:${port}`);