function htt_orion(){

setTimeout(function(){


swal({  

 title: "Hí Lu",   
text: "Anh có quà dành cho vợ nìa, bấm vào nút bên dưới đuyyy 😗😗", 
 imageUrl: "https://scontent.fdad1-1.fna.fbcdn.net/v/t1.6435-9/210214233_510902476823113_5601464401617437024_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=DLFW-BnWNEEAX-hX6oB&_nc_ht=scontent.fdad1-1.fna&oh=00_AT9NoYReo1Bv3Az-YM2QBB_lkM3bikup3U_4850kfCTzBw&oe=61FD80C6",
  showCancelButton: false,
   confirmButtonColor: "#DD6B55", 
  confirmButtonText: "Nhận quà ngay",

  closeOnConfirm: false}, 
function(isConfirm){  
 if (isConfirm) {   
 

swal({  
 title: "Bạn có Phải Đỗ Thị Kiều Mỹ không 🙃🙃", 
  text: "Nhập năm sinh của shiba đê (theo dạng bốn số như 1997,1995,1990,...)",  
 type: "input",  
 showCancelButton: false,  
 closeOnConfirm: false,   
 showLoaderOnConfirm: true,
animation: "slide-from-top",  
 inputPlaceholder: "Nhập đê" },
 function(inputValue){   
if (inputValue === false) return false;   
   if (inputValue !== "2006") {   
  swal.showInputError("Nhập sai rồi kìa :/");   
  return false   }   
 
setTimeout(function(){


swal({  
 title: "Hí Lu Vợ Yêu :3", 
  text: "Vợ muốn nhận quà gì hôm :3",  
 type: "input",  
 showCancelButton: false,  
 closeOnConfirm: false,   
animation: "slide-from-top",  

 inputPlaceholder: "Ghi zô đây quà vợ muốn nhận đuyyyy" },
 function(inputValue){   
if (inputValue === false) return false;   
   if (inputValue === "") {   
  swal.showInputError("Phải có quà cơ :<");   
  return false   }  
 swal("Oke ", "Anh sẽ tặng " + inputValue + " Cho vợ sau nha, trả góp vô thời hạn nha 😆😆 \n Anh chúc vợ thêm tuổi mới có thật nhiều sức khỏe, gặp nhiều may mắn trong cuộc sống, vui vẻ bên người thân gia đình và có một kết quả học tập thật tốt nha 😁😁 \n Mặc dù năm nay anh ứ thổi nến với vợ được nhưng mà vợ cố lên nhó. Vài năm nữa cứ đến sinh nhật vợ anh sẽ thổi nến với vợ nhoa ❤️❤️ \n Happy Birthday my Love 💋💋", "success"); });


},3000);



});

 }
else {   
  swal("KHÔNG NHẬN ", "Bạn vừa từ chối món quà từ Shiba ,    Ấn F5 nếu muốn nhận lại quà :D ", "error"); 

  } });



},8000);
}
htt_orion();

