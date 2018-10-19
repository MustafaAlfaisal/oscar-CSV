// loads the csv module referenced above.
var csv = require('csv'); 
​
// gets the csv module to access the required functionality
var obj = csv(); 

​// Define the MyCSV object with parameterized constructor, this will be used for storing the data read from the csv into an array of MyCSV. You will need to define each field as shown above.
function MyCSV(index, year, age, name, movie) {
    this.FieldOne = index;
    this.FieldTwo = year;
    this.FieldThree = age;
    this.FieldFour = name;
    this.FieldFive = movie;
}; 
​// MyData array will contain the data from the CSV file and it will be sent to the clients request over HTTP. 
var MyData = []; 
​
//Reads the CSV file from the path you specify, and the data is stored in the array we specified using callback function.  This function iterates through an array and each line from the CSV file will be pushed as a record to another array called MyData , and logs the data into the console to ensure it worked.
obj.from.path('oscar.csv').to.array(function (data) {
    for (var index = 0; index < data.length; index++) {
        MyData.push(new MyCSV(data[index][0], data[index][1], data[index][2], data[index][3], data[index][4]));
    }
    console.log(MyData);
});
​//Load the http module.
var http = require('http');
​
// Create a webserver with a request listener callback.  This will write the response header with the content type as json, and end the response by sending the MyData array in JSON format.
var server = http.createServer(function (req, resp) {
    resp.writeHead(200, { 'content-type': 'application/json' });
    resp.end(JSON.stringify(MyData));
});
​
server.listen(8080);
// Tells the webserver to listen on port 8080(obviously this may be whatever port you want.)