#!/bin/bash
set -e

touch ~/.npmrc
echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" >>~/.npmrc
