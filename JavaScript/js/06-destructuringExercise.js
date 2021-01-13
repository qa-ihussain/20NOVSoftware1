let user = {
    fullname: "John",
    years: 30
};

let { fullname, years: age, isAdmin = false } = user;

alert(fullname); // John
alert(age); // 30
alert(isAdmin); // false