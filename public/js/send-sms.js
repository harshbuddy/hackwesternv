const accountSid = 'AC7aef723625fff92b9a06ada64b062a49'
const authToken = '124c11aef82a96b62566d42cfcae923a'

const client = require('twilio')(accountSid,authToken);

client.messages.create({
	to: '+19058020392',
	from: '+12898123034',
	body: 'This is the ship that made the Kessel run in 14 parsecs?!'
})
.then((message) => console.log(message.sid));