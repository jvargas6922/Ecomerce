$(document).ready(function() {
    console.log('Jquery activo')
})

//arreglo (Array)
// productos = ['pelota','zapato','camisa','pantalon']


// objeto (Object)
// estructura de datos
/*

array = [
    {
        clave:'valor', 
    }
]

*/

let  productos = [
    {
        id:1, 
        nombre_producto:'Laptop Gamer XZ-2000',
        descripcion_producto:"Procesador Intel i7, 16GB RAM, 512GB SSD", 
        calificacion:124,
        precio_lista: 129999,
        precio_oferta: 103999
    },
    {
        id:2, 
        nombre_producto:'Smartphone Pro Max',
        descripcion_producto:"Pantalla 6.7, Cámara 108MP, 5G", 
        calificacion:89,
        precio_lista: '',
        precio_oferta: 89999
    },
    {
        id:3, 
        nombre_producto:'Audífonos Inalámbricos',
        descripcion_producto:"Cancelación de ruido, Bluetooth 5.0", 
        calificacion:256,
        precio_lista: '',
        precio_oferta: 19999
    }
]

console.log(productos)
let listado_productos = $('#productosContainer');
// recorrer el arreglo de objetos de productos
productos.forEach(function(producto){
    // console.log(producto.descripcion_producto)
    listado_productos.append(`
    <div class="col-lg-4 col-md-6">
        <div class="card h-100 shadow-sm product-card">
            <div class="position-relative">
                <div class="bg-secondary text-white text-center" style="height: 200px; display: flex; align-items: center;  justify-content: center;">
                    <i class="bi bi-laptop fs-1"></i>
                </div>
                <span class="badge bg-danger position-absolute top-0 end-0 m-2">-20%</span>
            </div>
            <div class="card-body">
                <h5 class="card-title">${producto.nombre_producto}</h5>
                <p class="card-text text-muted small">${producto.descripcion_producto}</p>
                <div class="mb-2">
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-half text-warning"></i>
                    <span class="text-muted small">(${producto.calificacion})</span>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <span class="text-muted text-decoration-line-through small">$${producto.precio_lista}</span>
                        <h4 class="text-primary mb-0">$${producto.precio_oferta}</h4>
                    </div>
                </div>
            </div>
            <div class="card-footer bg-white border-0">
                <button class="btn btn-primary w-100 btnAgregarCarrito" data-producto-id="1">
                    <i class="bi bi-cart-plus"></i> Agregar al Carrito
                </button>
            </div>
        </div>
    </div>      
    `)
})