fetch("./productos.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((producto) => {
      const div = document.createElement("div");
      div.innerHTML = `
            
                <img src="./imagenes/">
                <h3>${producto.nombre}</h3>
                <h2>${producto.precio}</h2>
                <span><button id="agregarCarrito" type="button" class="btn btn-primary">Agregar al carrito</button></span>
            
               
            `;

      lista.append(div);
    });
  });