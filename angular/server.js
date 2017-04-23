var express = require('express');

var app = express();

app.use(express.static('.'));
app.use(express.static('./node_modules'));

app.get('/:number', function(req, res) {
    res.sendFile('example'+req.params.number+'.html', {root: __dirname })
});

app.listen(8080);
