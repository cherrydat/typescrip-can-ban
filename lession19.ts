class Persion2 {
    constructor(name:string) {
        console.log(name+' persion contructor');
    }

    getID() {
        return 10;
    }
}

class Employee2 extends Persion2 {
    constructor(name:string){
        super(name);
        console.log(name+'Employee contructor');
    }
}

let emp3 = new Employee2('abc');