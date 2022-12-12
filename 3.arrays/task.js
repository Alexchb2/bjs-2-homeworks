function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1
    .every((item, idx) => item === arr2[idx]); 
}


function getUsersNamesInAgeRange(users, gender) {
  return users
    .filter(user => user.gender === gender)
    .map(student => student.age)
    .reduce((summ, userAge, index, array) => {
        if(index === array.length - 1) {
            return (summ + userAge) / array.length;
        }
        return summ + userAge;
    }, 0);
}