var app = new Vue({
    el: '#app',
    data: {
        title: 'Solid men round nect black T-shirt',
        selectedVariant: 0,
        variants: [
            {
                variantsId: 2230,
                variantsSize: "s",
                variantsColor: "black",
                variantsImage: "./images/black-tshirt.jpg",
                variantsQuantity: 20
            },
            {
                variantsId: 2231,
                variantsSize: "m",
                variantsColor: "blue",
                variantsImage: "./images/blue-tshirt.jpg",
                variantsQuantity: 0
            },
            {
                variantsId: 2232,
                variantsSize: "l",
                variantsColor: "green",
                variantsImage: "./images/green-tshirt.jpg",
                variantsQuantity: 50
            },
            {
                variantsId: 2233,
                variantsSize: "xl",
                variantsColor: "white",
                variantsImage: "./images/white-tshirt.jpg",
                variantsQuantity: 8
            },
        ],
        cart: 0
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        updateProduct(index) {
            this.selectedVariant = index;
        }
    },
    computed: {
        image(){
            return this.variants[this.selectedVariant].variantsImage;
        },
        inventory(){
            return this.variants[this.selectedVariant].variantsQuantity;
        }
    }
})