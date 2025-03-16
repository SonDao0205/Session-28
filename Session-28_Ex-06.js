const cart = [

    { name: "Mèn mén", price: 30000, quantity: 2 },

    { name: "Mì tôm", price: 5000, quantity: 1 },

    { name: "Bánh bao", price: 15000, quantity: 3 }

];
let sum = 0
for (const product of cart) {
    sum += product.price * product.quantity
}
console.log(`Tong tien trong gio hang : `,sum);
