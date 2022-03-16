function validar()
{
	var nombre=document.getElementById("titulo").value;
	if (nombre.length < 4) 
	{
		alert('tu titulo tiene menos de 4 caracteres')
	}
}
var p_genero=["Fantastico","Historico","Documental"];
function select()
{
	var v_select=document.getElementById("seleccion");
	for (i=0; i<p_genero.length; i++ )
	{
		var c_option=document.createElement("option");
		c_option.innerHTML=p_genero[i];
	c_option.value=p_genero[i]; 	
		 v_select.appendChild(c_option);
	}
}
function enviar()
{
	var titulo=document.getElementById('titulo').value;
	//Acceder al select y ver su value
	var seleccion=document.getElementById('seleccion').value;
	alert('La pelicula'+titulo+' es de genero '+seleccion+'')
}
