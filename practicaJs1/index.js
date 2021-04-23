

var suma;

let suma1;

const persona = {
  nombre: 'Gustavo',
  apellido: 'Martinez',
  mascotas: [
    {
      nombre: 'x',
      tipo: 'canino',
    },
    {
      nombre: 'y',
      tipo: 'Felino',
    },
  ],
  edad: 34,
  email: 'tavomartinez87@gmail.com',
  casado: true,
  'fecha de nacimiento': '09-03-2016'
};
console.log(persona);

persona.hijos = true;
persona.direccion = 'SPS'


console.log(persona);

let personaNombre = persona.nombre;
console.log(personaNombre);

let personaApellido = persona['apellido']

persona.mascotas.push({nombre: 'z', tipo:'Canino'});
console.log(persona.mascotas);

let fechaNac = persona["fecha de nacimiento"]
console.log(fechaNac);

function suma (a ,b ) {
return a+b
}

suma(3,5);
console.log(suma(3,5));

console.log(typeof suma);

console.log(typeof persona.mascotas);

persona.mascotas.pop() // quita el ultimo elemento del arreglo

console.log(persona.mascotas);
persona.mascotas.unshift({nombre: 'A', tipo:'Canino'}) 
console.log(persona.mascotas);
persona.mascotas.shift(); // Elimina el primer objeto del arreglo
console.log(persona.mascotas);

persona.mascotas.unshift({nombre: 'A', tipo:'Canino'})

console.log(persona.mascotas.length);
console.log(persona.mascotas[1]);
console.log(persona.mascotas[persona.mascotas.length -1 ]); // -1 encuentro el ultimo elemento del arreglo


//string
//number
//boolean
//undefined
//null
//object


// Funciones

// function suma(num1, num2) {
//   let res = num1 + num2;
//   return res;
// }

// let resultado = suma(3, 3);
// console.log(resultado);
//______________________//
// function saludar(nombre) {
//   let frase = `Hola ${nombre}! como estas?`;
//   console.log(frase);
// }

// saludar('Gustavo');

// const saludar = function(nombre){

//     let frase = `Hola ${nombre}! como estas?`;
//   console.log(frase);
// }

// let saludar = (nombre) => {
//   let frase = `Hola ${nombre}! como estas?`;
//   console.log(frase);
// };

// saludar('Piolo');

//______________________
// let free = false;

// const validarCliente = (time) => {
//   let edad = prompt('Cual es tu edad');
//   if (edad > 18) {
//     if (time >= 2 && time < 7 && !free) {
//       alert('Podes pasar gratis');
//       free = true;
//     } else {
//       alert('Podes pasar, pero tenes que pagar la entrada');
//     }
//   } else {
//     alert('Mira papu, sos menor de edad por ende no vas a pasar, Maquinola');
//   }
// };

//Metodo para recoorer uno por uno el arreglo
const arr = [1, 2, 3, 4, 5, 6];

arr.forEach((item) => {
  console.log(item);
});

let carros = [
  {
    color: 'morado',
    tipo: 'minivan',
    registroDia: new Date('2021-04-22'),
    capacidad: 7,
  },
  {
    color: 'rojo',
    tipo: 'Camioneta',
    registroDia: new Date('2008-03-03'),
    capacidad: 5,
  },
];

var carro = {
  color: 'rojo',
  tipo: 'cabrio',
  registroDia: new Date('2016-05-02'),
  capacidad: 2,
};
carros.unshift(carro); // con unshift agregamos el objeto al inicio

console.log(carros);

var carro = {
  color: 'azul',
  typo: 'cabrio',
  registroDia: new Date('2016-05-02'),
  capacidad: 2,
};
carros.push(carro); //con puch agregamos un objeto al final del arreglo

console.log(carros);

var carro = {
  color: 'amarillo',
  tipo: 'camioneta',
  registroDia: new Date('2016-05-02'),
  capacidad: 2,
};
carros.splice(2, 0, carro); //con este agregamos un objeto en medio del arreglo

console.log(carros);

var carro = carros.find((carro) => carro.color === 'rojo'); // busca el primer carro rojo que encuentra

console.log(carro);

let carrosRojos = carros.filter((carro) => carro.color === 'rojo'); //filtra todos los carros color rojos
console.log(carrosRojos);

//funcion flecha para ponerle un tamaño a los carros
let tamaño = carros.map((carro) => {
  if (carro.capacidad <= 3) {
    return 'Pequeño';
  }
  if (carro.capacidad <= 5) {
    return 'Mediano';
  }
  return 'Grande';
});

console.log(tamaño);

//agregar un valor mas aun objeto usando una funcion para esto

let propiedadesDeCarros = carros.map((carro) => {
  let propiedades = {
    capacidad: carro.capacidad,
    tamaño: 'grande',
  };
  if (carro.capacidad <= 5) {
    propiedades['tamaño'] = 'Mediano';
  }
  if (carro.capacidad <= 3) {
    propiedades['tamaño'] = 'Pequeño ';
  }

  return propiedades;
});

console.log(propiedadesDeCarros);

console.log(carro);

carros.forEach((carro) => {
  carro['tamaño'] = 'Grande';
  if (carro.capacidad <= 5) {
    carro['tamaño'] = 'Mediano';
  }
  if (carro.capacidad <= 3) {
    carro['tamaño'] = 'Pequeño';
  }
});

let carrosOrdenados = carros.sort((c1, c2) =>
  c1.capacidad < c2.capacidad ? 1 : c1.capacidad > c2.capacidad ? -1 : 0
);
console.log(carrosOrdenados);

carros.some((carro) => carro.color === 'rojo' && carro.tipo === 'cabrio');
// salida: true

carros.every((carro) => carro.capacidad >= 4);
// salida: false
