//https://jacobwicks.github.io/2020/08/10/make-memes-with-express-and-canvas.html

//createCanvas is the function that creates the canvas object
const { createCanvas, loadImage } = require('canvas');

const fs=require('fs')

let fileData=null;
loadImage(__dirname+'/examples/images/avatar-photo.jpeg').then(image => {
  fileData=image;
})

//accepts an input string
//returns an image of the input text as a buffer
module.exports.makeTextImage = (input) => {

  //loadImage('examples/avatar-photo.jpg').then((image) => {
    //ctx.drawImage(image, 50, 0, 70, 70)
    //ctx.drawImage(background,0,0);  

    
  //creates the html canvas object
  //with a width of 200px
  //and a height of 200px
  const canvas = createCanvas(500, 500);

  

  //a reference to the 2d canvas rendering context
  //used for drawing shapes, text, and images
  const context = canvas.getContext("2d");

  context.drawImage(fileData, 0, 0, 500, 500)

  //the font we are using
  const fontSetting = "bold 50px Impact";

  //set context to use the fontSetting
  context.font = fontSetting;

  //context.measureText is a function that measures the text
  //so we can adjust how wide the finished image is
  //const textWidth = context.measureText(input).width;

  //change the canvas width to be wider than the text width
  //canvas.width = textWidth + 100;

  //context.fillStyle = "green";
  //context.fillRect(5,5,canvas.width-5,500)

  //changing canvas width resets the canvas, so change the font again
  context.font = fontSetting;

  //fillStyle sets the color that you are drawing onto the canvas
  context.fillStyle = "red";

  //fillText draws text onto the canvas
  context.fillText(input, 50, 50 /*, textWidth + 50*/);

  //set the color to black for the outline
  context.fillStyle = "black";

  //strokeText draws an outline of text on the canvas
  //context.strokeText(input, 50, 50, textWidth + 50);

  //return a buffer (binary data) instead of the image itself
  //return canvas.toBuffer();
  //dataurls only png or jpg avif in future?
 // return canvas.toDataURL("image/png")



// or with async/await:
//const myimg = await loadImage('examples/images/avatar-photo.jpeg')
/*
fs.readFile(__dirname+"/examples/images/avatar-photo.jpeg", async function(err,data){
  console.log('wait')
  console.log(__dirname)
  const img = await loadImage(data);
  console.log('received')
  context.drawImage(data,0,0,300,300)
})
*/

//console.log('yy')
return canvas.toDataURL("image/png")
    
  
};