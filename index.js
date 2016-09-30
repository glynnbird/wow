var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/getstarted', function(req, res) {
  const exec = require('child_process').exec;
  exec('/home/wow/wow/flush.sh', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
    res.send({ok:true});
  });
})

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});
