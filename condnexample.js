//if else
var result = 50;
if (result > 40){
    console.log("you passed.");
} else{
    console.log("failed");
}
//if, else if. else
var place = "first";
if(place == "first"){
    console.log("gold")
} else if(place == "second"){
    console.log("silver")
} else if(place == "third"){
    console.log("bronze")
} else{
    console.log("no medals")
}

//switch
var place = "fourth";

switch(place) {
    case "first":
        console.log("gold");
        break;
    case "second":
        console.log("silver");
        break;
    case "third":
        console.log("bronze");
        break;
    default:
        console.log("no medal");
}