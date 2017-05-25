class Persion{
    run(){
        console.log("persion is runing");
    }
}

let p1 = new Persion();

console.log(typeof(p1));

console.log(typeof(Persion));

p1.run();

Persion.prototype.run();