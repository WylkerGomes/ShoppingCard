
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


// Now, let's create a ShoppingCart class, that will contain products

class ShoppingCart {

	constructor() {
		this.products = []; // empty at first
	}

	addProduct(product) {
		this.products.push(product);
	}

	toString() {
		return "cart with: " + this.products;
	}
}


// We can create a cart and add the products we created before

let cart = new ShoppingCart();
cart.addProduct(p1);
cart.addProduct(p2);
cart.addProduct(p3);

console.log("We have a " + cart);


//////////////////////////////////////////////////////////////////////////////

//1) In ShoppingCart, define a method totalPrice() that returns the total amount of the products it contains.

// answer: 

class ShoppingCart {

    constructor() {
        this.products = []; // empty array for the products and prices
        this.costss = []; // empty array for the products prices only
        this.total = 0; // it will get the total products price
    }

    addProduct(product) { // this is a method
        this.products.push(product);
        this.pricess(product);
    }

    pricess(product){// this is a method with a function inside
        this.costss.push(product.price);


        function getSum(total, num) {// to add the prices in one number
            return total + num;
        }

        let costAll = this.costss.reduce(getSum);
        this.total =costAll;

    }

   toString() {
        return "cart with: " + this.products + " the total price is " + this.total + "€";
    }
}



///////////////////////////// my way of doing it : 

class totalCost {

    constructor() {
        this.totalSum = [];
    }

    addShoppingCart(product) {
        this.totalSum.push(product.price); 
    }

    toString() {
        return "the total of all products, it is " + this.totalSum;
    }
}

let prices = new totalCost();

prices.addShoppingCart(p1);
prices.addShoppingCart(p2);
prices.addShoppingCart(p3);

console.log("We have " + prices);


let totalPrice = prices.totalSum;
console.log(totalPrice);

function getSum(total, num) {
    return total + num;
}

let something = totalPrice.reduce(getSum);
console.log(something);

//////////////////////////////////////////////////////////////////////////////////
