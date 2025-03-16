const books =[]
let choice
let searchTitle
let searchID
const addBook = (books) => {
    let id = +prompt("Nhap id")
    let title = prompt("Nhap ten sach")
    let author = prompt("Nhap ten tac gia")
    let year = +prompt("Nhap nam xuat ban")
    let price = +prompt("Nhap gia sach")
    let isAvailable = false
    let newBook = {
        id:id,
        title :title,
        author : author,
        year : year,
        price : price,
        isAvailable : false
    }
    books.push(newBook)
    return `Da them sach thanh cong`
}

const displayBooks = (books) => {
    for (const key in books) {
        console.log(`
            \nThong tin sach thu ${key}
            ID : ${books[key].id}
            Title : ${books[key].title}
            Author : ${books[key].author}
            Year : ${books[key].year}
            Price : ${books[key].price}
            Status : ${books[key].isAvailable}\n`);
    }
}

const searchBook = (books,searchTitle) => {
    let index = books.findIndex((book) => book.title === searchTitle)
    if (index !== -1) {
        console.log(`
            \nThong tin sach
            ID : ${books[index].id}
            Title : ${books[index].title}
            Author : ${books[index].author}
            Year : ${books[index].year}
            Price : ${books[index].price}
            Status : ${books[index].isAvailable}\n`);
    }
    else{
        console.log(`Khong tim thay sach`);
    }
}

const updateBook = (books,searchID) => {
    let index = books.findIndex((book) => book.id === searchID)
    if (index !== -1) {
        if (books[index].isAvailable) {
            console.log(`Trang thai hien tai : Dang duoc muon`);
        }
        else{
            console.log(`Trang thai hien tai : Chua duoc muon`);
        }
        let choice = +prompt(`
            1. Doi thanh da muon sach
            2. Doi thanh chua muon sach`)
            switch (choice) {
                case 1:
                    books[index].isAvailable = true
                    break;
                case 2:
                    books[index].isAvailable = false
                    break;
                default:
                    console.log(`Lua chon khong hop le`);
                    break;
            }
    }
    else{
        console.log(`Khong tim thay sach`);
    }
}

const deleteBook = (books,searchID) => {
    let index = books.findIndex((book) => book.id === searchID)
    if (index !== -1) {
        books.splice(index,1)
        console.log(`Da xoa sach thanh cong`);
    }
    else{
        console.log(`Khong tim thay sach`);
    }
}

const sortPrice = (books) => {
    books.sort((a,b) => a.price - b.price)
    console.log(`Da sap xep thanh cong`);
}
do {
    searchID = 0
    searchTitle = ``
    choice = +prompt(`
        1. Them sach moi
        2. Hien thi danh sach sach
        3. Tim kiem sach theo tieu de
        4. Cap nhat trang thai sach
        5. Xoa sach
        6. Sap xep theo gia tang dan
        7.Thoat
        Lua chon cua ban`)
        switch (choice) {
            case 1:
                addBook(books)
                break;
            case 2:
                displayBooks(books)
                break;
            case 3:
                searchTitle = prompt("Nhap tieu de cua sach")
                searchBook(books,searchTitle)
                break;
            case 4:
                searchID = +prompt("Nhap ID cua sach")
                updateBook(books,searchID)
                break;
            case 5:
                searchID = +prompt("Nhap ID cua sach")
                deleteBook(books,searchID)
                break;
            case 6:
                sortPrice(books)
                break;
            case 7:
                console.log(`Tam biet`);
                break;
            default:
                console.log(`Lua chon khong phu hop`);
                break;
        }
} while (choice !== 7);