var x, y, z;
x = 5;
y = 7;
z = x + y;
console.log(z);

var a, b, c; 
a = "Hello";
b = "World";
c = a + " " + b + "!";
console.log(c);

var x3;
function SumNPrint(x1, x2) {
    x3 = x1 + x2;
    return console.log(x3);
}

var x1 = x;
var x2 = y;
SumNPrint(x1, x2);

var x1 = a + " ";
var x2 = b;
SumNPrint(x1, x2);

if (c.length > z) {
    console.log(c);
} else if (c.length < z) {
    console.log(z);
} else {
    console.log("good job!")
}

var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"]
var L2 = ["Apple", "Banana", "Kiwi", "Orange"]

/*
function findTheBanana(array, targetWord){
    for (let i = 0; i < array.length; i++){
        if (array[i] === targetWord){
            console.log("found the " + targetWord + " in " + i)
        }
    }
}

findTheBanana(L1,"Banana")
findTheBanana(L2,"Banana")
*/

L1.forEach((element, index) => {
    if (element === "Banana") {
        alert("We found a banana in the first array at index " + index);
    }
});
L2.forEach((element, index) => {
    if (element === "Banana") {
        alert("We found a banana in the second array at index " + index);
    }
});



function greetingFunc() {
    var d = new Date();  
    var h = d.getHours();  
    var E = document.getElementById("greeting");  

    if (h >= 5 && h < 12) {  
        E.innerHTML = "Good morning, my name is Isabel.";  
    } else if (h >= 12 && h < 18) {  
        E.innerHTML = "Good afternoon, my name is Isabel."; 
    } else if (h >= 18 && h < 20) {  
        E.innerHTML = "Good evening, my name is Isabel."; 
    } else {  
        E.innerHTML = "Good night, my name is Isabel."; 
    } 
}

var L = window.location.href;
console.log(L);  

if (L.includes("index.html")) {  
   greetingFunc();  // Call the function to update the greeting
}