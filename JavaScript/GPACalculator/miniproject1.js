function calculateGPA(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'A') {
            sum += 4.0;
        } else if (arr[i] === 'B') {
            sum += 3.0;
        } else if (arr[i] === 'C') {
            sum += 2.0;
        } else if (arr[i] === 'D') {
            sum += 1.0;
        } else if (arr[i] === 'F') {
            sum += 0.0;
        } else {
            console.log(`Invalid grade: ${arr[i]}`);
            return;
        }
    }
    let average = sum / arr.length;

    let gpaLetter;
    if (average >= 3.5) {
        gpaLetter = 'A';
    } else if (average >= 2.5) {
        gpaLetter = 'B';
    } else if (average >= 1.5) {
        gpaLetter = 'C';
    } else if (average >= 1.0) {
        gpaLetter = 'D';
    } else {
        gpaLetter = 'F';
    }
    console.log(`Your GPA is ${gpaLetter}`);
}

calculateGPA(['A', 'B', 'A', 'C', 'B']);
