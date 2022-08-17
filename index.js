// Code your solution here
function findMatching(drivers, match){
    const matchedDrivers = drivers.filter(driver =>{
        if(driver.toLowerCase() == match.toLowerCase()){
            return true;
        }
    })

    return matchedDrivers;
}

function fuzzyMatch (drivers, letters){
    const matchedDrivers = drivers.filter(driver =>{
        for(let i = 0; i < letters.length; i++){
            if(driver.toLowerCase()[i] !== letters[i].toLowerCase()){
                return false;
            }
        }
        return true;
    })

    return matchedDrivers;
}

function matchName(drivers, name){
    const matchedDrivers = drivers.filter(driver =>{
        if(driver.name == name){
            return true;
        }
    })

    return matchedDrivers;
}