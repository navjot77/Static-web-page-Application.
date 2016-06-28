
 $(document).ready(function () {

$(".headPanel").click(function(){ $(this).next().toggle();});
$(".list-icon").click(function() {document.getElementById("myOverlay").style.height = "400px";});
$("#closebtn").click(function() { document.getElementById("myOverlay").style.height = "0%";});
$("#grid1").mouseenter(function(){ document.getElementById("overlay_grid").style.height = "400px";});
$("#grid1").mouseleave(function(){ document.getElementById("overlay_grid").style.height = "0px";});
$("#grid2").mouseenter(function(){ document.getElementById("overlay_grid2").style.height = "400px";});
$("#grid2").mouseleave(function(){ document.getElementById("overlay_grid2").style.height = "0px";});
$("#grid3").mouseenter(function(){ document.getElementById("overlay_grid3").style.height = "400px";});
$("#grid3").mouseleave(function(){ document.getElementById("overlay_grid3").style.height = "0px";});

 });