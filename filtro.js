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
const li = document.getElementById("lista-de-productos")
const $i = document.querySelector('.input'); // Selecciona el primero que encuentre


console.log($i);

// Declaro la arrowFuncion de displayProductos y lo envuelvo con el ciclo for
const displayProductos =(productos)=>{
for (let i = 0; i < productos.length; i++) {
  var d = document.createElement("div")
  d.classList.add("producto")

  var ti = document.createElement("p")
  ti.classList.add("titulo")
  ti.textContent = productos[i].nombre
  
  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti)
  d.appendChild(imagen)

  li.appendChild(d)


/* 
  Coloco un console.log para saber que elementos con las iteraciones
  del ciclo for

*/
  console.log(d,li)
}
}

displayProductos(productos)
const botonDeFiltro = document.getElementById("botonDeFiltro");

/*
 Reemplazo el evento onclick por un addEventListener
 Reemplazo la funcion por una arrowFunction
*/

botonDeFiltro.addEventListener("click", ()=> {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
}
});

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  