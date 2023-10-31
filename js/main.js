// Tạo mảng ID các input nhập vào
var arrId = [
  "tknv",
  "name",
  "email",
  "password",
  "datepicker",
  "luongCB",
  "chucvu",
  "gioLam",
];
var spanId = [
  "tbTKNV",
  "tbTen",
  "tbEmail",
  "tbMatKhau",
  "tbNgay",
  "tbLuongCB",
  "tbChucVu",
  "tbGiolam",
];
// Tạo mảng arr Nhân Viên để lưu trữ các đối tượng nhân viên
var arrNhanVien = [];

// tạo hàm lấy dữ liệu người dùng nhập vào và lưu vào đối tượng nhanVien
function getValueUser() {
  var isValid = true;
  var nhanVien = new NhanVien();
  for (let i = 0; i < arrId.length; i++) {
    var valueInput = document.getElementById(arrId[i]).value;
    nhanVien[arrId[i]] = valueInput;
    if (arrId[i] == "email") {
      isValid &=
        checkEmptyValue(valueInput, spanId[i]) &&
        checkEmailValue(valueInput, spanId[i]);
    } else if (arrId[i] == "password") {
      isValid &=
        checkEmptyValue(valueInput, spanId[i]) &&
        checkStrongPwd(valueInput, spanId[i]);
        // checkMinMaxValue(valueInput, spanId[i], 6, 10);
    }else if (arrId[i] == "tknv") {
        isValid &=
          checkEmptyValue(valueInput, spanId[i]) &&
          checkMinMaxValue(valueInput, spanId[i], 4, 6);
      }else if (arrId[i] == "name") {
        isValid &=
          checkEmptyValue(valueInput, spanId[i]) &&
          checkTextValue(valueInput,spanId[i]);
      }else if (arrId[i] == "datepicker") {
        isValid &=
          checkEmptyValue(valueInput, spanId[i]) &&
          checkDatePicker(valueInput,spanId[i]);
      }else if (arrId[i] == "luongCB") {
        isValid &=
          checkEmptyValue(valueInput, spanId[i]) &&
          checkSalary(valueInput, spanId[i], 1000000, 20000000);
      }else if (arrId[i] == "gioLam") {
        isValid &=
          checkEmptyValue(valueInput, spanId[i]) &&
          checkHour(valueInput, spanId[i], 80, 200);
      } else {
      isValid &= checkEmptyValue(valueInput, spanId[i]);
    }
  }
  if (isValid) {
    arrNhanVien.push(nhanVien);
    saveLocalStore("arrNhanVien", arrNhanVien);
    render();
    reset();
    // return sinhVien;
  }
  var day= document.getElementById("datepicker").value;
    console.log(day);
}
document.getElementById("btnThemNV").onclick = getValueUser;


// Hàm render nội dung ra màn hình
function render(arr) {
  var nhanVien = new NhanVien();
  if (arr == undefined) {
    arr = arrNhanVien;
  }
  content = "";
  for (let i = 0; i < arr.length; i++) {
    Object.assign(nhanVien, arr[i]);
    // console.log(nhanVien);
    content += `
        <tr>
	        <td>${nhanVien.tknv}</td>
	        <td>${nhanVien.name}</td>
	        <td>${nhanVien.email}</td>
	        <td>${nhanVien.datepicker}</td>
	        <td>${nhanVien.chucvu}</td>
	        <td>${nhanVien.tinhLuong()}</td>
	        <td>${nhanVien.xepLoai()}</td>
	        <td>
                <button class="btn btn-danger btnXoa" onclick="deleteNhanVien('${
                  nhanVien.email
                }')">Xóa</button>
                <button class="btn btn-warning btnSua" data-toggle="modal" data-target="#myModal" onclick="getInforNhanVien('${
                  nhanVien.email
                }')">Sửa</button>
            </td>
        </tr>  `;
  }
  document.getElementById("tableDanhSach").innerHTML = content;
}

// Hàm xóa nhân viên
function deleteNhanVien(email) {
  console.log("Tôi là xoá");
  console.log(email);
  var index = -1;
  for (var i = 0; i < arrNhanVien.length; i++) {
    var nhanVien = arrNhanVien[i];
    if (nhanVien.email == email) {
      console.log(i);
      index = i;
    }
  }
  if (index != -1) {
    arrNhanVien.splice(index, 1);
    saveLocalStore("arrNhanVien", arrNhanVien);
    // gọi lại hàm render giao diện để update dữ liệu mới lên giao diện
    render();
    console.log(arrNhanVien);
  }
  // arrSinhVien.splice()
}
// Hàm lấy dữ liệu nhân viên đổ ra form nhập
function getInforNhanVien(email) {
  document.getElementById("email").disabled= true;
  var index = -1;
  for (let j = 0; j < arrNhanVien.length; j++) {
    if (arrNhanVien[j].email == email) {
      index = j;
      for (let i = 0; i < arrId.length; i++) {
        document.getElementById(arrId[i]).value = arrNhanVien[j][arrId[i]];
      }
    }
  }
}
// Hàm editNhanVien
function editNhanVien(){
  document.getElementById("email").disabled = false;

}

// hàm reset form nhập
function reset() {
  for (let j = 0; j < arrId.length; j++) {
    document.getElementById(arrId[j]).value = "";
  }
}

// function search nhân viên theo xếp loại và hiển thị ra table
// Nhập loại cần tìm kiếm
// kiếm tra loại nhập == xeploai => lấy ra Nhân Viên đó push vào arr
// render
function timKiemNhanVien() {
  var nhanVien = new NhanVien()
  var arrXepLoai = [];
  var xepLoai = document.getElementById("searchName").value;
  for (let j = 0; j < arrNhanVien.length; j++) {
    Object.assign(nhanVien, arrNhanVien[j]);
    if (nhanVien.xepLoai() == xepLoai) {
      var xlnv = nhanVien;
      arrXepLoai.push(xlnv);
    }
  }
  // document.getElementById("searchName").value = "";
  render(arrXepLoai);
}
document.getElementById("btnTimNV").onclick = timKiemNhanVien;
// ----------------- Chức năng lưu dữ liệu xuống localStorage
function saveLocalStore(key, value) {
  // chuyển dữ liệu object, array về chuỗi JSON
  var valueString = JSON.stringify(value);
  localStorage.setItem(key, valueString);
}

// ----------------- Chức năng lấy dữ liệu từ localStorage
function getLocalStore(key) {
  var arrLocal = JSON.parse(localStorage.getItem(key));
  console.log(arrLocal);
  // có trường hợp xảy ra // có dữ liệu --- dữ liệu null
  if (arrLocal) {
    arrNhanVien = arrLocal;
    console.log(arrNhanVien);
    render();
  }
}
getLocalStore("arrNhanVien");
// var regexName = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,10}$/
// var regexName = /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/;
 var regexName = /^((19|20)?[0-9]{2}[- -.](0?[1-9]|1[012])[- -.](0?[1-9]|[12][0-9]|3[01]))*$/;
    let result = regexName.test("1992-01-28");
    console.log(result);
    
