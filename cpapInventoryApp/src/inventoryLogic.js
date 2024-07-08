// Define an Item class to represent an inventory item
class Item {
    constructor(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }

    // Method to add quantity to the item
    addQuantity(amount) {
        this.quantity += amount;
    }

    // Method to remove quantity from the item
    removeQuantity(amount) {
        if (amount <= this.quantity) {
            this.quantity -= amount;
        } else {
            console.log(`Not enough ${this.name} in stock.`);
        }
    }

    // Method to display item details
    display() {
        console.log(`Item: ${this.name}, Quantity: ${this.quantity}, Price: $${this.price.toFixed(2)}`);
    }
}

// Create an inventory array to store items
let inventory = [];

// Function to add a new item to the inventory
function addItem(name, quantity, price) {
    let item = new Item(name, quantity, price);
    inventory.push(item);
}

// Function to remove an item from the inventory
function removeItem(name) {
    inventory = inventory.filter(item => item.name !== name);
}

// Function to find an item in the inventory
function findItem(name) {
    return inventory.find(item => item.name === name);
}

// Function to display all items in the inventory
function displayInventory() {
    inventory.forEach(item => item.display());
}

// Example usage
addItem('Apple', 10, 0.5);
addItem('Banana', 20, 0.3);
addItem('Orange', 15, 0.4);

console.log('Initial Inventory:');
displayInventory();

let apple = findItem('Apple');
if (apple) {
    apple.addQuantity(5);
    apple.removeQuantity(3);
}

console.log('\nUpdated Inventory:');
displayInventory();

removeItem('Banana');

console.log('\nFinal Inventory:');
displayInventory();
