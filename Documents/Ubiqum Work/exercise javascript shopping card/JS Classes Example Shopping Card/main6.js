console.log("Objects containing other objects");

// Let's remember our Product class

class Product {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    toString() {
        return this.name + " " + this.price + "€";
    }
}

// And create a couple of products
let p1 = new Product("vacuum cleaner", 100);
let p2 = new Product("pencil", 3);
let p3 = new Product("bike", 300);
let p4 = new Product("car", 500);
let p5 = new Product("bike", 10);
let p6 = new Product("car", 500);
let p7 = new Product("car", 500);
let p8 = new Product("car", 500);
let p9 = new Product("pencil", 3);



// Now, let's create a ShoppingCart class, that will contain products

class ShoppingCart {

    constructor() {
        this.products = []; // empty array for the products and prices
        this.costss = []; // empty array for the products prices only
        this.total = 0; // it will get the total products price
        this.itemsNumb = 0;
        this.amountProducts = {};
    }

    addProduct(product) { // this is a method
        this.products.push(product);
        this.pricess(product);
        this.discount(product);
//        this.buy4get1free(product);
    }

    pricess(product) { // this is a method with a function inside
        this.costss.push(product.price);


        function getSum(total, num) { // to add the prices in one number
            return total + num;
        }

        let costAll = this.costss.reduce(getSum);
        this.total = costAll;

    }


    discount(product) { // to get the number of items

        this.itemsNumb = Object.keys(this.products).length;

        if (this.itemsNumb > 5) {

            let discount = this.total / 10;
            let discountedPrice = this.total - discount;
            this.discountTotal = discountedPrice;
        }
    }


    buy4get1free(product) {

        let get1Free = 0;


        this.products.forEach(products => {

            if (this.amountProducts[products.name] == undefined) {

                this.amountProducts[products.name] = 1;

            } else {

                this.amountProducts[products.name]++;

                if (this.amountProducts[products.name] % 4 == 0) {
                    get1Free += products.price;
                    console.log(get1Free);

                }
            }
            this.allDiscountsPrice = this.discountTotal - get1Free;

            return this.allDiscountsPrice;
        });
    }


    //1674.4




    toString() {
        return "cart with: " + this.products + " the total price is " + this.total + "€. " + "Amount of items " + this.itemsNumb + ". More than 5 items have a discount of 10%, the total price now is  " + this.discountTotal + ". Buy one get one free final cost " + this.allDiscountsPrice;
    }
}


// We can create a cart and add the products we created before

let cart = new ShoppingCart();

cart.addProduct(p1);
cart.addProduct(p2);
cart.addProduct(p3);
cart.addProduct(p4);
cart.addProduct(p5);
cart.addProduct(p6);
cart.addProduct(p7);
cart.addProduct(p8);
cart.addProduct(p9);

cart.buy4get1free();

console.log("We have a " + cart);
