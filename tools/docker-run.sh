#!/bin/bash

IMAGE_NAME="pamela-web"
IMAGE_VERSION=$(node -p "require('./package.json').version")

echo "========================================="
echo "Running $IMAGE_NAME:$IMAGE_VERSION on port 8080"
echo "========================================="

docker run -it --rm -p 8080:8080 registry.gitlab.com/br-engmanager/$IMAGE_NAME:$IMAGE_VERSION
