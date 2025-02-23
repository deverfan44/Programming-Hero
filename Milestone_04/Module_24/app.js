function calculateVAT(price) {
    if(typeof price !== "number" || price < 0) {
        return "Invalid";
    } 

    const vat = price * (7.5/100);
    return vat;
}


function  validContact( contact ) {
    if(typeof contact !== "string") return "Invalid";
    
    let contactLength = contact.length;
    let isSpace = contact.includes(" ");
    if(contactLength !== 11 || isSpace === true || contact[0] !== '0' || contact[1] !== '1') {
        return false;
    }
    else return true;
}


function  willSuccess( marks ) {
    if(!Array.isArray(marks)) return "Invalid"; 

    let passCount = 0, failCount = 0;
    for(let num of marks) {
        if(num<50) {
            failCount++;
        }
        else passCount++;
    }
    return (passCount>failCount) ? true : false;
}

function  validProposal( person1 , person2 ) {
    if(typeof person1 !== 'object' || typeof person2 !== 'object' || Array.isArray(person1) || Array.isArray(person2)) return "Invalid";
    
    let ageDifference = Math.abs(person1.age - person2.age);
    if(person1.gender.toLowerCase() === person2.gender.toLowerCase() || ageDifference > 7) return false;
    else return true;
}


function  calculateSleepTime( times ) {
    let totalSecond = 0;
    for(let item of times) {
        if(typeof item !== "number") return "Invalid";
        totalSecond += item;
    }

    let hour = parseInt(totalSecond/3600);
    let extraSecond = totalSecond%3600;
    let minute = parseInt(extraSecond/60);
    let second = extraSecond%60;

    return {
        hour: hour,
        minute: minute,
        second: second
    }
}









