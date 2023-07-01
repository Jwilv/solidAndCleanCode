( ()=>{

    interface Product {
        id : number;
        name : string;
    }

    //Usualmente,esto es una clase para controlar la vista desplegada
    //Recuerden que podemos tener muchas vistas que realicen este mismo trabajo 

    class ProductBloc{

        loadProduct( id : number){
            //Realiza un proceso para obtener el producto y retornarlo 
            console.log( 'Producto :', {id, name : 'Oled tv'})
        }

        saveProduct( product : Product ){
            //guarda el producto en la base de datos
            console.log('producto guardado en la base de datos', product)
        }

        notofyClients(){
            console.log('enviando correo a los clientes')
        }

        onAddToCart( productId : number ){
            //agregar al carrito de compras 
            console.log('Agregando al carrito', productId)
        }
    }

    const productBoc = new ProductBloc()

    productBoc.loadProduct(10)
    productBoc.saveProduct({id:3,name:'pc'})
    productBoc.notofyClients()
    productBoc.onAddToCart( 10 )



})();