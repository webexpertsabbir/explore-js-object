const bottle = {color: 'Yellow', price: 50, isCliend: true, capacity: 1};
const keys = Object.keys(bottle);
// console.log(keys);

/* 3 way read object property
bottle.color
bottle['color']
bottle[key]

*/
for(const key of keys){
    // console.log(key, bottle[key]);
}

for(const key in bottle){
    const value = bottle[key];
    // console.log(value, key);
}



const pair = Object.entries(bottle);
// console.log(pair);

for(const [key, value] of Object.entries(bottle)){
    console.log(key, value);
}