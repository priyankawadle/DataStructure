function SortStudentMarks(input1, input2, input3) {
    let N = input1; // Number of students
    let M = input2; // Number of subjects
    let marks = input3; // 2D Array of marks
    let subjectAverages = Array(M).fill(0);     // Step 1: Calculate the average marks for each subject
    for (let j = 0; j < M; j++) {
        let subjectTotal = 0;
        for (let i = 0; i < N; i++) {
            subjectTotal += marks[i][j];
        }
        subjectAverages[j] = subjectTotal / N;
    }
    let lowestAverageIndex = 0;    // Step 2: Find the subject with the lowest average
    for (let j = 1; j < M; j++) {
        if (subjectAverages[j] < subjectAverages[lowestAverageIndex]) {
            lowestAverageIndex = j;
        }
    }
    console.log(lowestAverageIndex)
    let result = Array(N).fill(0);     // Step 3: Calculate the total marks for each student excluding the lowest subject
    for (let i = 0; i < N; i++) {
        let studentTotal = 0;
        for (let j = 0; j < M; j++) {
            if (j !== lowestAverageIndex) {
                studentTotal += marks[i][j];
            }
        }
        result[i] = studentTotal;
    }
    return result;
}
let input1 = 3; // Number of students
let input2 = 5; // Number of subjects
let input3 = [
    [75, 76, 65, 87, 87],
    [78, 76, 68, 56, 89],
    [67, 87, 78, 77, 65]
]; // Marks of students in subjects

console.log(SortStudentMarks(input1, input2, input3)); // Output: [325, 299, 296]
