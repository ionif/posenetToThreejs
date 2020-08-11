# Controlling Three.js 3D model with Tensorflow.js Posenet and SocketIO

![demo](https://github.com/ionif/posenetToThreejs/blob/master/demo.gif)

It uses SocketIO for websocket communication on port 3030. 

There are two clients: posnet and http://localhost:3030
that connect to the websocket server at ws://localhost:3030

You need yarn and npm for this to work.

To start the server: \
`cd server/` \
`npm start`

To start the client:
#### Quickstart
`cd posenet` \
`chmod a+x quickstart.sh` \
`./quickstart.sh`
#### Normal
`cd posenet` \
`yarn` \
`yarn build && yarn yalc publish` \
`cd demos` \
`yarn` \
`yarn yalc link @tensorflow-models/posenet` \
`yarn watch`

To update the client: \
`cd posenet/demos/` \
`chmod a+x build.sh` \
`./build.sh`

(On MacOS, make sure in Xcode, Preferences -> Locations, that Command Line Tools is valid)
