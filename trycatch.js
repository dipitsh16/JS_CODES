try{
    console.log(a + b);
} catch(err){
    console.log(err)
    console.log("there was an error")
    console.log("the error was saved in error log")
}
console.log("My program does not stop")

//
try{
    throw new ReferenceError();
} catch(err){
    console.log(err);
    console.log("there was a reference error")
}
console.log("My program does not stop")