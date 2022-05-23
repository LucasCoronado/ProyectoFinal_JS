fetch("./productos.json")
    .then((res) => res.json())
    .then((data) => {
        data.forEach((producto) => {
            const div = document.createElement("div");
            div.innerHTML = `
            
                <img src=${producto.imagen}>
                <h3>${producto.nombre}</h3>
                <h2>${producto.precio}</h2>
                <button id="${producto.id}" class="btn btn-primary">Agregar al carrito</button></span>
            
               
            `;

            lista.append(div);

        });
    });

const items = document.getElementById('lista')

items.addEventListener('click', e => {
    addCarrito(e)
    actCarrito()
    OcultarMensaje()
})

const addCarrito = e => {

    if (e.target.classList.contains("btn")) {
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

let carrito = {}

const setCarrito = objCarrito => {

    const prodCarrito = {
        id: objCarrito.querySelector('button').id,
        nombre: objCarrito.querySelector('h3').textContent,
        precio: objCarrito.querySelector('h2').textContent,
        cantidad: 1
    }

    if (carrito.hasOwnProperty(prodCarrito.id)) {
        prodCarrito.cantidad = carrito[prodCarrito.id].cantidad + 1
    }

    carrito[prodCarrito.id] = { ...prodCarrito }

    console.log(carrito);
}




const contenedorCarrito = document.getElementById('contenedorCarrito')

const actCarrito = () => {
    contenedorCarrito.innerHTML = ""

    Object.values(carrito).forEach(prodCarrito =>{
        const div  = document.createElement('div')
        div.className = ('estiloCarrito')
        div.innerHTML = `
                        <div class="nombreP">${prodCarrito.nombre}</div>
                        <div class="cantidadP">${prodCarrito.cantidad}</div>
                        <div class="precioP">${prodCarrito.precio*prodCarrito.cantidad}</div>
                        
                        
        `
        contenedorCarrito.appendChild(div)
    })
}

const mensaje = document.getElementById('carritoVacio')
const ocultar = document.getElementById('ocultarPlantilla')
const OcultarMensaje = () => {
    mensaje.className = ('carritoVacio')
    ocultar.className = ('')
}

const BtnVaciar = document.getElementById('btnVaciar')
BtnVaciar.addEventListener('click', () => {
    carrito = {}
    actCarrito()
})

const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio ,0)

console.log(nPrecio);