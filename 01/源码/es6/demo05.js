var name = 'zhangsan'
var age = 19

var people = {
        name: name,
        age: age
    }
    //es6 简化写法, 把变量名当成属性名，变量的值当成属性的值
var p = {
        name,
        age
    }
    //JSON.stringify 把json对象转成字符串
console.log(JSON.stringify(p));