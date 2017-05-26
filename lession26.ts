class Persion4{
    public fanem:string;
    public lname:string;
    constructor(fname:string, lname:string){
        this.fanem = fname;
        this.lname = lname;
    }
}

class Persion5{
    constructor(public fname: string, public lname:string){

    }
}

var per1 = new Persion5('tedu','hello');
console.log(per1.fname + per1.lname);