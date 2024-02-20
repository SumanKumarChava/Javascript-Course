var a = [3,6,9,2,4];

function binary(n){
    return n.toString(2);
}


console.log(a.map(t=>t*t));

console.log(a.map(binary));

console.log("All Even numbers are : " + a.filter(t => t%2 == 0));


console.log(a.reduce(function(max,current){
    if(current > max){
        max = current;
    }
    return max;
},0));