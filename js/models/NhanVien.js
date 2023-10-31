function NhanVien(){
    this.tknv = '',
    this.name = '',
    this.email = '',
    this.password = '',
    this.datepicker = '',
    this.luongCB = '',
    this.chucvu = '',
    this.gioLam = '',
    this.tinhLuong = function(){
        var tongLuong=0;
        if(this.chucvu == 'Sếp'){
            tongLuong = this.luongCB *3;
        }else if (this,this.chucvu == 'Trưởng phòng') {
            tongLuong = this.luongCB *2;
        }else tongLuong = this.luongCB;
        return tongLuong;
    },
    this.xepLoai = function(){
        var xl = "";
        if (this.gioLam >= 192) {
            xl = "Xuất sắc";
        }else if(this.gioLam >= 176){
            xl = "Giỏi";
        }else if (this.gioLam >=160) {
            xl = "Khá";
        }else xl = "Trung bình";
        return xl;
    }
}
