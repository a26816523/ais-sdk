#!/bin/sh

#
# Here, if we get the token use the gettoken_curl.sh
#
TOKEN=''
curl -X POST https://ais.cn-north-1.myhuaweicloud.com/v1.0/moderation/image \
  --header 'Content-Type: application/json' \
  --header "X-Auth-Token: $TOKEN" -d'
 {
      "image":"",
      "url":"https://ais-sample-data.obs.cn-north-1.myhwclouds.com/terrorism.jpg",
      "categories": ["politics"],
      "threshold":""
}'
# if you want to use image paramter, change file to base64,please choose only one paramter in data or url
