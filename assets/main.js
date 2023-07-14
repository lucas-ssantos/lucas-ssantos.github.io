function EntrarSite()
{
	var site = document.getElementById("sites").value;
	
	window.location.href = "/"+site+"/index.html";
}