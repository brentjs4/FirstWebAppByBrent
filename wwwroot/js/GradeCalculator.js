function GradeCalculator() {

    var assignments = document.getElementsByName("assignments")[0].value; //All of these below set the variables declared to the left to the value found in the form input.
    var gProjects = document.getElementsByName("gProjects")[0].value;
    var quizzes = document.getElementsByName("quizzes")[0].value;
    var exams = document.getElementsByName("exams")[0].value;
    var intex = document.getElementsByName("intex")[0].value;
    var totalGrade = assignments * .5 + gProjects * .1 + quizzes * .1 + exams * .2 + intex * .1 //Calculates the Total Grade
    var letterGrade 
    if (totalGrade >= 94) {
        letterGrade = 'A'
    } else if (totalGrade >= 90) {//Conditional Statement that changes the value of the Letter Grade.
        letterGrade = 'A-'
    } else if (totalGrade >= 87) {
        letterGrade = 'B+'
    } else if (totalGrade >= 84) {
        letterGrade = 'B'
    } else if (totalGrade >= 80) {
        letterGrade = 'B-'
    } else if (totalGrade >= 77) {
        letterGrade = 'C+'
    } else if (totalGrade >= 74) {
        letterGrade = 'C'
    } else if (totalGrade >= 70) {
        letterGrade = 'C-'
    } else if (totalGrade >= 67) {
        letterGrade = 'D+'
    } else if (totalGrade >= 64) {
        letterGrade = 'D'
    } else if (totalGrade >= 60) {
        letterGrade = 'D-'
    } else {
        letterGrade = 'E'
    }

    alert("Your Total Grade is " + totalGrade + "%");
    alert("Your accompanying Letter Grade is " + letterGrade); //Alerts that include total and letter grade.
}