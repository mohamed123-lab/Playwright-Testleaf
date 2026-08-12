// ========================================
// STUDENT GRADING USING SWITCH / CASE
// ========================================
//
// This program demonstrates:
// - Functions
// - Parameters and return values
// - switch(true) for checking conditions
// - Multiple conditions using &&
// - Storing function results in variables
// ========================================


// Student scores
let score1 = 90, score2 = 80, score3 = 75, score4 = 65, score5 = 59;


// Pass each score to gradeStudent()
// and store the returned grade in a variable.
let result1 = gradeStudent(score1),
    result2 = gradeStudent(score2),
    result3 = gradeStudent(score3),
    result4 = gradeStudent(score4),
    result5 = gradeStudent(score5);


// ========================================
// GRADE STUDENT
// ========================================
//
// switch(true) allows us to check conditions
// inside each case.
//
// The first case whose condition evaluates
// to true will be executed.
//
// Example:
// score = 90
//
// case (score >= 90 && score <= 100)
//        ↓
//        true
//        ↓
// return "Grade A"
// ========================================

function gradeStudent(score) {

    switch (true) {

        // 90 - 100 → Grade A
        case (score >= 90 && score <= 100):
            return "Grade A";

        // 80 - 89 → Grade B
        case (score >= 80 && score < 90):
            return "Grade B";

        // 70 - 79 → Grade C
        case (score >= 70 && score < 80):
            return "Grade C";

        // 60 - 69 → Grade D
        case (score >= 60 && score < 70):
            return "Grade D";

        // Anything below 60 → Grade F
        default:
            return "Grade F";
    }
}


// Print each student's score and grade
console.log("Student with score " + score1 + " has " + result1);
console.log("Student with score " + score2 + " has " + result2);
console.log("Student with score " + score3 + " has " + result3);
console.log("Student with score " + score4 + " has " + result4);
console.log("Student with score " + score5 + " has " + result5);