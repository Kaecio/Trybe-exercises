// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, 
// sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
//exercise8

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

const verifyPair = (nom,chave,valor) => {
      const x = Object.values(nom).includes(`${valor}`)
      const y = Object.keys(nom).includes(`${chave}`)
      return x && y 
    }
    console.log(verifyPair(lesson3, 'turno','noite'));