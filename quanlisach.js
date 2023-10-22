const timenu= document.querySelector('.ti-menu')
const tigrid= document.querySelector('.ti-layout-grid3')
const grid= document.querySelector('.danhsach')
const menu= document.querySelector('.danhsach1')
const myForm = document.querySelector(".js-form")

const stat_container= document.querySelector('.stat-container')
const stat = document.querySelector('.stat')
const stat_close= document.querySelector('.stat-close')
stat_container.addEventListener('click', function(event){
    event.stopPropagation()
})
stat.addEventListener('click',close_stat)
stat_close.addEventListener('click',close_stat)
function display_stat(id){
    stat.classList.add('open');
    const imgsearch = document.querySelector('.bcover')
    id = id-1
    imgsearch.src = books[id].imgsrc
    
    const sname = document.querySelector('.sname')
    const scode = document.querySelector('.scode')
    const sstatus = document.querySelector('.sstatus')
    const sprice = document.querySelector('.sprice')
    const sauthor = document.querySelector('.sauthor')
    const spublisher = document.querySelector('.spublisher')
    const sgenre = document.querySelector('.sgenre')

    sname.textContent = books[id].name;
    sauthor.textContent = books[id].author;
    sgenre.textContent = books[id].genre;
    spublisher.textContent = books[id].publisher;
    sprice.textContent = books[id].price;
    sstatus.textContent = books[id].status;
    scode.textContent = books[id].code;
    
}
function close_stat(){
    stat.classList.remove('open')
}

function switchtoGrid(){
    tigrid.classList.remove('switch')
    timenu.classList.remove('switch')
    grid.classList.remove('switch')
    menu.classList.remove('switch')
}
function switchtoMenu(){
    tigrid.classList.add('switch')
    timenu.classList.add('switch')
    grid.classList.add('switch')
    menu.classList.add('switch')
}
tigrid.addEventListener('click', switchtoMenu)
timenu.addEventListener('click', switchtoGrid)

const open= document.querySelector('.js-open')
const modal_container= document.querySelector('.modal-container')
const modal= document.querySelector('.modal')
const modal_close= document.querySelector('.modal-close')
function open_modal(){
    modal.classList.add('open')
}
function close_modal(){
    modal.classList.remove('open')
    myForm.reset()
    previewImg.src = ""
}
modal_container.addEventListener('click', function(event){
    event.stopPropagation()
})
modal.addEventListener('click',close_modal)
open.addEventListener('click',open_modal)
modal_close.addEventListener('click',close_modal)

const previewImg = document.getElementById('previewImage')
const inputImg = document.getElementById('imageInput')
imageInput.addEventListener('change', function(){
    const file = imageInput.files[0];
    const fileURL = URL.createObjectURL(file);
    previewImg.src= fileURL;
})

