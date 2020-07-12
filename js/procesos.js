var costoTotal= 0;

function verificarCedula(){
    var cedula = document.getElementById("cedula").value; /*Con document get obtengo lo que ingresa el usuario en la funcion*/
    if(cedula.length <= 12 && cedula.length >= 9){
        document.getElementById("ingresoDeCedula").style.display = "none";
        desplegarProductos();
        document.getElementById("contenedorProductos").style.display = "inline";
    }else {
        alert("Cédula con formato inválido");
        document.getElementById("cedula").style.borderColor = "red";
        document.getElementById("cedula").value = "";
    }
}

/*Creación del array de productos de la verduleria*/
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
        idDelProducto: 9,  imagen: "imagenes/limones.jpg", descripcion: "Limón", costoUnidad:50, cantidadEnInventario:25,
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
        productos += '<div id="item'+producto.idDelProducto+'" class="items"><img src="'+producto.imagen+'"/> <span class="id">'+producto.idDelProducto+'</span> <span class="desc">'+producto.descripcion+'</span> <span class="price">'+producto.costoUnidad+'</span> <span class="inv"> '+producto.cantidadEnInventario+'</span> <span class="exp">'
        +producto.fechaDeExpiracion+'</span><input type="number" onchange="validarInventario(this)"/> </div>'; /*onchange detecta cada cambio que pasa en el input, se activa y llama la función "validarInventario" con el atributo this con toda la info que hay en etiqueta input*/
    }); 
    document.getElementById("items").innerHTML = productos;  /*Con el selector innerHTML extraigo o sutituyo los elementos o texto que se encuentren adentro, acá los sustituye*/
}

function validarInventario(evento){
    var cantidadInventario = parseInt(document.querySelector("#"+evento.parentNode.id+" .inv").innerHTML); /*parentNode es el nodo padre*/
    var cantidadAComprar = evento.value; /*Extrae el valor actual que posee el input*/
    
    if(cantidadInventario < cantidadAComprar){
        evento.style.borderColor = "red"; /* */
        alert("No contamos con la cantidad del producto que requiere");
        evento.value="";
    } else{
        evento.style.borderColor = "gray";
    }   
}

function desplegarProductosSeleccionados(){ 
    var productosAComprar=[];
    var productos = document.querySelectorAll('.items'); /*Con document.querySelectorAll trae todos los productos del HTML*/

    for(let i=0; i<productos.length; i++){
        var descripcion, precio;
        var cantidadAComprar= parseInt(productos[i].querySelector("input").value);
        /*En el if colocamos la cantidadAComprar sola significa que la variable este defina, si uso cantidadAComprar!=NaN, != NAN, es que sea diferente de indefinido, que viene siendo lo mismo*/
        if(cantidadAComprar  && cantidadAComprar>0){ 
            descripcion= productos[i].querySelector(".desc").innerHTML; /*Con el selector innerHTML extraigo*/
            precio= parseInt(productos[i].querySelector(".price").innerHTML);
            productosAComprar.push({cantidad:cantidadAComprar, descripcion: descripcion, precio: precio, subTotal:(precio*cantidadAComprar), descuento: 0, iva:0});
        }
    }
    
    if(calcularTotalProductosAComprar(productosAComprar) === 0) {
        alert("No ha especificado ninguna cantidad de producto a comprar");
    } else {
        document.getElementById("contenedorProductos").style.display = "none";
        document.getElementById("tablaProductosAComprar").style.display = "inline";
        var calculoIvaYDescuento = calcularIvaYDescuento(productosAComprar); /*Lo que retorna la función se guarda en la variable calculoIvaYDescuento*/
        costoTotal = calcularCostoTotal(calculoIvaYDescuento);
        actualizarResumenDePedido(calculoIvaYDescuento);
    }
}

function calcularCostoTotal(productosDeCompra){
    var costoTotal=0;
    for(let i=0; i<productosDeCompra.length; i++){
        costoTotal += productosDeCompra[i].iva;
    }
    return costoTotal.toFixed(2);
}

function calcularTotalProductosAComprar(cantidadProductosAComprar){
    var cantidadAComprarTotal=0;
    for(let i=0; i<cantidadProductosAComprar.length; i++){
        cantidadAComprarTotal += cantidadProductosAComprar[i].cantidad;  
    }
    return cantidadAComprarTotal;
}

function calcularIvaYDescuento(productosDeCompra){
    var hacerDescuento = false;
    if( calcularTotalProductosAComprar(productosDeCompra)>= 5){
        hacerDescuento = true;
    }
    for(let i=0; i<productosDeCompra.length; i++){
        if(hacerDescuento ===true){
            var descuento= productosDeCompra[i].subTotal - (productosDeCompra[i].subTotal*0.05);
            productosDeCompra[i].descuento= descuento;
            var iva= productosDeCompra[i].descuento + (productosDeCompra[i].descuento* 0.13);
            productosDeCompra[i].iva= iva;
        }else{
            var iva = productosDeCompra[i].subTotal + (productosDeCompra[i].subTotal*0.13);
            productosDeCompra[i].iva= iva;
        }
    }
    return productosDeCompra;
}

/*Creación de la tabla del resumen para el cliente luego de dar click al boton de visualizar pedido*/
function actualizarResumenDePedido(productosAComprar){
    var productos = "";
    var descuento=false;
    productosAComprar.forEach(producto =>{
        if(producto.descuento != 0){
            productos+= '<tr><td>'+producto.cantidad+'</td><td>'+producto.descripcion+'</td><td>'+producto.precio+'</td><td>'+producto.subTotal+'</td><td style= "color: #18AF24">'+producto.descuento+'</td><td style= "color: green">'+producto.iva+'</td></tr>';
            descuento= true;
        }else{
            productos+= '<tr><td>'+producto.cantidad+'</td><td>'+producto.descripcion+'</td><td>'+producto.precio+'</td><td>'+producto.subTotal+'</td><td style= "color: #29A6F8">'+producto.descuento+'</td><td style= "color: #29A6F8 ">'+producto.iva+'</td></tr>';
        }

    }); 
    if(descuento === true){
        productos +='<tr><td>Total</td><td></td><td></td><td></td><td></td><td style= "color: #18AF24">'+costoTotal+'</td></tr>';
    }else{
        productos +='<tr><td>Total</td><td></td><td></td><td></td><td></td><td style= "color: #29A6F8">'+costoTotal+'</td></tr>';
    }
    document.getElementById("datos").innerHTML = productos;

}

function enviarPedido(){
    alert("El pedido por el monto de "+costoTotal+" ha sido enviado");
}