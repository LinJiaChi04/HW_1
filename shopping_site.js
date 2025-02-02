const app = Vue.createApp({
    data() {
        return {
            products: [
                { id: 1, name: '商品A', price: 100, image: 'img/商品A.png' }
            ],
            cart: []
        };
    },
    methods: {
        //加入購物車
        addToCart(product) {
            //this.cart.push(product);
        }
    },
    computed: {
        totalPrice() {
            return this.cart.reduce((sum, item) => 0 /*將0取代成總計金額的公式*/ , 0);
        }
    }
});
app.mount("#app");