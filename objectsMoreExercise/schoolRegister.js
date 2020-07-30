function schoolRegister(studentArr) {

    let studentObject = {};

    for (let student of studentArr) {
        
        let sections = student.split(', ');

        let [nameKey, name] = sections[0].split(': ');

        let [gradeKey, grade] = sections[1].split(': ');
        grade = Number(grade) + 1;

        let [scoreKey, score] = sections[2].split(': ');
        score = Number(score);
        
        if (grade > 12 || score < 3) continue;

        if (studentObject.hasOwnProperty(grade)) {

            studentObject[grade].name.push(name);
            studentObject[grade].score.push(score);
        }
        else {

            studentObject[grade] = {
                name: [name],
                score: [score]
            }
        }

    }

    function average(arr) {

        return arr.reduce((a, b) => a + b, 0) / arr.length;
    }
    
    for (let key in studentObject) {
        
        console.log(`${key} Grade `);
        console.log(`List of students: ${studentObject[key].name.join(', ')}`);
        console.log(`Average annual grade from last year: ${average(studentObject[key].score).toFixed(2)}`);
        console.log();
    }
}
schoolRegister([
"Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
"Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
"Student name: George, Grade: 8, Graduated with an average score: 2.83",
"Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
"Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
"Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
"Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
"Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
"Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
"Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
"Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
"Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"]
)

