var app = new Vue({
    el: '#app',
    data: {
        brand: 'Vue Mastery',
        product: 'Socks',
        selectedVariant: 0,
        link: 'http://www.vuemastery.com',
        inStock: true,
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
        updateProduct: function(index){
            this.selectedVariant = index;
            console.log(index)
        },
        removeFromCart: function(){
            this.cart --
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        }
    }
})