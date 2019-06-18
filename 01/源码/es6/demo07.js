// 扩展操作符...
var people = {
        name: 'zhangsan',
        age: 19
            // ,brother: {
            //     name: 'lishi',
            //     age: 18
            // }
    }
    // 添加属性, ...引用原来的数据, 很少用
people = {...people, address: '水帘洞' }

//es5，添加属性 比扩展操作符还容易使用
people.birthday = '2019-04-14'
people['gender'] = 0; // 0：雌性  1：雄性


people['brother.name'] = "lishi";

//数组
var arr = [1, 2, 3]
arr = [...arr, 4, 5, 6]

arr.push(7, 8, 9)
arr = arr.concat([10, 11, 12]);
console.log(arr);
console.log(JSON.stringify(people));

delete people.birthday;

people.age = "张三的年龄"

console.log(JSON.stringify(people));


console.log(people['brother.name'])