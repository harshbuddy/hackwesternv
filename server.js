const express = require('express')
const app = express()

var fs = require('fs');
const port = 3000

app.use(express.static(__dirname + '/public'));


app.get('/', (request, response) => {
  	
	response.writeHead(200,{'Content-Type': 'text/HTML'});
	fs.readFile('./index.html', null, function(error,data){
		if (error) {
			response.writeHead(404);
			response.write("File not found");
		} else {
			response.write(data);
		}
		response.end();
	});
})

app.get('/index.html', (request, response) => {
  	
	response.writeHead(200,{'Content-Type': 'text/HTML'});
	fs.readFile('./index.html', null, function(error,data){
		if (error) {
			response.writeHead(404);
			response.write("File not found");
		} else {
			response.write(data);
		}
		response.end();
	});
})



app.get('/dashboard.html', (request, response) => {

  	response.writeHead(200,{'Content-Type': 'text/HTML'});
	fs.readFile('./dashboard.html', null, function(error,data){
		if (error) {
			response.writeHead(404);
			response.write("File not found");
		} else {
			response.write(data);
		}
		response.end();
	});

 	//const accountSid = 'AC7aef723625fff92b9a06ada64b062a49'
	// const authToken = '124c11aef82a96b62566d42cfcae923a'

	// const client = require('twilio')(accountSid,authToken);

	// client.messages.create({
	// 	to: '+19058020392',
	// 	from: '+12898123034',
	// 	body: 'We hope you're safe. Our systems have detected an accident. We've notified your insurance company and they will be intouch with you. Don't worry, we're here.'
	// })
	// .then((message) => console.log(message.sid)); 
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})

