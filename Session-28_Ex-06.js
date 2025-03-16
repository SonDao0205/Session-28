const cart = [

    { name: "Mèn mén", price: 30000, quantity: 2 },

    { name: "Mì tôm", price: 5000, quantity: 1 },

    { name: "Bánh bao", price: 15000, quantity: 3 }

];
for (const product of cart) {
    console.log(`Ten san pham :`,product.name,` - Tong tien :`,product.price * product.quantity);
}