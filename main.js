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


let carrito = {}

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actCarrito()
    }
})

const items = document.getElementById('lista')

items.addEventListener('click', e => {
    addCarrito(e)
    actCarrito()
})

const addCarrito = e => {

    if (e.target.classList.contains("btn")) {
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

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

let nPrecio
let precioTotal = document.getElementById('precioTotal')

const actCarrito = () => {
    contenedorCarrito.innerHTML = ""

    Object.values(carrito).forEach(prodCarrito => {
        const div = document.createElement('div')
        div.className = ('estiloCarrito')
        div.innerHTML = `
                        <div class="nombreP">${prodCarrito.nombre}</div>
                        <div class="cantidadP">${prodCarrito.cantidad}</div>
                        <div class="precioP">${prodCarrito.precio * prodCarrito.cantidad}</div>
                        
                        
        `
        contenedorCarrito.appendChild(div)

        localStorage.setItem('carrito', JSON.stringify(carrito))
        nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio ,0)
        console.log(nPrecio);
    })
    precioTotal.innerText = `Precio total --- ${nPrecio}`
    OcultarMensaje()
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
    localStorage.removeItem('carrito')
    mensaje.className = ('')
    ocultar.className = ('ocultarPlantilla')
})
