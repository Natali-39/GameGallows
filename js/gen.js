
//1 вариант
/*function summ(a, b){
    return a+b;
}*/

//2 вариант
/*let summ = function summ(a, b){
    return a+b;
}*/


//3 вариант
/*let summ = (a,b) => {
    return a+b;
}*/

//4 вариант
/*let summ = (a, b) => a + b;*/


function* generate(){
    for(let i = 0; i < 10; i++){
        yield i;
    }
}

let gen = generate();

for(let m of gen){
    console.log(m);
}

console.log(gen.next());
console.log(gen.next());


// example 2
function* show(){
    console.log(`step 1`);
    yield;

    console.log(`step 2`);
    yield;

    console.log(`step 3`);
    yield;
}
let s = show();
s.next();
s.next();
s.next();
s.next();


/*let r = summ(1, 2);*/