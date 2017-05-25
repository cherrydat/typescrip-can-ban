var greet;
function greetPerson(name:string){
    
    if (name === 'chat') {
        greet = 'hello chat';
    }else{
        greet = 'hi there';
    }   
    console.log(greet);
}

greetPerson('chat');