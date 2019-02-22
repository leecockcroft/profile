

window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
   console.log(scroll)
    if(scroll > 300){

		var x= document.querySelector('.xxx');
		x.style.display='block'
			x.classList.add('animate')

		

		var y= document.querySelector('.slide');
			
			y.style.display='flex'
		
    }
       

		


    
   
     
   
    
})




var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); // Change image every 2 seconds
}





