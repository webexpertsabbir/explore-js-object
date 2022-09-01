const first = {a: 4, b: 5, c: 2};
const second = {a: 4, b: 5, c: 2}


function compareObject(firs, second){
    const firstKes = Object.keys(first);
    const secondKes = Object.keys(second);
    if(firstKes.length === secondKes.length){
        for(const key of firstKes){
            if(first[key] !== second[key]){
                return false;
            }
        }
        return true;
        }
}

const compare = compareObject(first, second);
console.log(compare);