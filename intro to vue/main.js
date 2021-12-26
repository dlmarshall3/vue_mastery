var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: 'img/greensocks.jpeg',
        link: 'http://www.vuemastery.com',
        inventory: 8,
        details: ["80% cotton",'20% polyester','Gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: 'Green',
                variantImage: 'img/greensocks.jpeg'
            },
            {
                variantId: 2235,
                variantColor: "Blue",
                variantImage: 'img/bluesocks.jpeg'
            }
        ],
        cart: 0,
    },
    methods: {
        addToCart: function(){
            this.cart ++
        },
        updateProduct: function(variantImage){
            this.image = variantImage
        },
        removeFromCart: function(){
            this.cart --
        }
    }
})