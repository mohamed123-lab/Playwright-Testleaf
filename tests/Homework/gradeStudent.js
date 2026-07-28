let score1 = 90, score2 = 80, score3 = 75, score4 = 65, score5 = 59

let result1 = gradeStudent(score1) , result2 = gradeStudent(score2),  result3 = gradeStudent(score3), result4 = gradeStudent(score4), result5 = gradeStudent(score5)

function gradeStudent(score){
    switch (true) {
        case(score >=90 && score <=100):
               return "Grade A"
            break
        case(score >=80 && score <90):
               return "Grade B"
            break
        case(score >=70 && score <80):
               return "Grade C"
            break
        case(score >=60 && score <70):
             return "Grade D"
            break
        default:
               return "Grade F"
               
        }
}
console.log("Student with score " + score1 + " has " + result1)
console.log("Student with score " + score2 + " has " + result2)
console.log("Student with score " + score3 + " has " + result3)
console.log("Student with score " + score4 + " has " + result4)
console.log("Student with score " + score5 + " has " + result5)