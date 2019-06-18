// 对象的解构
var people = {
    name: 'zhangsan',
    age: 19,
    address: '水帘洞',
    birthday: '2017-04-14'
}

var pName = people.name;
// 解构, 变更名必须与属性名一致
var { age, birthday, name } = people;
// 数组的解构, 跟顺序有序
var arr = [1, 2, 3, 4]
var [first, third, second] = arr;

console.log(`age=${age}, birthday=${birthday}, name=${name}`);
console.log(`first=${first}, second=${second}, third=${third}`);