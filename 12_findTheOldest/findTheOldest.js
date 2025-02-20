const findTheOldest = function(people) {
    return people.sort((a, b) => {
        aAge = a.yearOfDeath != undefined ? (a.yearOfDeath - a.yearOfBirth) : ((new Date()).getFullYear() - a.yearOfBirth)
        bAge = b.yearOfDeath != undefined ? (b.yearOfDeath - b.yearOfBirth) : ((new Date()).getFullYear() - b.yearOfBirth)
        
        return bAge - aAge;
    })[0]
};

// Do not edit below this line
module.exports = findTheOldest;
