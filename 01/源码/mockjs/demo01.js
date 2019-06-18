var Mock = require('mockjs')

var data = Mock.mock({
    "list|10": [{
        "id|+2": 10,
        name: "@cname"
    }]
})

console.log(JSON.stringify(data, null, 2));