// 导入，对象的解构
import { fn0 } from './demo08_1'

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
fn0();