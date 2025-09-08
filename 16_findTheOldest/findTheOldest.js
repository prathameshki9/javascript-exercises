const getAge = function (birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

const findTheOldest = function(people) {
    return people.reduce((max, person) => {
        const maxAge = getAge(max.yearOfBirth, max.yearOfDeath);
        const currentAge = getAge(person.yearOfBirth, person.yearOfDeath);

        return maxAge < currentAge ? person : max;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
