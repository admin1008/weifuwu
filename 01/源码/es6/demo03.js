//springMVC @RequestParam(defaultValue="")
function add(a, b, c = 0) {
    return a + b + c;
}

console.log(add(1, 2))