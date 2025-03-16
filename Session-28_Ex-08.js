const employees = []
let searchID
let choice
let index
do {
    searchID = 0
    index = 0
    choice = +prompt(`
        1. Them nhan vien moi
        2. Xoa nhan vien theo id
        3. Cap nhat muc luong cua nhan vien
        4. Tim kiem theo ten
        5. Thoat
        Lua chon cua ban`)
        switch (choice) {
            case 1:
                let id = +prompt("Nhap ID:");
                let name = prompt("Nhap ten:");
                let salary = +prompt("Nhap muc luong:");
                let newEmploy = {
                    id: id,
                    name: name,
                    salary: salary
                };
                employees.push(newEmploy);
                console.log(`Them nhan vien thanh cong`);
                break;
            case 2:
                searchID = +prompt("Nhap ID")
                index = employees.findIndex(element => element.id === searchID);
                if (index !== -1) { 
                    let choice = +prompt("Ban co chac chan muon xoa nhan vien nay khong?  [1 = Yes / 0 = No]")
                    switch (choice) {
                        case 1:
                            employees.splice(index, 1);
                            console.log(`Da xoa nhan vien thanh cong`);
                            break;
                        case 2:
                            break;
                        default:
                            console.log(`Lua chon khong hop le`);
                            break;
                    }
                } else {
                    console.log(`Khong tim thay nhan vien`);
                }
                break;
            case 3:
                searchID = +prompt("Nhap ID")
                index = employees.findIndex(element => element.id === searchID);
                if (index !== -1) {
                    console.log(`Luong hien tai : `,employees[index].salary);
                    employees[index].salary = +prompt("Nhap luong moi:")
                    console.log(`Da cap nhat luong thanh cong`);    
                }
                else{
                    console.log("Khong tim thay nhan vien");
                }
                break;
                case 4:
                    let searchName = prompt("Nhập tên:").trim().toLowerCase();
                    let index = employees.findIndex(employee => employee.name.toLowerCase() === searchName);
                    if (index !== -1) {
                        console.log(
                            `ID: ${employees[index].id}
                            Ten: ${employees[index].name}
                            Luong: ${employees[index].salary}`
                        );
                    } else {
                        console.log("Khong tim thay nhan vien");
                    }
                    break;
            case 5:
                console.log(`Tam biet`);
                break;
            default:
                console.log(`Lua chon khong hop le`);
                break;
        }
} while (choice !== 5);