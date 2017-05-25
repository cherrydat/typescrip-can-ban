let displayColorsSpread = function (message:string, ...colors:string[]) {
    for (var i in colors) {
        console.log(colors[i]);
    }    
}

let message = 'hello';
let colors = ['red','green','blue'];
displayColorsSpread(message,...colors);