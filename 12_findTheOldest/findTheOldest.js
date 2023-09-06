const findTheOldest = function(people) {
    let oldestPerson = null;
    let maxAge = - Infinity;

    for (const person of people) { //person is a temporary variable to hold the values of the objects one by one as the loop is iterated.
        const birthYear = person.yearOfBirth;
        const deathYear = person.yearOfDeath || new Date().getFullYear; //Assumes currect date if there is no yearOfDeath
        const age = deathYear - birthYear;

        if (age > maxAge) {
            maxAge = age;
            oldestPerson = person;
        } // if the ages of the currect person is larger than the current age, then the new maxAge is age and the oldest person is the person/object with the oldest age 
    }

    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
