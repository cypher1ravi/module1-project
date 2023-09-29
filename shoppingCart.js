function calculateTotal(cart) {
    const totals = cart.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
    return totals
}
console.log(calculateTotal([
    { name: "Fruits", price: 10, quantity: 5 },
    { name: "Vegetables", price: 8, quantity: 3 },
    { name: "Dairy", price: 5, quantity: 2 },
    { name: "Snacks", price: 3, quantity: 10 },
]))