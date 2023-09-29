//https://jacobwicks.github.io/2020/08/10/make-memes-with-express-and-canvas.html

//createCanvas is the function that creates the canvas object
const { createCanvas } = require('canvas');

//accepts an input string
//returns an image of the input text as a buffer
module.exports.makeTextImage = (input) => {
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
  context.fillStyle = "red";

  //fillText draws text onto the canvas
  context.fillText(input, 50, 50, textWidth + 50);

  //set the color to black for the outline
  context.fillStyle = "black";

  //strokeText draws an outline of text on the canvas
  context.strokeText(input, 50, 50, textWidth + 50);

  //return a buffer (binary data) instead of the image itself
  return canvas.toBuffer();
};