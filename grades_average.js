let grades = [10, 20, 9]
let sum = 0
grades.forEach(function(grade){
    sum = sum + grade
})
let average = sum / grades.length

console.log(average);
