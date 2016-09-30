var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/getstarted', function(req, res) {
  res.send({ok:true});
  const exec = require('child_process').exec;
  exec('cat *.js bad_file | wc -l', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });

  
})

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});
