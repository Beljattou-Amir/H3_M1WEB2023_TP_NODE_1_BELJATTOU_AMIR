const http = require('http')
const port = 5000
const server = http.createServer((req, res) => {
    res. write('hello im working');
    res. end()
});
server. listen(port, function(error) {
    if (error) {
        console.log('Man, something went wrong !', error)
    }else {
        console.log('Server is lestening on port ' + port)
    }


})