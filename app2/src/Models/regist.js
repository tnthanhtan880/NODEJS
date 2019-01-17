var db = require('../Dbconnection');

var regist={
	getAllSinhVien:function(callback){
		return db.query("Select * from regist",callback);
	},
	getSinhVienById:function(id,callback){
		return db.query("select * from regist where Id=?",[id],callback);
	},
	addSV:function(sinhvien,callback){
		return db.query("Insert into regist(name,class,dob) values(?,?,?)",[sinhvien.name,sinhvien.class,sinhvien.dob],callback);
	},
	deleteSV:function(id,callback){
		return db.query("delete from regist where Id=?",[id],callback);
	},
	updateSV:function(id,sinhvien,callback){
		return db.query("update regist set name=?,class=?,dob=? where Id=?",[sinhvien.name,sinhvien.class,sinhvien.dob,id],callback);
	}
};
 module.exports=regist;