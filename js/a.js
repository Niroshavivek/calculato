$(document).ready(function() {
var aw=0;
$("#aa").click(function(){
    var a = parseInt($("#f").val());
    var b = parseInt($("#s").val()); 
    var c=a+b;
    $('#t').val(c);
    $('#f').val("");
    $('#s').val("");
    var table = document.getElementById("my");
    var row = table.insertRow(aw);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = a;
    cell2.innerHTML = b;
    cell3.innerHTML = "+";
    cell4.innerHTML = c;
    aw++;
});
$("#dd").click(function(){

    var a = parseInt($("#f").val());
    var b = parseInt($("#s").val()); 
    var c=a-b;
    $('#t').val(c);
    $('#f').val("");
    $('#s').val("");
       var table = document.getElementById("my");
    var row = table.insertRow(aw);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = a;
    cell2.innerHTML = b;
    cell3.innerHTML = "+";
    cell4.innerHTML = c;
    aw++;
});
$("#bb").click(function(){
   
    var a = parseInt($("#f").val());
    var b = parseInt($("#s").val()); 
    var c=a*b;
    $('#t').val(c);
     $('#f').val("");
    $('#s').val("");
       var table = document.getElementById("my");
    var row = table.insertRow(aw);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = a;
    cell2.innerHTML = b;
    cell3.innerHTML = "*";
    cell4.innerHTML = c;
    aw++;
});
$("#cc").click(function(){
    
    var a = parseInt($("#f").val());
    var b = parseInt($("#s").val()); 
    var c=a/b;
    $('#t').val(c);
    $('#f').val("");
    $('#s').val("");
       var table = document.getElementById("my");
    var row = table.insertRow(aw);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = a;
    cell2.innerHTML = b;
    cell3.innerHTML = "/";
    cell4.innerHTML = c;
    aw++;
});
$("#cc").click(function(){
    
    $('#f').val("");
    $('#s').val("");
    $('#t').val("");
   
});



});