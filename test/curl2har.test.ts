import curl2har from '../src/curl2har'
let path = require('path')
let fs = require('fs')

describe('works', () => {
  let har=curl2har(`curl 'http://localhost:1205/Foodorder/R011LongMealOrder/Post' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6' \
  -H 'Authorization: Basic eyJhY2Nlc3NfdG9rZW4iOiI3NzIzZTA4ZDEwZTUxNTM0IiwidG9rZW5fdHlwZSI6ImJlYXJlciIsImV4cGlyZXNfaW4iOjYwNDgwMCwicmVmcmVzaF90b2tlbiI6IjkxYzIwYjA0ZjYxNGEwMDMiLCJzY29wZSI6ImNvbW1vbixyZWd1bGFyLG1hbmFnZW1lbnQiLCJzeXN0ZW1faWQiOjEsImNlcnRpZmljYXRlX2lkIjoxLCJ1aWQiOjI5NDM2OTEwNjA2NzgyNSwib3BlbmlkIjpudWxsfQ==' \
  -H 'Connection: keep-alive' \
  -H 'Origin: http://localhost:3008' \
  -H 'Referer: http://localhost:3008/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'UnitID: 1830959406121202' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5100.0 Safari/537.36 Edg/104.0.1284.0' \
  -H 'content-type: application/json' \
  -H 'sec-ch-ua: "Chromium";v="104", "/Not)A;Brand";v="24", "Microsoft Edge";v="104"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Windows"' \
  --data-raw $'{\n  "isNext": false,\n  "Year": 2022,\n  "Month": 6,\n  "TypeAddressValue": 0,\n  "SeveralMonths": 1,\n  "LunchCount": 1,\n  "DinnerCount": 1,\n  "StartTime": "2022-06-02",\n  "EndTime": "2022-6-30",\n  "RestaurantID": 1864462332068086,\n  "CommunityID": 1835981699285146,\n  "IDNumber": "420******81X",\n  "ParentMobile": "13127877225",\n  "Address": "科海大楼",\n  "DiningTypeValue": 1,\n  "IsMinimumliving": false,\n  "Remarks": "test",\n  "StatusText": "已受理",\n  "Status": 1,\n  "IsSubscripe": true,\n  "RestaurantName": "周家渡街道社区食堂",\n  "CommunityName": "上南一村",\n  "DiningType": "午餐",\n  "ParentName": "王刚",\n  "ParentID": 3413876347502630,\n  "TypeAddress": "送到家"\n}' \
  --compressed`);
  let harObj={
    "method": "POST",
    "url": "http://localhost:1205/Foodorder/R011LongMealOrder/Post",
    "queryString": [],
    "headers": [{
      "name": "Accept",
      "value": "application/json, text/plain, */*"
    }, {
      "name": "Accept-Language",
      "value": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"
    }, {
      "name": "Authorization",
      "value": "Basic eyJhY2Nlc3NfdG9rZW4iOiI3NzIzZTA4ZDEwZTUxNTM0IiwidG9rZW5fdHlwZSI6ImJlYXJlciIsImV4cGlyZXNfaW4iOjYwNDgwMCwicmVmcmVzaF90b2tlbiI6IjkxYzIwYjA0ZjYxNGEwMDMiLCJzY29wZSI6ImNvbW1vbixyZWd1bGFyLG1hbmFnZW1lbnQiLCJzeXN0ZW1faWQiOjEsImNlcnRpZmljYXRlX2lkIjoxLCJ1aWQiOjI5NDM2OTEwNjA2NzgyNSwib3BlbmlkIjpudWxsfQ=="
    }, {
      "name": "Connection",
      "value": "keep-alive"
    }, {
      "name": "Origin",
      "value": "http://localhost:3008"
    }, {
      "name": "Referer",
      "value": "http://localhost:3008/"
    }, {
      "name": "Sec-Fetch-Dest",
      "value": "empty"
    }, {
      "name": "Sec-Fetch-Mode",
      "value": "cors"
    }, {
      "name": "Sec-Fetch-Site",
      "value": "same-site"
    }, {
      "name": "UnitID",
      "value": "1830959406121202"
    }, {
      "name": "User-Agent",
      "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5100.0 Safari/537.36 Edg/104.0.1284.0"
    }, {
      "name": "content-type",
      "value": "application/json"
    }, {
      "name": "sec-ch-ua",
      "value": "\"Chromium\";v=\"104\", \"/Not)A;Brand\";v=\"24\", \"Microsoft Edge\";v=\"104\""
    }, {
      "name": "sec-ch-ua-mobile",
      "value": "?0"
    }, {
      "name": "sec-ch-ua-platform",
      "value": "\"Windows\""
    }, {
      "name": "Accept-Encoding",
      "value": "deflate, gzip"
    }],
    "cookies": [],
    "postData": {
      "mimeType": "application/json",
      "params": [],
      "text": "${\n  \"isNext\": false,\n  \"Year\": 2022,\n  \"Month\": 6,\n  \"TypeAddressValue\": 0,\n  \"SeveralMonths\": 1,\n  \"LunchCount\": 1,\n  \"DinnerCount\": 1,\n  \"StartTime\": \"2022-06-02\",\n  \"EndTime\": \"2022-6-30\",\n  \"RestaurantID\": 1864462332068086,\n  \"CommunityID\": 1835981699285146,\n  \"IDNumber\": \"420******81X\",\n  \"ParentMobile\": \"13127877225\",\n  \"Address\": \"科海大楼\",\n  \"DiningTypeValue\": 1,\n  \"IsMinimumliving\": false,\n  \"Remarks\": \"test\",\n  \"StatusText\": \"已受理\",\n  \"Status\": 1,\n  \"IsSubscripe\": true,\n  \"RestaurantName\": \"周家渡街道社区食堂\",\n  \"CommunityName\": \"上南一村\",\n  \"DiningType\": \"午餐\",\n  \"ParentName\": \"王刚\",\n  \"ParentID\": 3413876347502630,\n  \"TypeAddress\": \"送到家\"\n}"
    }
  }
  it('curl2har test', () => {
    expect(har).toEqual(harObj);
  });
});

