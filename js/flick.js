$(function(){
    var box = $("#touch-box")[0]//複数個あるかもしれないから配列の0番目を記述;
    box.addEventListener("touchstart", touchHandler, false);
});
    
function touchHandler(e){
    alert("たっちしだ");
}
