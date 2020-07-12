
function verificarCedula(){
    var cedula = document.getElementById("cedula").value; /*Con document get obtengo lo que ingresa el usuario en la funcion*/
    if(cedula.length <= 12 && cedula.length >= 9){
        document.getElementById("ingresoDeCedula").style.display = "none";
        desplegarProductos();
        document.getElementById("contenedorProductos").style.display = "inline";
    }else {
        alert("Ha ingresado mal su cédula");
        document.getElementById("cedula").value = "";
    }
}


var productosVF =[
    {
        idDelProducto: 1,  imagen: "imagenes/aguacate.jpg", descripcion: "Aguacate", costoUnidad:400, cantidadEnInventario:30,
        fechaDeExpiracion:"23/07/2020" 
    },{
        idDelProducto: 2,  imagen: "imagenes/ayote.jpg", descripcion: "Ayote", costoUnidad:250, cantidadEnInventario:5,
        fechaDeExpiracion:"18/07/2020" 
    },{
        idDelProducto: 3,  imagen: "imagenes/banano.jpg", descripcion: "Banano",costoUnidad:30, cantidadEnInventario:10, 
        fechaDeExpiracion:"16/07/2020" 
    },{
        idDelProducto: 4,  imagen: "imagenes/camote.jpg", descripcion: "Camote", costoUnidad:100, cantidadEnInventario:7,
        fechaDeExpiracion:"21/07/2020" 
    },{
        idDelProducto: 5,  imagen: "imagenes/cebollaB.jpg", descripcion: "Cebolla Blanca", costoUnidad:55, cantidadEnInventario:14,
        fechaDeExpiracion:"24/07/2020" 
    },{
        idDelProducto: 6,  imagen: "imagenes/cebolla.jpg", descripcion: "Cebolla Morada", costoUnidad:65, cantidadEnInventario:18,
        fechaDeExpiracion:"22/07/2020" 
    },{
        idDelProducto: 7,  imagen: "imagenes/chileVerde.jpg", descripcion: "Chile", costoUnidad:100, cantidadEnInventario:3,
        fechaDeExpiracion:"17/07/2020" 
    },{
        idDelProducto: 8,  imagen: "imagenes/chayote.png", descripcion: "Chayote", costoUnidad:100, cantidadEnInventario:5,
        fechaDeExpiracion:"20/07/2020" 
    },{
        idDelProducto: 9,  imagen: "imagenes/lemon.jpg", descripcion: "Limón", costoUnidad:50, cantidadEnInventario:25,
        fechaDeExpiracion:"25/07/2020" 
    },{
        idDelProducto: 10,  imagen: "imagenes/manga.jpg", descripcion: "Manga", costoUnidad:150, cantidadEnInventario:8,
        fechaDeExpiracion:"19/07/2020" 
    },{
        idDelProducto: 11,  imagen: "imagenes/naranja.jpg", descripcion: "Naranja", costoUnidad:60, cantidadEnInventario:10,
        fechaDeExpiracion:"17/07/2020" 
    },{
        idDelProducto: 12,  imagen: "imagenes/melon.jpg", descripcion: "Melon", costoUnidad:350, cantidadEnInventario:5,
        fechaDeExpiracion:"21/07/2020" 
    },{
        idDelProducto: 13,  imagen: "imagenes/papasCaja.jpg", descripcion: "Papa", costoUnidad:50, cantidadEnInventario:10,
        fechaDeExpiracion:"20/07/2020" 
    },{
        idDelProducto: 14,  imagen: "imagenes/papaya.jpg", descripcion: "Papaya", costoUnidad:300, cantidadEnInventario:2,
        fechaDeExpiracion:"18/07/2020" 
    },{
        idDelProducto: 15,  imagen: "imagenes/platanos.jpg",descripcion: "Platano", costoUnidad:145, cantidadEnInventario:3,
        fechaDeExpiracion:"26/07/2020" 
    },{
        idDelProducto: 16,  imagen: "imagenes/piña.jpg", descripcion: "Piña", costoUnidad:800, cantidadEnInventario:10,
        fechaDeExpiracion:"21/07/2020" 
    },{
        idDelProducto: 17,  imagen: "imagenes/remolacha.jpg", descripcion: "Remolacha", costoUnidad:250, cantidadEnInventario:8,
        fechaDeExpiracion:"20/07/2020" 
    },{
        idDelProducto: 18,  imagen: "imagenes/repollo.jpg", descripcion: "Repollo", costoUnidad:350, cantidadEnInventario:6,
        fechaDeExpiracion:"18/07/2020" 
    },{
        idDelProducto: 19,  imagen: "imagenes/rabano.jpg", descripcion: "Rabano", costoUnidad:20, cantidadEnInventario:15,
        fechaDeExpiracion:"22/07/2020" 
    },{
        idDelProducto: 20,  imagen: "imagenes/sandia.jpg", descripcion: "Sandía", costoUnidad:330, cantidadEnInventario:10,
        fechaDeExpiracion:"23/07/2020" 
    },{
        idDelProducto: 21,  imagen: "imagenes/tomate.jpg", descripcion: "Tomate", costoUnidad:50, cantidadEnInventario:20,
        fechaDeExpiracion:"17/07/2020" 
    },{
        idDelProducto: 22,  imagen: "imagenes/yuca.jpg", descripcion: "Yuca", costoUnidad:170, cantidadEnInventario:7,
        fechaDeExpiracion:"16/07/2020" 
    } 
];

/*La función Ayuda a recorrer el array de los productos y acceder a todos su atributos, o a los que se desee obtener nada más*/
function desplegarProductos(){
    var productos = "";
    productosVF.forEach(producto => {
        productos += '<div id="item'+producto.idDelProducto+'" class="items"><img src="'+producto.imagen+'"/> <span class="id">'+producto.idDelProducto+'</span> <span class="desc">'+producto.descripcion+'</span> <span class="price">'+producto.costoUnidad+'</span> <span class="inv"> '+producto.cantidadEnInventario+'</span> <span class="exp">'+producto.fechaDeExpiracion+'</span><input type="number" onchange="validarInventario(this)"/> </div>';
    }); 
    document.getElementById("items").innerHTML = productos;
}

function validarInventario(evento){
    var cantidadInventario = parseInt(document.querySelector("#"+evento.parentNode.id+" .inv").innerHTML);
    var cantidadAComprar = evento.value; /*Extrae el valor actual que posee el input*/
    
    if(cantidadInventario < cantidadAComprar){
        alert("No contamos con la cantidad del producto que requiere");
        evento.value="";
    }    
}

function desplegarProductosSeleccionados(){ 
    var productosAComprar=[];
    var productos = document.querySelectorAll('.items'); /*Con document.querySelectorAll trae todos los productos del HTML*/

    for(let i=0; i<productos.length; i++){
        var descripcion, precio;
        var cantidadAComprar= parseInt(productos[i].querySelector("input").value);
        if(cantidadAComprar && cantidadAComprar!=NaN && cantidadAComprar>0){
            descripcion= productos[i].querySelector(".desc").innerHTML;
            precio= productos[i].querySelector(".price").innerHTML;
            productosAComprar.push({cantidad:cantidadAComprar, descripcion: descripcion, precio: precio});
        }

    }

    if(productosAComprar.length === 0) {
        alert("No ha especificado ninguna cantidad de producto a comprar");
    } else {
        document.getElementById("contenedorProductos").style.display = "none";
        document.getElementById("tablaProductosAComprar").style.display = "inline";
    }

}
