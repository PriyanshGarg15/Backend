function fun(x) {
    console.log(x + 10);
    return x*10;
}

// let x = fun(10);
console.log(fun(10));



// --------------------------------------------------------NOTES-------------------------------------------------------------------------

// return is not manditory if we dont return than it automatically return undefined


// return keyword returns output out of the function and immediately stops function


// console.log is also a function which is internally defined in js it prints its inside value but it also returns undefined
// i.e if we will write console.log(console.log(10))
// first it print 10 then outer console print inner console return i.e undefined then outer console also gives return of undefiend 
// i.e output will be 10 undefined <-undefined