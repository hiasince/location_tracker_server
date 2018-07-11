var http = require('http');

var server = http.createServer(function(request,response){
  var postData = '';
  request.on('data', function (data) {
    postData = postData + data;
  });

  request.on('end', function () {
    console.log(postData);    //콘솔로 POST로 온 데이터 출력
    response.writeHead(200, {'Content-Type':'text/html'});
    if(postData !== '') {
        response.end('response of POST : You have to give me format');
    }
    else {
        response.end('response of GET');
    }
  });

});

server.listen(8080, function(){
    console.log('Server is running...');
});
