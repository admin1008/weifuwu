var Mock = require('mockjs')

var data = Mock.mock({
    "list|10": [{
        "id|+2": 10,
        name: "@cname",
        birthday: '@date',
        starttime: '@datetime',
        now: '@now',
        "headImage": "@image",
        "summary": "@ctitle",
        "detail": "@cparagraph(3,6)",
        "姓": "@first",
        "名": "@last",
        "ip": "@ip",
        "email": "@email",
        county: "@county(true)",
        city: "@city",
        region: "@region"
    }]
})

console.log(JSON.stringify(data, null, 2));