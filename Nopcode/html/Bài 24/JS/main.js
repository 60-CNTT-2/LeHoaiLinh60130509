$(document).ready(function(){
    var d = new Date ();
    console.log(d);
    var str = " To day, ngày" + " " + d.getDate()+" " +"tháng" +" " +(d.getMonth()+1)+ " " + "năm"+ " " +d.getFullYear();
    $('body').html('<p>'+str+'<p>');
});