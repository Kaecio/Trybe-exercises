//Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
//exercise6



const lesson1= { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã', 
    };
const lesson2 ={ materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite',
     };
const lesson3 =  { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite',
     };

function AllStudents(obj) {
  let soma = 0;
  for (x in obj) {
    soma += allLessons[x].numeroEstudantes;
  }
  return soma;
}

const allLessons = Object.assign({},{lesson1,lesson2,lesson3});
console.log(AllStudents(allLessons));