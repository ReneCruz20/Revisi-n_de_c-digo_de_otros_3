// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]


/*
 Cambio el metodo de la funcion 
const li = document.getElementsByNames("lista-de-productos")
Por
const li = document.getElementById("lista-de-productos")

*/

// Se cambia el nombre li a un nombre descriptivo
const lista = document.getElementById("lista-de-productos")
// Se cambia el nombre $i a un nombre descriptivo
const colorTipo = document.querySelector('.input'); // Selecciona el primero que encuentre


console.log (colorTipo);

// Declaro la arrowFuncion de displayProductos y lo envuelvo con el ciclo for
const displayProductos =(productos)=>{
for (let i = 0; i < productos.length; i++) {
  // Cambio el tipo de variable var por const
  // Se cambia el nombre d a un nombre descriptivo
const divContenido = document.createElement("div")
  divContenido.classList.add("producto")

  // Se cambia el nombre ti a un nombre descriptivo
const titulo = document.createElement("p")
  titulo.classList.add("titulo")
  titulo.textContent = productos[i].nombre
  
const imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  divContenido.appendChild(titulo)
  divContenido.appendChild(imagen)

  lista.appendChild(divContenido)


/* 
  Coloco un console.log para saber que elementos tengo con las iteraciones
  del ciclo for

*/
  console.log(divContenido,lista)
}
}

displayProductos(productos)
const botonDeFiltro = document.getElementById("botonDeFiltro");

/*
 Reemplazo el evento onclick por un addEventListener
 Reemplazo la funcion por una arrowFunction
*/

botonDeFiltro.addEventListener("click", ()=> {
  //Cambio el tipo de variable var por const
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }

  const texto = colorTipo.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
  const divContenido = document.createElement("div")
    divContenido.classList.add("producto")
  
  const titulo = document.createElement("p")
    titulo.classList.add("titulo")
    titulo.textContent = productosFiltrados[i].nombre
    
  const imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    divContenido.appendChild(titulo)
    divContenido.appendChild(imagen)
  
    lista.appendChild(divContenido)
}
});

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  