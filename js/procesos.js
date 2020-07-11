function miCedula(cedula){
    var cedula= "Ingresar cedula";
    if(cedula.length <= 12 || cedula.length >= 9){
        
    }else {
        prompt("Ha ingresado mal su cédula");
        ingresarCedula();
    }
}


//Creando objeto producto
/*{
    var idDelProducto = new Object;
    imagen;
    var descripcion;
    var costoUnidad;
    var cantidadEnInventario;
    var fechaDeExpiracion;
    var cantidadRequerida;
}*/
var productosVF =[
    {
        idDelProducto: 1, imagen: "aguacate.jpg", descripcion: "Aguacate", costoUnidad:400, cantidadEnInventario:30,
        fechaDeExpiracion:"23/07/2020", cantidadRequerida
    },{
        idDelProducto: 2, imagen: "ayote.jpg", descripcion: "Ayote", costoUnidad:250, cantidadEnInventario:5,
        fechaDeExpiracion:"18/07/2020", cantidadRequerida
    },{
        idDelProducto: 3, imagen: "banano.jpg", descripcion: "Banano",costoUnidad:30, cantidadEnInventario:10, 
        fechaDeExpiracion:"16/07/2020", cantidadRequerida
    },{
        idDelProducto: 4, imagen: "camote.jpg", descripcion: "Camote", costoUnidad:100, cantidadEnInventario:7,
        fechaDeExpiracion:"21/07/2020", cantidadRequerida
    },{
        idDelProducto: 5, imagen: "cebollaB.jpg", descripcion: "Cebolla Blanca", costoUnidad:55, cantidadEnInventario:14,
        fechaDeExpiracion:"24/07/2020", cantidadRequerida
    },{
        idDelProducto: 6, imagen: "cebolla.jpg", descripcion: "Cebolla Morada", costoUnidad:65, cantidadEnInventario:18,
        fechaDeExpiracion:"22/07/2020", cantidadRequerida
    },{
        idDelProducto: 7, imagen: "chileVerde.jpg", descripcion: "Chile", costoUnidad:100, cantidadEnInventario:3,
        fechaDeExpiracion:"17/07/2020", cantidadRequerida
    },{
        idDelProducto: 8, imagen: "chayote.png", descripcion: "Chayote", costoUnidad:100, cantidadEnInventario:5,
        fechaDeExpiracion:"20/07/2020", cantidadRequerida
    },{
        idDelProducto: 9, imagen: "lemon.jpg", descripcion: "Limón", costoUnidad:50, cantidadEnInventario:25,
        fechaDeExpiracion:"25/07/2020", cantidadRequerida
    },{
        idDelProducto: 10, imagen: "manga.jpg", descripcion: "Manga", costoUnidad:150, cantidadEnInventario:8,
        fechaDeExpiracion:"19/07/2020", cantidadRequerida
    },{
        idDelProducto: 11, imagen: "naranja.jpg", descripcion: "Naranja", costoUnidad:60, cantidadEnInventario:10,
        fechaDeExpiracion:"17/07/2020", cantidadRequerida
    },{
        idDelProducto: 12, imagen: "melon.jpg", descripcion: "Melon", costoUnidad:350, cantidadEnInventario:5,
        fechaDeExpiracion:"21/07/2020", cantidadRequerida
    },{
        idDelProducto: 13, imagen: "papa.jpg", descripcion: "Papa", costoUnidad:50, cantidadEnInventario:10,
        fechaDeExpiracion:"20/07/2020", cantidadRequerida
    },{
        idDelProducto: 14, imagen: "papaya.jpg", descripcion: "Papaya", costoUnidad:300, cantidadEnInventario:2,
        fechaDeExpiracion:"18/07/2020", cantidadRequerida
    },{
        idDelProducto: 15, imagen: "platanos.jpg",descripcion: "Platano", costoUnidad:145, cantidadEnInventario:3,
        fechaDeExpiracion:"26/07/2020", cantidadRequerida
    },{
        idDelProducto: 16, imagen: "piña.jpg", descripcion: "Piña", costoUnidad:800, cantidadEnInventario:10,
        fechaDeExpiracion:"21/07/2020", cantidadRequerida
    },{
        idDelProducto: 17, imagen: "remolacha.jpg", descripcion: "Remolacha", costoUnidad:250, cantidadEnInventario:8,
        fechaDeExpiracion:"20/07/2020", cantidadRequerida
    },{
        idDelProducto: 18, imagen: "repollo.jpg", descripcion: "Repollo", costoUnidad:350, cantidadEnInventario:6,
        fechaDeExpiracion:"18/07/2020", cantidadRequerida
    },{
        idDelProducto: 19, imagen: "rabano.jpg", descripcion: "Rabano", costoUnidad:20, cantidadEnInventario:15,
        fechaDeExpiracion:"22/07/2020", cantidadRequerida
    },{
        idDelProducto: 20, imagen: "sandia.jpg", descripcion: "Sandía", costoUnidad:330, cantidadEnInventario:10,
        fechaDeExpiracion:"23/07/2020", cantidadRequerida
    },{
        idDelProducto: 21, imagen: "tomate.jpg", descripcion: "Tomate", costoUnidad:50, cantidadEnInventario:20,
        fechaDeExpiracion:"17/07/2020", cantidadRequerida
    },{
        idDelProducto: 22, imagen: "yuca.jpg", descripcion: "Yuca", costoUnidad:170, cantidadEnInventario:7,
        fechaDeExpiracion:"16/07/2020", cantidadRequerida
    }  
]
function producto(idDelProducto, imagen, descripcion,costoUnidad,cantidadEnInventario, fechaDeExpiracion, cantidadRequerida){
    this.idDelProducto = id;
    this.imagen= imagen;
    this.descripcion = descripcion;
    this.cantidadEnInventario=cantidadEnInventario;
    this.fechaDeExpiracion
}

function cliente(cliente){
    this.cedula= cedula;
}

if(cedula.document.length === 12){
    document.write("Elija los productos a comprar");
}document.write("Cédula con formato inválido");
 
function agregarProducto(){
    
}
function totalProducto(){

}
function agregarCarrito() {
    // Anyadimos el Nodo a nuestro carrito
    carrito.push(this.getAttribute('marcador'))
    // Calculo el total
    calcularTotal();
    // Renderizamos el carrito 
    renderizarCarrito();

}