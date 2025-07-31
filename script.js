const fruits = [{name: "banana",color:"yellow",calories: 159},
                {name: "apple",color:"red",calories: 163},
                {name: "peach",color:"red",calories: 132},
                {name: "grapes",color:"green",calories: 46},
                {name: "mango",color:"yellow",calories: 37}]


//console.log(fruits[4].name);
fruits.push({name:"coconut",color:"brown",seeds:false});
//fruits.pop();//automatically removes last element of array
//fruits.splice(1,3);//removes 1 through 3 elements of array
// --------------forEach()-----------------

//fruits.forEach(element => console.log (element.color));
    // -------------map()-----------------
const fruitNames = fruits.map(element => element.name)
//console.log(fruitNames)

// ------------------filter()--------

const fruitColors = fruits.filter(fruit => fruit.color === "yellow")

const hiCalories = fruits.reduce((max,fruit) =>  fruit.calories > max.calories ? fruit : max )

console.log(hiCalories);