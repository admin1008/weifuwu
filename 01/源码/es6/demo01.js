// var声明的作用域，是在方法的顶部
// let声明的作用域，仅限于当前的{}
function info() {
    var c = true
        // 常量
    const name = 'zhangsan';
    if (c) {
        var a = 200;
        let d = 400;
        // 不能再次赋值
        name = 'lishi';
    } else {
        a = 300;
    }
    //console.log(a);
    console.log(d);
}

info();