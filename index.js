
const canvasFuncs=require('./canvastext.js')

require('./websocket.js')


//get the express library
const express = require("express");

//the web server
const app = express();

//the port that the server will listen on
const port = 8081;

//text is the route
//:input designates a parameter of the route
app.get("/text/:input", (req, res) => {
    //the ? means optional chaining
    //input will be a string equal to whatever the user types after the route
    const input = req?.params?.input;
  
    //call the makeTextImage function
    //and wait for it to return the buffer object
    const image = canvasFuncs.makeTextImage(input);
  
    //create the headers for the response
    //200 is HTTTP status code 'ok'
    res.writeHead(
      200,
      //this is the headers object
      {
        //content-type: image/jpg tells the browser to expect an image
        "Content-Type": "image/jpg",
      }
    );
  
    //ending the response by sending the image buffer to the browser
    res.end(image);
  });



//this is a 'route'
//it defines the response to an http 'get' request
app.get("/", (req, res) =>
  //this response will display text in the browser
  res.send("You have reached the Meme Maker")
);

//start the web server listening
app.listen(port, () => {
  console.log(`Meme Maker listening at on port ${port}`);
});

