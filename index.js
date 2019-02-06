const express = require('express'); //get entire express object , instead of using CDN , we use require here

const server = express();

server.get('/', (request, response) => {
    console.log('This is the home route!');

    response.send('<h1>My Awesome Node Site!</h1>');
});//set up a get , callback function in it, everytime the server get get request to the homepage it use this function, endpoint

server.get('/api/user', (req, res) => {
    const user = {
        name: 'Marty McFly',
        occupation: 'Slacker',
        age: 17,
        email: 'marty@timetravel.com'
    };
    res.send(user);
});

server.listen(9000, () => {
    console.log('server running at localhost:', 9000);
});//port number, callback; one server per port