const square = document.getElementById('square');
square.addEventListener('click', function(){
  var result = confirm("Do you want to exit page?")
  if(result==true){
    alert("Thanks for visiting my page.")
  }else{
    alert("Thanks for staying with us.")
  }
});
