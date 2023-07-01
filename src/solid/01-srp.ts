(() => {

    interface Product {
        id: number;
        name: string;
    }

    //Usualmente,esto es una clase para controlar la vista desplegada
    //Recuerden que podemos tener muchas vistas que realicen este mismo trabajo 

    class ProductService {

        loadProduct(id: number) {
            //Realiza un proceso para obtener el producto y retornarlo 
            console.log('Producto :', { id, name: 'Oled tv' })
        }

        saveProduct(product: Product) {
            //guarda el producto en la base de datos
            console.log('producto guardado en la base de datos', product)
        }

    }

    class Mailer {

        sendEmails() {
            console.log('enviando correo a los clientes')
        }

    }

    class ProductBloc {

        private productService : ProductService;
        private mailer : Mailer; 

        constructor( productSerice : ProductService, mailer : Mailer){
            this.productService = productSerice;
            this.mailer = mailer;             
        }

        loadProduct(id: number) {
            //Realiza un proceso para obtener el producto y retornarlo 
            this.productService.loadProduct( id )
        }

        saveProduct(product: Product) {
            //guarda el producto en la base de datos
            this.productService.saveProduct( product)
        }

        notofyClients() {
            this.mailer.sendEmails()
        }

    }

    class ProductCart{

        addToCart( productId : number ){
            console.log('Agregando al carrito', productId)
        }
    }

    const productService = new ProductService()
    const mailer = new Mailer()

    const productBoc = new ProductBloc( productService, mailer)
    const productCart = new ProductCart()

    productBoc.loadProduct(10)
    productBoc.saveProduct({ id: 3, name: 'pc' })
    productBoc.notofyClients()
    productCart.addToCart(33)



})();