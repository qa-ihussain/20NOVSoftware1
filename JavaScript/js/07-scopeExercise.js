function submit() {
    let x = "foo";
    if (x == "foo") {
        let y = "boo";
    }
    console.log(x); // 'foo'
    console.log(y); // 'Reference error'
}
submit();

function doSomething() {
    console.log(a);
    console.log(foo());
    let a = 1;

    function foo() {
        return 2;
    }
}
doSomething(); //Reference error