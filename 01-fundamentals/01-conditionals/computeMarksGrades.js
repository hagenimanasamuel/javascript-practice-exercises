let marks = {
    names : ["David", "Vinoth", "Divya", "Isitha", "Thomas"],
    scores : [80, 77, 88, 95, 68]
}

for(let i = 0; i < marks.names.length; i++) {
    let grade;
    if(marks.scores[i] < 60) {
        grade = "F";
    } else if(marks.scores[i] < 70) {
        grade = "D";
    } else if(marks.scores[i] < 80) {
        grade = "C";
    } else if(marks.scores[i] < 90) {
        grade = "B";
    } else {
        grade = "A";
    }
    console.log(marks.names[i] + ": " + grade);
}