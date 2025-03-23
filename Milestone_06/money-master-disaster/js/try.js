const test = 11;

try{
    console.log("Ami Erfan");
    if(test === 10) {
        console.log("this is 10");
    }
    else{
        throw "Not matched with 10";
    }
    console.log(num);
    console.log("Ami Sadab");
} catch(error){
    console.error("Here is a error: ",error);
    console.error("Here is a error: ",error.name);
    console.error("Here is a error: ",error.message);
} finally{
    console.log("JavaScript");
}