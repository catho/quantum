#!/bin/bash
set -e
echo "setting .npmrc"
touch ~/.npmrc
echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" >>~/.npmrc
