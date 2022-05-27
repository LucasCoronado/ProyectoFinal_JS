
function Usuario(nombre, apellido, email, telefono, extra) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.telefono = telefono;
    this.extra = extra;
}

let usuario = {}
const formulario = () => {
    usuario = new Usuario(
        document.getElementById('nombre').value,
        document.getElementById('apellido').value,
        document.getElementById('email').value,
        document.getElementById('telefono').value,
        document.getElementById('datosExtra').value
    )
    cargarModal()
    document.querySelector('form').reset();
    localStorage.setItem('usuario', JSON.stringify(usuario))
}


const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('btnDatos')
const botonCerrar = document.getElementById('btnCerrar')
const modalDiv = document.getElementsByClassName('modalDiv')[0]


botonAbrir.addEventListener('click', () => {
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', () => {
    contenedorModal.classList.toggle('modal-active')
})

contenedorModal.addEventListener('click', (event) => {
    contenedorModal.classList.toggle('modal-active')

})
modalDiv.addEventListener('click', (event) => {
    event.stopPropagation()
})

const cargarModal = () => {

    let contenido = document.getElementById('modalUsuario')
    
    Object.values(usuario).forEach(value => {

        contenido.innerHTML = `
                    <h3>Muchas Gracias ${nombre.value} ${apellido.value}</h3>
                    <p>Te enviaremos la informacion de la compra a ${email.value}</p>
                    <p>O nos comunicaremos contigo al ${telefono.value}</p>
        `

    })
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnDatos').addEventListener('click', () => {
        formulario()
    });
});


