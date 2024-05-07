#!/bin/bash

IMAGE_NAME="pamela-web"
IMAGE_VERSION=$(node -p "require('./package.json').version")

echo "========================================="
echo "Pushing image $IMAGE_NAME:$IMAGE_VERSION"
echo "========================================="

docker push registry.gitlab.com/br-engmanager/$IMAGE_NAME:$IMAGE_VERSION
