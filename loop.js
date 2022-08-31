const bottle = {color: 'Yellow', price: 50, isCliend: true, capacity: 1};
const keys = Object.keys(bottle);
console.log(keys);

/* 3 way read object property
bottle.color
bottle['color']
bottle[key]

*/
for(const key of keys){
    console.log(key, bottle[key]);
}

