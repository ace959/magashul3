document.getElementById("date").innerText = new Date().toDateString();


$(document).ready(function(){
  $(".article").hide().fadeIn(1500);

  
  $("#shopBtn").click(function(){
    alert("Redirecting to the shop page!");
  });
});