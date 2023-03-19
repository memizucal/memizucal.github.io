function abrirVinculo(vinculo) {		
	var i;
	var x = document.getElementsByClassName("row");
	for (i = 0; i < x.length; i++) {
	  x[i].style.display = "none";
	}
	document.getElementById(vinculo).style.display = "flex";	
	var nombre = document.getElementById('menuText');
	nombre.textContent = vinculo;
	
  }
