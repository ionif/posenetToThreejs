# the Poor Boys immersive XR experience

This repo aims to use the posenet ml model to allow someone with Google Cardboard and another device (smartphone, tablet, laptop) experience what it's like for your body to be inside a virtual world.
It uses SocketIO for websocket communication on port 3030. 

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
