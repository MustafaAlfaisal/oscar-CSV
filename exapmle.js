// load the packages
const mostCommon = require('most-common');
const inArray = require('in-array');
const _ = require('underscore');
// colums of the csv files
var columns = ["Index", "Year", "Age" , "Name", "Movie"];
var prob1 = [];

var w ;
 require("csv-to-array")({
   file: "./oscar.csv",
   columns: columns
}, function (err, array) {
  //console.log(err || array);

 // etrate through the file and push elements to the array
  for(let i=0 ; i<array.length ; i++){  
  		
      //print name of the actor who has more Oscars from the others
      console.log(mostCommon());
      //print name of the actor who has more Oscars from the others
      console.log(mostCommon());
      //print name of the actor who is the oldest actor or actress who got the Oscar, in what year and for what movie
      console.log(mostCommon());
  }
})