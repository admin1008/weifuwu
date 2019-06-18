var Mock = require('mockjs')

var data = Mock.mock({
    "list|5": [{
        "id|+2": 10,
        name: "@cname",
        "cellNo|3-6": '123',
        "salary|8000-12000.2-6": 10000,
        "status|1-3": true,
        "borther|2-4": {
            name: '小强',
            age: 16,
            address: '小洞洞',
            birthday: '2018-11-12',
            fav: '糖'
        }
    }]
})

console.log(JSON.stringify(data, null, 2));