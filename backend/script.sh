#!/bin/sh
echo "npm install ..."
npm install

echo "npm install -g nodemon ..."
npm install -g nodemon

echo "nodemon index.js localhost 8080 ..."
nodemon index.js localhost 8080