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
})

const addCarrito = e => {

    if (e.target.classList.contains("btn")) {
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

let carrito = {}

const setCarrito = objeto => {

    const producto = {
        id: objeto.querySelector('button').id,
        title: objeto.querySelector('h3').textContent,
        precio: objeto.querySelector('h2').textContent,
        cantidad: 1
    }

    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1
    }

    carrito[producto.id] = { ...producto }

    console.log(carrito);
}
