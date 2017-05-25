class Persion1{
    
    constructor(name:string){
        this.name = name;
        console.log(this.name + 'constructor');
    }

    static talk(){
        console.log('this is static method is talk');
    }

    run(){
        console.log('running');
    }
}

let p = new Persion1('tedu');

Persion1.talk();