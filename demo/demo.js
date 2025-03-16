// Khai bao
let object = {
    fullName: "hehe",
    age: 18,
    address: "Ha Noi",
};

// const animal = new Object();
// animal.fullName = "Cat"
// animal.color = "Yellow";

// // Truy cap vao object
// // console.log(object["fullName"]);
// // console.log(animal);

// const key = "email"

// object[key] = "hehe@gmail.com"
// console.log(object);
// // xoa
// delete object.email;
// console.log(object);
// //destructuring

// // destructuring
// const {fullName,age ,address} = object
// console.log(fullName);
// console.log(age);
// console.log(address);


// duyet qua object
// for (const key in object) {
//     console.log(object[key]);   
// }

// lay ra cac key co trong object va truyen vao mang

console.log(`Danh sach key : `,Object.keys(object));
console.log(`Danh sach value : `,Object.values(object));
