var array1 = [1,2,3,4];

for (let index = 0; index < array1.length; index++) {
    switch (array1[index]) {
        case 1: console.log("UNO"); break;
        case 2: console.log("DOS"); break;
        case 3: console.log("TRES"); break;
        case 4: console.log("CUATRO"); break;
    }
}

array1.push(3);
console.log(array1);

array1.length = array1.length -3;
console.log(array1);