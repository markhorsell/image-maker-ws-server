
//createCanvas is the function that creates the canvas object
const { createCanvas } = require('canvas');

//accepts an input string
//returns an image of the input text as a buffer
const makeTextImage = (input) => {
  //creates the html canvas object
  //with a width of 200px
  //and a height of 200px
  const canvas = createCanvas(200, 200);

  //a reference to the 2d canvas rendering context
  //used for drawing shapes, text, and images
  const context = canvas.getContext("2d");

  //the font we are using
  const fontSetting = "bold 50px Impact";

  //set context to use the fontSetting
  context.font = fontSetting;

  //context.measureText is a function that measures the text
  //so we can adjust how wide the finished image is
  const textWidth = context.measureText(input).width;

  //change the canvas width to be wider than the text width
  canvas.width = textWidth + 100;

  //changing canvas width resets the canvas, so change the font again
  context.font = fontSetting;

  //fillStyle sets the color that you are drawing onto the canvas
  context.fillStyle = "green";

  //fillText draws text onto the canvas
  context.fillText(input, 50, 50, textWidth + 50);

  //set the color to black for the outline
  context.fillStyle = "black";

  //strokeText draws an outline of text on the canvas
  context.strokeText(input, 50, 50, textWidth + 50);

  //return a buffer (binary data) instead of the image itself
  return canvas.toBuffer();
};
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
    const image = makeTextImage(input);
  
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

//https://jacobwicks.github.io/2020/08/10/make-memes-with-express-and-canvas.html