var books = [];
function addBook(name, genre, code, status, price, author, publisher, imgsrc) {
        var book = {
            name : name,
            code: code,
            status: status,
            price: price,
            author: author,
            publisher: publisher,
            genre: genre,
            imgsrc: imgsrc,
        };
        books.push(book);
    }
    addBook("360 Động Từ Bất Quy Tắc Và Cách Dùng Các Thì", "Sách Tiếng Anh", 1, "có sẵn", 30000, "Trần Mạnh Tường", "NXB Văn hóa - Thông tin", "img/1.jpg");
    addBook("Biến Bất Kỳ Ai Thành Khách Hàng", "Sách hướng dẫn", 2, "có sẵn", 50000, "C.J.Hayden", "NXB Lao động - Xã hội", "img/2.jpg");
    addBook("Chỉ Cần Mẩu Khăn Giấy", "Tiểu thuyết", 3, "chờ giao", 40000, "Dan Roam", "Nhà Xuất Bản Trẻ", "img/3.jpg");
    addBook("Thất Bại Để Thành Công", "Truyền cảm hứng", 4, "có sẵn", 70000, "Nhiều tác giả", "Nhà Xuất Bản Thế Giới", "img/4.jpg")
    addBook("Chinh Phuc Mục Tiêu", "Truyền cảm hứng", 5,"có sẵn", 60000, "Brian Tracy", "First News", "img/5.jpg")
    addBook("Cho Tôi Xin Một Vé Đi Tuổi Thơ", "Sách tuổi thơ", 6, "có sẵn", 25000, "Nguyễn Nhật Ánh", "Nhà Xuất Bản Trẻ", "img/6.jpg")
    addBook("Dám Nghĩ Lớn", "Truyền cảm hứng", 7, "đang cho mượn", 80000, "David J. Schwartz. Ph.D", "Nhà Xuất Bản Trẻ", "img/7.jpg")
    addBook("Đắc Nhân Tâm", "Đạo lý", 8, "có sẵn", 60000, "Dale Carnegie", "NXB Tổng Hợp Hồ Chí Minh", "img/8.jpg")
    addBook("Dám Thất Bại", "Truyền cảm hứng", 9, "chờ giao", 20000, "Billi P.S. Lim", "Nhà Xuất Bản Trẻ", "img/9.jpg")
    addBook("Hơn Cả Khởi Nghiệp 2.0", "Truyền cảm hứng", 10, "đang cho mượn", 70000, "Jim Collins, Bill Lazier", "Nhà Xuất Bản Trẻ", "img/10.jpg")
    addBook("Hướng Dẫn Chẩn Đoán Và Điều Trị Bệnh Da Liễu", "Sách hướng dẫn", 11, "có sẵn", 15000, "Nguyễn Trọng Hào", "Nhà Xuất Bản Y Học", "img/11.jpg")
    addBook("Bộ Não Phập Phồng", "Châm biếm", 12, "chờ giao", 15000, "Nick Arnold, Tony De Saulles", "Nhà Xuất Bản Trẻ", "img/12.jpg")
    addBook("Cơ Thể Chúng Ta", "Khám phá", 13, "đang cho mượn", 15000, "Nick Arnold, Tony De Saulles", "Nhà Xuất Bản Trẻ", "img/13.jpg")
    addBook("Cây Xanh Đành Hanh", "Truyện tranh", 14, "có sẵn", 15000, "Nick Arnold, Tony De Saulles", "Nhà Xuất Bản Trẻ", "img/14.jpg")
    addBook("Côn Trùng Gớm Ghiếc", "Thế giới động vật", 15, "có sẵn", 15000, "Nick Arnold, Tony De Saulles", "Nhà Xuất Bản Trẻ", "img/15.jpg")
    addBook("Âm Thanh Kinh Hồn", "Kinh dị", 16, "có sẵn", 15000, "Nick Arnold, Tony De Saulles", "Nhà Xuất Bản Trẻ", "img/16.jpg")
    addBook("Thiên Nhiên Hoang Dã", "Khám phá thế giới", 17, "có sẵn", 15000, "Nick Arnold, Tony De Saulles", "Nhà Xuất Bản Trẻ", "img/17.jpg")
    addBook("Vật Lý Câu Chuyện Của Những Lực Bí Hiểm", "Tâm linh", 18, "có sẵn", 15000, "Nick Arnold, Tony De Saulles", "Nhà Xuất Bản Trẻ", "img/18.jpg")
    addBook("Vi Sinh Vật Vi Tính", "Khám phá thế giới", 19, "có sẵn", 15000, "Nick Arnold, Tony De Saulles", "Nhà Xuất Bản Trẻ", "img/19.jpg")
    addBook("Hành Trình Về Phương Đông", "Truyền cảm hứng", 20,"đang cho mượn", 100000, "Baird T.Spalding", "Hồng Đức", "img/20.jpg")
    addBook("Khác Biệt Hay Là Chết", "Truyền cảm hứng", 21, "có sẵn", 150000, "Jack Trout, Steve Rivkin", "Nhà Xuất Bản Trẻ", "img/21.jpg")
    addBook("Kinh Nghiệm Thành Công Của Ông Chủ Nhỏ", "Truyền cảm hứng", 22, "chờ giao", 65000, "Lão Mạc", "Nhà Xuất Bản Phụ Nữ", "img/2.jpg")
    addBook("Nghệ Thuật Lấy Lòng Khách Hàng", "Tâm lý", 23, "có sẵn", 40000, "Michael J. Maher", "Nhà Xuất Bản Thế Giới", "img/23.jpg")
    addBook("Sinh Ra Để Chạy", "Truyền cảm hứng", 24, "chờ giao", 25000, "Christopher McDougall", "Nhà Xuất Bản Thế Giới", "img/24.jpg")
    addBook("Tôi Tài Giỏi, Bạn Cũng Thế", "Truyền cảm hứng", 25, "có sẵn", 360000, "Adam Khoo", "Nhà Xuất Bản Phụ Nữ", "img/25.jpg")
    addBook("Từ Tơ Lụa Đến Silicon", "Truyền cảm hứng", 26, "có sẵn", 200000, "Jeffrey E. Garter", "Nhà Xuất Bản Trẻ", "img/26.jpg")
    addBook("Vĩ Đại Do Lựa Chọn", "Truyền cảm hứng", 27, "có sẵn", 100000, "Jim Collins, Morten T. Hansen", "Nhà Xuất Bản Trẻ", "img/27.jpg")
    addBook("Xây Dựng Để Trường Tồn", "Truyền cảm hứng", 28, "có sẵn", 80000, "Jim Collins, Jerry I. Porras", "Nhà Xuất Bản Trẻ", "img/28.jpg")
    addBook("Đừng Lựa Chọn An Nhàn Khi Còn Trẻ", "Đạo lý", 29, "có sẵn", 60000, "Cảnh Thiên", "Nhà Xuất Bản Thế Giới", "img/29.jpg")
    addBook("Vượt Bẫy Cảm Xúc", "Truyền cảm hứng", 30, "có sẵn", 30000, "Susan David", "First News", "img/30.jpg")
    
