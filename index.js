let app = new Vue({
    el: '#app', data: {
        shop: [{
            id: 1,
            destination: 'Orbe',
            price: 120,
            quantity: 6,
            image: './img/orbe.jpg',
            description: 'Orbe est une commune suisse du canton de Vaud, située dans le district d\'Yverdon. Elle est peuplée de 11 000 habitants environ.'
        }, {
            id: 2,
            destination: 'Vallée de Joux',
            price: 150,
            quantity: 4,
            image: './img/Vallee_de_joux.jpg',
            description: 'La Vallée de Joux est une région du canton de Vaud, en Suisse, située dans le Jura vaudois. Elle est peuplée de 10 000 habitants environ.'
        }, {
            id: 3,
            destination: 'Yverdon',
            price: 100,
            quantity: 5,
            image: './img/yverdon.jpg',
            description: 'Yverdon-les-Bains est une ville suisse du canton de Vaud, située dans le district d\'Yverdon. Elle est peuplée de 30 000 habitants environ.'
        },], // array with cart items
        cart: [], premiumLimit: 4, selected: '',

    }, methods: {
        availableQuantity(item) {
            let inCart = this.cart.filter(i => i.id === item.id).length;
            return item.quantity - inCart;
        },
        totalPrice() {
            let total = 0;
            this.cart.forEach(item => {
                total += item.price;
            });
            return total;
        },
        badgeColor(item) {
            let available = this.availableQuantity(item);
            if (available === 0) {
                return 'badge text-bg-danger';
            } else if (available <= 2) {
                return 'badge text-bg-warning';
            } else {
                return 'badge text-bg-success';
            }
        },
        textAvailable(item) {
            let available = this.availableQuantity(item);
            if (available === 0) {
                return 'En rupture de stock';
            } else if (available <= 2) {
                return 'Preque épuisé';
            } else {
                return 'En stock';
            }
        },
        addToCart(item) {
            if (this.availableQuantity(item) > 0) {
                console.log('add to cart', item)
                this.cart.push(item);
            }
        }, totalQuantity() {
            let total = 0;
            this.cart.forEach(item => {
                total += 1;
            });
            return total;
        },
        clearCart() {
            this.cart = [];
        },
        premiumClient() {
            return this.totalQuantity() >= this.premiumLimit;
        }
    }, computed: {
        classObject: function () {
            return this.badgeColor(this.selected);
        }
    }
});
