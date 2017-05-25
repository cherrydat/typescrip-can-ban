let getbounus = function(value:number = 10, tax:number = 9){
    console.log(value + tax);
    console.log(arguments.length);
}

getbounus(undefined, 99);