function showlist(books){
    const table = document.querySelector(".danhsach");
    const container = document.getElementById("danhsach");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    table.innerHTML = "";
    for( const book of books){
    const newRow = table.insertRow(-1);
    newRow.innerHTML = `<td>${book.code}</td>
                        <td>${book.name}</td>
                        <td>${book.status}</td>
                        <td>${book.price}</td>
                        <td>${book.author}</td>
                        <td class="js-delete">Xóa</td>`;

    const bookcard = document.createElement("div");
    bookcard.className = "book-card";
    bookcard.setAttribute('data-id', book.code)
    bookcard.addEventListener('click', function(){
        const id = this.getAttribute('data-id');
        display_stat(id);
    })

                                
    const image = document.createElement("img");
    image.className = "book-image";
    image.src = book.imgsrc;
        
    const title = document.createElement("div");
    title.className = "book-title";
    title.textContent = book.name;
        
    const author = document.createElement("div");
    author.className = "book-author";
    author.textContent = book.author;
        
    bookcard.appendChild(image);
    bookcard.appendChild(title);
    bookcard.appendChild(author);
    container.appendChild(bookcard);
        
    const deleteButton = newRow.querySelector('.js-delete');
    deleteButton.addEventListener('click', function () {
    const rowIndex = this.parentElement.rowIndex;
    books.splice(rowIndex - 1, 1);
    this.parentElement.remove();
    container.removeChild(bookcard);
    })
    }
}
showlist(books);

myForm.addEventListener("submit", function(event){
    const maSach = document.getElementById("maSach").value;
    const tieuDe = document.getElementById("tieuDe").value;
    const tacGia = document.getElementById("tacGia").value;
    const tinhTrang = document.getElementById("tinhTrang").value;
    const giaSach = document.getElementById("giaSach").value;
    const nhaXuatBan = document.getElementById("nhaXuatBan").value;
    const loaiSach = document.getElementById("loaiSach").value;    
    const imageInput = document.getElementById("imageInput");
    const selectedFile = imageInput.files[0];
    const imgsrc = URL.createObjectURL(selectedFile);
    addBook(tieuDe, loaiSach, maSach, tinhTrang, giaSach, tacGia, nhaXuatBan, imgsrc);
    myForm.reset();
    event.preventDefault();
    close_modal();
    showlist(books);
}); 

const inputbook= document.getElementById("filterName");
inputbook.addEventListener("input", searchBooks);

function searchBooks() {
    var searchResult = document.getElementById("searchResult");
    searchResult.innerHTML = "";

    for (const book of books) {
        if (book.name.toLowerCase().includes(inputbook.value.toLowerCase())) {
            var bookInfo = document.createElement("div");
            const detail = document.createElement("div");
            const id = book.code;
            
            const t = document.createElement("div");
            t.textContent = "Tên sách: " + book.name;

            const a = document.createElement("div");
            a.textContent = "Tác giả " + book.author;

            const p = document.createElement("div");
            p.textContent = "Giá: " + book.price + "đ";

            const s = document.createElement("div");
            s.textContent = "Tình trạng: " + book.status;

            const img = document.createElement("img");
            img.src = book.imgsrc;
            img.style.width = "30%";
            img.style.height = "30%";

            if(inputbook.value === "") {
                searchResult.style.display= "none";
                return;
            }
            else searchResult.style.display= "block";
            detail.appendChild(t);
            detail.appendChild(a);
            detail.appendChild(p);
            detail.appendChild(s);
            bookInfo.appendChild(img);
            bookInfo.appendChild(detail);
            bookInfo.addEventListener('click', function(){
            searchResult.style.display= "none";
            display_stat(id);
            })
            searchResult.appendChild(bookInfo);
        }
    }
}