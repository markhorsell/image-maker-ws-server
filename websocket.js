const WebSocket = require('ws');
const canvasFuncs = require('./canvastext.js');

//const image = canvasFuncs.makeTextImage(input);

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log(' Code to handle new WebSocket connections')


  ws.on('message', (message) => {
    console.log('Code to handle incoming messages')
    //ws.send(Math.random()*1000)
    const canvas=(canvasFuncs.makeTextImage(message))
    //ws.send(Math.random()*1000)
    //ws.send(JSON.stringify(canvas))
    ws.send(canvas)
    
    //console.log(message)
  });
  ws.on('close', () => {
    // Code to handle client disconnection
  });
  ws.send('CONNECTED')
 
});
console.log('WebSocket server is running...');