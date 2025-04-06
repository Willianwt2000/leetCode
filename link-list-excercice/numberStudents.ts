function countStudents(students: number[], sandwiches: number[]): number {
  //crear un contador para almacenar los estudiante que se quedaron sin comer
  let studentWhitoutEating: number = 0;
  let removeStudent; //number | undefined

  // //Estudiantes
  // for (let i = 0; i < sandwiches.length; i++) {
  //   //sándwiches
  //   for (let j = 0; j < students.length; j++) {
  //     console.log("estudiantes "+students)
  //     console.log("sandwiches "+sandwiches)
  //     if (students[0] === sandwiches[0]) { //[1], [0]
  //       students.shift();
  //       sandwiches.shift();
  //       studentWhitoutEating = 0;
  //       console.log("----------------------------------\n")
  //       console.log("estudiantes "+students)
  //       console.log("sandwiches "+sandwiches)
  //     } else if(sandwiches[0] !== students[0]) {  // [  1,0], [0, 1]
  //       removeStudent = students.shift();
  //       students.push(removeStudent);
  //       studentWhitoutEating++;
  //     }

  //   }

  // }

  while (students.length > 0 && studentWhitoutEating < students.length) {
    if (students[0] === sandwiches[0]) {
      students.shift();
      sandwiches.shift();
      studentWhitoutEating = 0;
    } else {
      removeStudent = students.shift();
      students.push(removeStudent);
      studentWhitoutEating++;
    }
  }

  return students.length;
}
console.log(
  countStudents(
    [1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0]
  )
);
console.log(countStudents([1,1,1,0,0,1],[1,0,0,0,1,1])); //3
console.log(countStudents([1,0,1,0], [1,1,0,0])); //0
console.log(countStudents([0,1,1,0], [0,1,0,1])); //0
