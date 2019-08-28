#!/bin/bash

clear

while [ "$result" == "" ]
do
  result=`curl -L --silent http://localhost:9006/`
  echo "Waiting for http://localhost:9006/"
  sleep 3
done

echo "http://localhost:9006/ up and running!"

yarn test:regression

fuser -k 9006/tcp