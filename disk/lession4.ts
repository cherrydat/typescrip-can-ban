
function greetPerson2(name:string){
    let greet;
    if (name === 'chat') {
        greet = 'hello chat';
    }else{
        greet = 'hi there';
    }
    
    console.log(greet);
}

greetPerson('chat');