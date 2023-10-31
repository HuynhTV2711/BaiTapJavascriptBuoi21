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
        }else if (this.chucvu == 'Trưởng phòng') {
            tongLuong = this.luongCB *2;
        }else if (this.chucvu == 'Nhân viên') {
            tongLuong = this.luongCB *1;
        } 
        var tl = tongLuong.toLocaleString('vi', {style : 'currency', currency : 'VND'});
        return tl;
    },
    this.xepLoai = function(){
        var xl = "";
        if (this.gioLam >= 192) {
            xl = "Xuất sắc";
        }else if(this.gioLam >= 176){
            xl = "Giỏi";
        }else if (this.gioLam >=160) {
            xl = "Khá";
        }else if(this.gioLam < 160){
            xl = "Trung bình";
        } 
        return xl;
    }
}
