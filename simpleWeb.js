let express = require("express");
let app     = express();
 
app.get("/", (req, res) => {
  res.send("Hello World");
});
 
app.get("/hi", (req, res) => {
    res.send("Hello World hi");
});
app.listen(8888);

console.log("Running")

app.get("/save", (req, res) => {
    var data = req.param('data');
    fs.writeFileSync("C:/Temp/data.txt", data)
    res.send(data);
  });

  app.get("/get", (req, res) => {
    var data = fs.readFileSync("c:/Temp/index.html", 'utf8');
    res.send(data);
  });

  app.post("/post", (req, res) => {
    var data = req.body;
    res.send(data);
  });
  
  app.use('/public', express.static(__dirname + '/public'));

  app.post("/calc", (req, res) => {
    var data = req.body;
    var result = eval(data);
    res.send(String(result));
  });
  
let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(bodyParser.text());