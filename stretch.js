/*
Stretch task 2

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
*/

function createBase(base_num) {
    return function (num) {
        console.log("Stretch Task 2: ",base_num + num);
    }
}

var AddSix = createBase(6);
AddSix(10);
AddSix(21);