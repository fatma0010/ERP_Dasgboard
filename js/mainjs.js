/*********************
change color
**********************/

function openform(){
	var element5 = document.getElementById("modal");
	
	element5.style.display = "block";
}

function closeform(){
	var element6 = document.getElementById("modal");
	
	element6.style.display = "none";

}




/*****************************************
functions for store page
*******************************************/

  function preload()
	{
	  
	  var ele1 = document.getElementById("color1");
	  var ele2 = document.getElementById("");
	  
	  ele1.style.transition = "0.1s";
	  ele1.style.backgroundColor="#FFD523";
	  ele1.style.borderRadius ="30px";
	  ele1.style.color ="black";
	  
	}


	function ckickRep()
	{
		var item =  document.getElementById("content1");
		var item1 = document.getElementById("content2");
		var item2 = document.getElementById("color2");
		var item3 = document.getElementById("color1");

		
		item.style.display = "none";
		item1.style.display = "block";
		item2.style.backgroundColor="#FFD523";
		item2.style.borderRadius ="30px";
		item2.style.color ="black";
		
		
		item3.style.backgroundColor="";
		item3.style.borderRadius ="";
		item3.style.color ="";
		item3.style.transition = "";

	}

	function ckickDef(){
		var item = document.getElementById("content1");
		var item1 = document.getElementById("content2");
		var item2 = document.getElementById("color1");
		var item3 = document.getElementById("color2");


		
		item1.style.display = "none";
		item.style.display = "block";
		
		item2.style.backgroundColor="#FFD523";
		item2.style.borderRadius ="30px";
		item2.style.color ="black";
		
		item3.style.backgroundColor="";
		item3.style.borderRadius ="";
		item3.style.color ="";	
	}
	
