function checkEmptyValue(value, spanId) {
    // Kiểm tra dữ liệu từ người dùng
    if (value == '') {
      // document.querySelectorAll(".sp-thongbao").style.display = "block";
      document.getElementById(spanId).innerHTML = 'Vui lòng không bỏ trống';
      return false;
    } else {
      // document.querySelectorAll(".sp-thongbao").style.display = "block";
      document.getElementById(spanId).innerHTML = '';
      return true;
    }
  }
  
  function checkEmailValue(value, spanId) {
    var regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    // sử dụng phương thức test để kiểm tra dữ liệu đầu vào có thoả chuỗi regex hay không
    regexEmail.test(value); // true , dữ liệu không thoả ==> false
    if (regexEmail.test(value)) {
      // dữ liệu thoả regex
      // document.querySelectorAll(".sp-thongbao").style.display = "block";
      document.getElementById(spanId).innerHTML = '';
      return true;
    } else {
      // document.querySelectorAll(".sp-thongbao").style.display = "block";
      document.getElementById(spanId).innerHTML =
        'Định dạng email không chính xác';
      return false;
    }
  }
  // Kiểm tra dữ liệu nhập vào là chữ cái
  function checkTextValue(value, spanId){
    let result = /^[a-zA-Z ]+$/.test( value);
    if (result) {
      // dữ liệu thoả regex
      document.getElementById(spanId).innerHTML = '';
      return true;
    } else {
      document.getElementById(spanId).innerHTML =
        'Định dạng tên nhân viên chỉ chứa chữ cái';
      return false;
    }
  }
  // Kiểm tra độ mạnh mật khẩu
  function checkStrongPwd(value, spanId){
    let result = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,10})/.test( value);
    if (result) {
      // dữ liệu thoả regex
      document.getElementById(spanId).innerHTML = '';
      return true;
    } else {
      document.getElementById(spanId).innerHTML =
        'Mật khẩu bao 6-10 ký tự bao gồm chữ in hoa, thường, số, ký tự đặc biệt';
      return false;
    }
  }
  // Kiểm tra định dạng ngày làm
  function checkDatePicker(value, spanId){
    var regexDate =  /^((19|20)?[0-9]{2}[- -.](0?[1-9]|1[012])[- -.](0?[1-9]|[12][0-9]|3[01]))*$/;
    regexDate.test(value); // true , dữ liệu không thoả ==> false
    if (regexDate.test(value)) {
      // dữ liệu thoả regex
      document.getElementById(spanId).innerHTML = '';
      return true;
    } else {
      document.getElementById(spanId).innerHTML =
        'Định dạng ngày không chính xác MM/DD/YYYY';
      return false;
    }
  }
  // Kiểm tra lương cơ bản
  function checkSalary(value, spanId, min, max){
    if (value >= min && value <= max) {
      document.getElementById(spanId).innerHTML = '';
      return true;
    }else {
      document.getElementById(spanId).innerHTML =
        'Lương nằm trong khoảng 1.000.000 - 20.000.000';
      return false;
    }
  }
  // Kiểm tra lương cơ bản
  function checkHour(value, spanId, min, max){
    if (value >= min && value <= max) {
      document.getElementById(spanId).innerHTML = '';
      return true;
    }else {
      document.getElementById(spanId).innerHTML =
        'Lương nằm trong khoảng 80 - 200 giờ';
      return false;
    }
  }
  
  // kiểm tra độ dài ký tự
  function checkMinMaxValue(value, spanId, min, max) {
    // kiểm tra độ dài ký tự
    if (value.length >= min && value.length <= max) {
      // điều kiện đúng dữ liệu thoả yêu cầu
      // document.querySelectorAll(".sp-thongbao").style.display = "block";
      document.getElementById(spanId).innerHTML = '';
      return true;
    } else {
      // điều kiện sai
      // document.querySelectorAll(".sp-thongbao").style.display = "block";

      document.getElementById(spanId).innerHTML = `Vui lòng nhập tối thiểu ${min} và tối đa ${max}`;
      return false;
    }
  }
  