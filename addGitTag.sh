#!/bin/bash

# check this version is enable to release or not
npx can-npm-publish
if [ $? -eq 1 ] ; then
  exit 255
fi

# get current version from package.json
TAG=$(cat package.json | grep version | cut -d ":" -f 2 | tr -d " ,\"")
echo "add new tag to GitHub: ${TAG}"

# Add tag to GitHub
API_URL="https://api.github.com/repos/${REPO}/git/refs"

curl -v -X POST $API_URL \
  --header "authorization: Bearer ${GITHUB_TOKEN}" \
  --header "content-type: application/json" \
  -d @- << EOS
{
  "ref": "refs/tags/${TAG}",
  "sha": "${COMMIT}"
}
EOS
