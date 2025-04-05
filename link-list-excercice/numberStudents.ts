function countStudents(students: number[], sandwiches: number[]): number {

  //crear un contador para almacenar los estudiante que se quedaron sin comer
  let studentWhitoutEating: number = 0;

  //Estudiantes
  for (let i = 0; i < sandwiches.length; i++) {
      //sándwiches 
      for (let j = 0; j < students.length; j++) {
          //si el estudiante tomo su almuerzo querido -- sale de la fila
          if((students[i] === 1) && (sandwiches[j] ===1) || (students[i] === 0) && (sandwiches[j] ===0)) {
              students.splice(i, 1);
              sandwiches.splice(i, 1);

              studentWhitoutEating++;
          } else  { 
          //si no - se posiciona al final y vuelve hacer el proceso de elección.
          let studentRemove: number = students.splice(0,1)[0]; //que debo de agregar en esta linea?
          
              console.log(studentRemove)
              students.push(studentRemove);
          }

      }
  }

  return studentWhitoutEating;

};

console.log(countStudents([1,1,0,0],[0,1,0,1]))